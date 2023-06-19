import { Injectable, Logger } from '@nestjs/common'
import * as puppeteer from 'puppeteer'
import { Readable } from 'stream'

@Injectable()
export class PdfService {
  private readonly logger: Logger = new Logger(PdfService.name)

  async renderPdfFromUrl(
    url: string,
    filepath: string,
    schoolId: number,
    personId: number
  ) {
    this.logger.log('Try to open puppeteer browser...')
    const opts: puppeteer.LaunchOptions = {}
    if (process.env.MAC) {
      opts.executablePath =
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    }

    const browser = await puppeteer.launch({ headless: true, ...opts })

    this.logger.log('Try to open browser new page...')
    const page = await browser.newPage()

    const pageopts: puppeteer.PDFOptions = {
      format: 'letter',
      printBackground: true,
      margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
      preferCSSPageSize: true,
    }

    if (filepath) pageopts.path = filepath

    this.logger.log(`Navigate to ${url}...`)
    await page.setExtraHTTPHeaders({
      authorization: `${process.env.SECRET},${schoolId},${personId}`,
    })
    // await page.setRequestInterception(true)
    // page.on('request', req => {
    //   console.log(req.url())
    //   req.continue()
    // })
    const waitUntil = process.env.DEV ? 'networkidle2' : 'networkidle0'
    await page.goto(url, { waitUntil, timeout: 10000 })
    await page.waitForSelector('#report-ready', { timeout: 2000 })

    this.logger.log(`Generate PDF...`, pageopts.path)
    let pdfContent = Buffer.from('')
    pdfContent = await page.pdf(pageopts)

    this.logger.log(`Close Browser...`)
    await browser.close()

    return pdfContent
  }

  async renderPdfFromHtml(html: string) {
    this.logger.log('Try to open puppeteer browser...')
    const browser = await puppeteer.launch()

    this.logger.log('Try to open browser new page...')
    const page = await browser.newPage()

    this.logger.log(`Load HTML...`)
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 0 })

    this.logger.log(`Generate PDF...`)
    const pdfContent = await page.pdf({ format: 'letter', landscape: false })

    this.logger.log(`Close Browser...`)
    await browser.close()

    return pdfContent
  }

  /**
   * Create Readable Stream
   * @param buffer
   */
  createReadableStream(buffer: Buffer) {
    const stream: Readable = new Readable()
    stream.push(buffer)
    stream.push(null)
    return stream
  }
}
