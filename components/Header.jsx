import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(newCategories => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container px-3 md:px-5 lg:mx-auto lg:px-10 mb-8">
      <div className="border-b w-full inline-block border-white py-8">
        <div className="md:float-left block">
          <Link href="/">
            <a className="cursor-pointer font-bold text-4xl text-white hover:text-yellow-400">
              AM-Blog
            </a>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <a className="md:float-right mt-2 align-middle text-white  hover:text-yellow-400 transition ml-4 font-semibold cursor-pointer">
                {category.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
