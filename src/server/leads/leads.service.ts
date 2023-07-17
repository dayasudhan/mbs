import {
  Injectable
} from '@nestjs/common';
import {
  InjectModel
} from '@nestjs/mongoose';
import {
  Model
} from 'mongoose';
import {
  CreateLeadsDto
} from '../dto/create-leads.dto';
import {
  UpdateLeadsDto
} from '../dto/update-leads.dto';
import {
  Leads,
  LeadsDocument
} from '../schemas/leads.schema';
import * as puppeteer from 'puppeteer'
import { Readable } from 'stream'
const os = require('os');
const path = require('path');
@Injectable()
export class LeadsService {

  constructor(@InjectModel(Leads.name) private readonly leadsModel: Model < LeadsDocument > ) {}

  async create(createleadsDto: CreateLeadsDto): Promise < LeadsDocument > {
    const leads = new this.leadsModel(createleadsDto);
    return leads.save();
  }

  async findAll(): Promise < LeadsDocument[] > {
    console.log("leads service findalll");
    return this.leadsModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.leadsModel.findById(id);
  }

  async update(id: string, updateleadsDto: UpdateLeadsDto): Promise < LeadsDocument > {
    return this.leadsModel.findByIdAndUpdate(id, updateleadsDto);
  }

  async remove(id: string) {
    return this.leadsModel.findByIdAndRemove(id);
  }
  getWindowsDownloadFolderPath() {
    const homeDir = os.homedir();
    const downloadFolderPath = path.join(homeDir, 'Downloads');
    return downloadFolderPath;
  }
  async generatePDF(id:string) {
    const downloadPath = this.getWindowsDownloadFolderPath();
    const outputpath = `${downloadPath}\\leads_${id}.pdf`;
    console.log("generatePDF 0000 .................")
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const pageopts: puppeteer.PDFOptions = {
      format: 'letter',
      printBackground: true,
      margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
      preferCSSPageSize: true,
    }
  
    let url = 'http://localhost:3000/buyer/checkout/info/?id=' +id;
    console.log("url",url,)
    await page.goto(url); // Replace with the URL or HTML content you want to generate PDF from
  
    await page.pdf({
      path: outputpath, // Specify the path where the PDF file will be saved
      format: 'A4' // Specify the page format (e.g., 'A4', 'Letter', etc.)
    });
    console.log(`generatePDF 123 ${outputpath} `)
    await browser.close();
  }
  async printPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/", {
      waitUntil: "networkidle2"
    });
    await page.setViewport({ width: 1680, height: 1050 });
    await page.pdf({
      path: "hacker_news.pdf",
      format: "A4",
      printBackground: true  
    });
  
    await browser.close();
    return "daya"
  }
  async pp()
  {
    const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
  }
}