"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

const NavBar = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/portrait.svg?height=50&width=50"
          alt="Chris Yoo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Chris Yoo</h1>
          <p>@PenTest-duck</p>
        </div>
      </div>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              href="/"
              className="text-foreground hover:text-muted-foreground"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-foreground hover:text-muted-foreground"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/hackathons"
              className="text-foreground hover:text-muted-foreground"
            >
              Hackathons
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-foreground hover:text-muted-foreground"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-foreground hover:text-muted-foreground"
            >
              Contact
            </Link>
          </li>
          <li>
            <div className="flex flex-row space-x-4">
              <Link href="https://github.com/PenTest-duck/personal-website">
                <SiGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/chris-yoo">
                <SiLinkedin />
              </Link>
            </div>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
