import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({ post, position }) => (
  <>
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white text-shadow font-semibold text-xs">
        {moment(post.createdAt).format('DD MMM YYYY')}
      </p>
      <p className="text-white text-shadow font-semibold text-2xl text-center">
        {post.title}
      </p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="z-10 cursor-pointer absolute w-full h-full" />
    </Link>
    {position === 'LEFT' && (
      <div className="absolute arrow-btn bottom-5 text-center px-4 py-3 cursor-pointer bg-yellow-400 left-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )}
    {position === 'RIGHT' && (
      <div className="absolute arrow-btn bottom-5 text-center px-4 py-3 cursor-pointer bg-yellow-400 right-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )}
  </>
);

export default AdjacentPostCard;
