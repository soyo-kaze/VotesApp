const About = () => {
  return (
    <div className="flex h-screen md:h-full flex-col pt-4 md:pt-16  items-center wave about__wave ">
      <p className="font-bold text-[70px] text-white">About Us</p>
      <span className="flex justify-center flex-col md:flex-row items-center space-y-10 md:space-x-24 mt-16">
        {["", "", ""].map(() => (
          <span className="rounded-2xl shadow-xl h-[20vw] w-[20vw] bg-white"></span>
        ))}
      </span>
    </div>
  );
};

export default About;
