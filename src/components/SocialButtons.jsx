import { TERipple } from "tw-elements-react";

const SocialButtons = () => {
  return (
    <div className="grid grid-cols-2 ">
     
      <TERipple rippleColor="light">
        <button
          type="button"
          className="mb-14  flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#1da1f2" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
          Twitter
        </button>
      </TERipple>

     
      <TERipple rippleColor="light">
        <button
          type="button"
          className="flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#E4405F" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zM16 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM4 7.5C4 5.57 5.57 4 7.5 4h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9z" />
          </svg>
          Instagram
        </button>
      </TERipple>

     
      <TERipple rippleColor="light">
        <button
          type="button"
          className="flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#0077B5" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3A2.5 2.5 0 0 1 21.5 5.5V19a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19V5.5A2.5 2.5 0 0 1 5 3h14zm-6.5 7.5h-2V19h2v-5.5c0-1.105.895-2 2-2s2 .895 2 2V19h2v-5.5c0-2.209-1.791-4-4-4s-4 1.791-4 4V19zm-6 0h2V19h-2v-8.5zm1-5c-.829 0-1.5.671-1.5 1.5s.671 1.5 1.5 1.5 1.5-.671 1.5-1.5-.671-1.5-1.5-1.5z" />
          </svg>
          LinkedIn
        </button>
      </TERipple>

      
      <TERipple rippleColor="light">
        <button
          type="button"
          className="flex items-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#1877F2" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88v-6.99H7.898v-2.89h2.54v-2.2c0-2.51 1.493-3.89 3.773-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.775-1.63 1.57v1.86h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.99 22 12z" />
          </svg>
          Facebook
        </button>
      </TERipple>
    </div>
  );
};

export default SocialButtons;
