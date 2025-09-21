
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <main className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-6xl font-bold text-center text-yellow-500'>
          Welcome to Peanut Butter World!
        </h1>
        <p className='mt-3 text-2xl text-center'>
          Discover the best peanut butter recipes, products, and more.
        </p>

        <div className='flex mt-6'>
          <Link href='/recipes'>
            <a className='px-4 py-2 m-2 font-bold text-white bg-green-500 rounded hover:bg-green-700'>Explore Recipes</a>
          </Link>
          <Link href='/products'>
            <a className='px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>Shop Products</a>
          </Link>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
