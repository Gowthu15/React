import React from 'react';

function Card({username,btntext="visit me"}) {
    console.log(username);
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt="Delicious slice of chocolate cake"
          src="https://images.pexels.com/photos/30925480/pexels-photo-30925480/free-photo-of-delicious-slice-of-rich-chocolate-cake-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <span className="text-2xl font-medium">Class Warfare</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>{username}</span>
          <span>·</span>
          <span>{btntext}</span>
        </span>
      </div>
    </div>
  );
}

export default Card;