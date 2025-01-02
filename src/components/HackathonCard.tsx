"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import React from "react";

interface HackathonCardProps {
  hackathon: string;
  date: string;
  location: string;
  award?: string;
  description: string;
  thumbnailUrl: string;
  githubUrl?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon,
  date,
  location,
  award,
  description,
  thumbnailUrl,
  githubUrl,
}) => {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-2xl">
      <div>
        <div className="relative w-full h-48 mb-3">
          <Image
            src={thumbnailUrl}
            alt={hackathon}
            fill={true}
            className="rounded-lg object-cover"
          />
          {award && (
            <div className="absolute top-0 left-0">
              <Image
                src="/images/hackathon/winner-ribbon.png"
                alt="winner ribbon"
                width={80}
                height={80}
              />
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold text-gray-800">{hackathon}</h2>
        {award && <p>Won: {award}</p>}
        <div className="my-2">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="cursor-pointer">
          {githubUrl && <SiGithub onClick={() => window.open(githubUrl)} />}
        </div>
        <div className="flex flex-row text-gray-400">
          <p>{date}</p>
          <p className="mx-2">•</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
