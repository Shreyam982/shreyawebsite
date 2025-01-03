"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface BlogCardProps {
  href: string;
  title: string;
  description: string;
  date: string;
}

const BlogCard = ({ href, title, description }: BlogCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="my-6"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link href={href}>
        <h3 className="text-2xl font-semibold decoration-sky-500 decoration-2 decoration-wavy hover:underline">
          {title}
        </h3>
      </Link>
      <p className="text-wrap">{description}</p>
      <Link href={href}>
        <div className="flex flex-row space-x-1">
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
