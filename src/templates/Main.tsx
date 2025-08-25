import Link from "next/link";
import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">
        <div className="pb-8 pt-16">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>

        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link
                  href="/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/about/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/history/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  history
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/posts"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  posts
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/jump"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  jump
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };
