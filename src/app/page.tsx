import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Hello, I&apos;m Chris 👋</h2>
        <p className="text-xl mb-8">
          19 year old. University student. Software developer. AI enthusiast.
          Aspiring founder.
        </p>
        <Image
          src="/images/portrait.svg?height=300&width=300"
          alt="Chris Yoo"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-8"
        />
        <p className="text-lg max-w-2xl mx-auto">
          As a passionate software developer, I&apos;m constantly exploring new
          technologies and pushing the boundaries of what&apos;s possible. My
          goal is to create innovative solutions that make a positive impact on
          the world.
        </p>
      </section>
    </main>
  );
}
