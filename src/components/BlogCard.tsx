"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface BlogCardProps {
  href: string;
  title: string;
  description: string;
  date: string;
  externalUrl?: string;
}

const BlogCard = ({ href, title, description, externalUrl }: BlogCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="my-6 p-6 rounded-lg border border-black bg-sky-50/50 hover:bg-sky-100/50 transition-colors duration-200"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={externalUrl || href} target={externalUrl ? "_blank" : "_self"}>
        <h3 className="text-2xl font-semibold decoration-sky-500 decoration-2 decoration-wavy hover:underline">
          {title}
        </h3>
      </Link>
      <p className="text-wrap mt-2">{description}</p>
      <Link href={externalUrl || href} target={externalUrl ? "_blank" : "_self"}>
        <div className="flex flex-row space-x-1 mt-4">
          <p className="font-semibold">Read more</p>
          <ArrowRight
            className={`text-sky-500 transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
