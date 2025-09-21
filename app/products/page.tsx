
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductsPage: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <main className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-4xl font-bold text-center text-blue-500'>
          Shop Our Peanut Butter Products
        </h1>
        <p className='mt-3 text-lg text-center'>
          Coming soon...
        </p>
        <Link href='/'>
          <a className='px-4 py-2 m-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700'>Go Back</a>
        </Link>
      </main>
      <Footer />
    </Fragment>
  );
};

export default ProductsPage;
