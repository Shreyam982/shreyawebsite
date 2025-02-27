import MyTimeline from "@/components/MyTimeline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center container mx-auto px-4 pt-12">
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I&apos;m Shreya!</h2>
        <p className="text-xl mb-8">
          Public Speaker. Software developer. AI & Deep-tech enthusiast.
          Aspiring Founder. Innovator.
        </p>
        <Image
          src="/images/shreyaHeadshot.png"
          alt="Shreya Mukherjee"
          width={300}
          height={300}
          priority
          className="rounded-full mx-auto mb-8 object-cover"
        />
        <p className="text-lg max-w-2xl mx-auto font-bold">
          "The best way to predict the future is to create it."
        </p>
        <p className="text-lg max-w-2xl mx-auto">
          I'm a builder and storyteller at heart.
          My thesis is that technology can solve some of the world's most complex 
          problems, and I want to get to the forefront of that.
          I love building innovative solutions that 
          create lasting impact, and are able to change the lives of many people.
        </p>
      </section>
      <section className="mt-12">
        <MyTimeline />
      </section>
    </main>
  );
}
