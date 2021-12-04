const About = () => {
  return (
    <div className="flex h-full md:h-screen flex-col pt-4 md:pt-16 mb-24 md:mb-0 items-center about__wave ">
      <p className="font-bold text-[70px] text-white">About Us</p>
      <span className="flex justify-center pl-10 pr-10 flex-col md:flex-row items-center space-y-10 md:space-x-24 md:space-y-0 mt-16">
        {["", "", ""].map(() => (
          <span className="rounded-2xl shadow-xl bg-[#3F3D56] text-white p-8">
            <h1 className="font-bold text-[30px] mb-2">Title</h1>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              eleifend erat, quis rhoncus lectus. Maecenas mattis ante in.
            </p>
          </span>
        ))}
      </span>
    </div>
  );
};

export default About;
