const About = () => {
  const skills = [
    "React",
    "NextJs",
    "JavaScript",
    "TypeScript",
    "Functional Programming",
    "Git",
    "Sass",
    "Css",
  ];

  return (
    <div>
      <div className="text-center shadow-gray-300 shadow-lg p-10 my-10 rounded-xl">
        <h3 className="text-lg text-teal-500">Some of My Skills</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
          {skills.map((s,index) => (
           <p className="py-2" key={index}>{s}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
