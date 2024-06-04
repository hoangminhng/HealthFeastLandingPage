import Logo from "../../assets/Logo.png";

const Footer: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 my-4 mx-3">
        <div className="flex items-center justify-between space-y-4 lg:space-y-0">
          <img src={Logo} className="h-14" alt="Flowbite Logo" />
          <div className="flex flex-col">
            <p>“Giữ gìn sức khỏe, </p>
            <p>sống cuộc sống của bạn”</p>
          </div>

          <div className="flex">
            <svg
              viewBox="0 0 24 24"
              id="meteor-icon-kit__solid-instagram"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 mx-2"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>

            <svg
              viewBox="0 0 24 24"
              id="meteor-icon-kit__solid-facebook"
              className="w-8 h-8 mx-2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="h-full text-center items-end content-end">
          <p className="text-[#B4B4B4]">Copyright &copy; 2024 | Healthfeast</p>
        </div>

        <ul className="flex flex-col md:flex-row items-center justify-center lg:justify-around space-y-4 md:space-y-0">
          <li>
            <button
              type="button"
              className="bg-[#9ABF5A] font-medium rounded-lg text-sm px-6 py-4 text-center text-gray-900"
            >
              Tham gia
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-2.5 py-0.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
            >
              <svg
                className="w-10 h-10 me-2 -ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div>
                <p className="text-sm">Download on the</p>
                <h4 className="text-xl font-bold dark:text-white">App store</h4>
              </div>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-2.5 py-0.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30"
            >
              <svg
                className="w-10 h-10 me-2 -ms-1"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <mask
                    id="mask0_87_8320"
                    maskUnits="userSpaceOnUse"
                    x="7"
                    y="3"
                    width="24"
                    height="26"
                  >
                    {" "}
                    <path
                      d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z"
                      fill="#C4C4C4"
                    ></path>{" "}
                  </mask>{" "}
                  <g mask="url(#mask0_87_8320)">
                    {" "}
                    <path
                      d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z"
                      fill="url(#paint0_linear_87_8320)"
                    ></path>{" "}
                    <path
                      d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z"
                      fill="url(#paint1_linear_87_8320)"
                    ></path>{" "}
                    <path
                      d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z"
                      fill="url(#paint2_linear_87_8320)"
                    ></path>{" "}
                    <path
                      d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z"
                      fill="url(#paint3_linear_87_8320)"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_87_8320"
                      x1="15.6769"
                      y1="10.874"
                      x2="7.07106"
                      y2="19.5506"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#00C3FF"></stop>{" "}
                      <stop offset="1" stop-color="#1BE2FA"></stop>{" "}
                    </linearGradient>{" "}
                    <linearGradient
                      id="paint1_linear_87_8320"
                      x1="20.292"
                      y1="15.8176"
                      x2="31.7381"
                      y2="15.8176"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#FFCE00"></stop>{" "}
                      <stop offset="1" stop-color="#FFEA00"></stop>{" "}
                    </linearGradient>{" "}
                    <linearGradient
                      id="paint2_linear_87_8320"
                      x1="7.36932"
                      y1="30.1004"
                      x2="22.595"
                      y2="17.8937"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#DE2453"></stop>{" "}
                      <stop offset="1" stop-color="#FE3944"></stop>{" "}
                    </linearGradient>{" "}
                    <linearGradient
                      id="paint3_linear_87_8320"
                      x1="8.10725"
                      y1="1.90137"
                      x2="22.5971"
                      y2="13.7365"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#11D574"></stop>{" "}
                      <stop offset="1" stop-color="#01F176"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </g>
              </svg>
              <div className="flex flex-col items-start">
                <p className="text-sm">Get it on</p>
                <h4 className="text-xl font-bold dark:text-white">
                  Google play
                </h4>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
