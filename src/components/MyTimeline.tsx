"use client";

import TimelineCard from "./TimelineCard";
import timeline from "@/data/timeline.json";

const MyTimeline = () => {
  return (
    <div className="flex flex-col items-center bg-black w-screen min-h-screen p-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-4">My Story</h2>
      <div className="relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 z-0 w-1 h-full bg-gradient-to-b from-black via-purple-500 via-15% to-pink-500" />
        <div className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white" />
        {timeline.map((event, index) => (
          <TimelineCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default MyTimeline;
