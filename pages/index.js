import Image from "next/image";
import About from "../components/About";
import Other from "../components/Other";
import Polls from "../components/Polls";

const Home = () => {
  return (
    <>
      <section className="h-screen justify-end space-y-24 md:space-y-0 md:justify-around flex flex-col md:flex-row items-center p-[10vw] wave home__wave">
        <div className="flex flex-col justify-center items-start">
          <p className="text-gray-600 text-[25px] m-0 leading-[0px] italic">
            {" "}
            Welcome to
          </p>
          <p className="font-bold text-[#6C63FF] text-[70px] m-0">VotesApp</p>
        </div>
        <span className="flex max-w-md pb-[20%] md:pb-0">
          <Image
            src="/assets/vote.svg"
            width="920"
            height="780"
            className="object-contain"
          />
        </span>
      </section>
      <About />
      <Polls />
      <Other />
    </>
  );
};

export default Home;
