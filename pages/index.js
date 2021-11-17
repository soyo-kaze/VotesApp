import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="h-screen justify-around flex items-center p-[10vw] wave">
        <div className="flex flex-col justify-center items-start">
          <p className="text-gray-600 text-[25px] m-0 leading-[0px] italic">
            {" "}
            Welcome to
          </p>
          <p className="font-bold text-indigo-700 text-[70px] m-0">Votes App</p>
        </div>
        <span className="flex max-w-md">
          <Image
            src="/assets/vote.svg"
            width="920"
            height="780"
            className="object-contain"
          />
        </span>
      </section>
    </>
  );
};

export default Home;
