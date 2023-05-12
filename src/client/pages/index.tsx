import { React } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <h1 className="title">
      Hello Pescon{' '}

      <Link href="/pescon/home">
        <a>pescon!</a>
      </Link>
      <Link href="/pescon/list">
        <a>Cstomer List!</a>
      </Link>
    </h1>
  );
};

export default Home;
