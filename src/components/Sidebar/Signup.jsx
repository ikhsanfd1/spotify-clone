import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="fixed bottom-0 signup_bar text-sm items-center flex px-5 py-2 mx-2 justify-between">
      <div>
        <p className="uppercase">preview on spotify</p>
        <p className="font-bold">
          Sign up to get unlimited Songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <div className="px-6 py-0">
        <button className="rounded-full mt-2 px-5 py-3 signup_button text-black bg-white font-bold">
          Sign Up free
        </button>
      </div>
    </div>
  );
};

export default Signup;
