import { React } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
// import '../styles/global.css'
const Home: NextPage = () => {
  return (
    <h1 className="title">
      Hello Pescon{' '}

      <Link href="/pescon/home">
        <a>pescon!</a>
      </Link>
      <Link href="/pescon/list">
        <a>Customer List!</a>
      </Link>
      <Link href="/pescon/input">
        <a>input!</a>
      </Link>
      <Link href="/buyer/checkout/checkout">
        <a>Customer Input!</a>
      </Link>
    </h1>
  );
};

export default Home;
