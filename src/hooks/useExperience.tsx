const useExperience = () => {
  const Experience = {
    JD: {
      title: "John Deere",
      position: "Software Engineer Intern",
      date: "2024 - Present",
      description: `Software Engineer Intern at John Deere, working on resolving production defects and enhancing software stability across multiple applications, contributing to continuous improvement of development processes.`,
      targets: [
        "C++",
        "Qt Framework",
        "Memory Management",
        "Jenkins",
        "CI/CD",
        "Debugging",
      ],
      images: [
        "/images/ExperienceImage/jd.jpeg",
        "/images/ExperienceImage/badge.jpeg",
      ],
    },
    RB: {
      title: "RoBorregos",
      position: "Software Developer",
      date: "2022 - Present",
      description: `Software Developer at Roborregos, the Representative Robotic Team from Tecnologico de Monterrey, contributing to innovative robotic projects and competitions.`,
      targets: [
        "Python",
        "Yolov8",
        "OpenCV",
        "Computer Vision",
        "Typescript",
        "React.js",
        "Next.js",
        "Astro",
        "C++",
        "Robotic",
      ],
      images: [
        "/images/ExperienceImage/RB1.jpg",
        "/images/ExperienceImage/RB2.jpg",
      ],
    },
  };
  return Experience;
};
export default useExperience;
