import { IoPersonSharp } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiBellSimpleRinging } from "react-icons/pi";
import Image from "next/image";
import jelen from "/public/jelen.png";
export default function Header() {
  return (
    <div className="w-full bg-slate-800">
      <header className="bg-transparent">
        <nav className="flex justify-between w-full  text-white p-4">
          <a href="#">
            <span className="font-semibold text-xl tracking-tight">
              Tablica ogłoszeniowa
            </span>
          </a>
          <Image
            src={jelen}
            width={120}
            height={120}
            alt="Picture of the author"
            className="absolute z-20 left-1/2"
          />
          <div className="md:items-center md:w-auto flex">
            <div className="md:flex hidden">
              <a
                className="block md:text-white mr-4 hover:bg-slate-600 rounded-full transition-all p-1"
                href="#"
              >
                <PiBellSimpleRinging size={30} />
              </a>
              <a
                className="block md:text-white mr-4 hover:bg-slate-600 rounded-full transition-all p-1"
                href="#"
              >
                <BiMessageSquareDetail size={30} />
              </a>
              <a
                className="block md:text-white mr-4 hover:bg-slate-600 rounded-full transition-all p-1"
                href="#"
              >
                <IoPersonSharp size={30} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className="bottomNav fixed bottom-0 w-full">
        <nav className="md:hidden bottom-0 w-full bg-gray-700 text-xs">
          <ul className="flex justify-around items-center text-white text-center opacity-75 text-lg font-bold">
            <li className="p-4 hover:bg-gray-500">
              <a href="#">
                <span>Link 1</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="p-4 hover:bg-gray-500">
              <a href="#">
                <span>Link 2</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="p-4 hover:bg-gray-500">
              <a href="#">
                <span>Link 3</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="p-4 hover:bg-gray-500">
              <a href="#">
                <span>Link 4</span>
                <svg
                  className="h-6 w-6 fill-current mx-auto"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
