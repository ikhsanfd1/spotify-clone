import React from 'react';
import Layout from '../../Layout/Layout';
import { FaBackward } from 'react-icons/fa';

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between text-sm items-center mb-8">
        <div>
          <span>{'<'}</span>
          <span>{'>'}</span>
        </div>
        <div>
          <button className="rounded-full mt-2 px-5 py-3 signup_button text-white font-bold">
            Sign Up
          </button>
          <button className="rounded-full mt-2 px-5 py-3 signup_button text-black bg-white font-bold">
            Login
          </button>
        </div>
      </div>
      <FaBackward />
    </Layout>
  );
};

export default Home;
