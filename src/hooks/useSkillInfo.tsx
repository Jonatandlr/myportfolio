const useSkillInfo = () => {
    const skillInfo = {
        pL: [
            {
                name: "JavaScript",
                icon: "/images/Icons/javascript.svg",
                years: "1 Years",
                use: [
                    "Web Development",
                    "Frontend Development",
                    "Backend with Node.js",
                ],
            },
            
            {
                name: "TypeScript",
                icon: "/images/Icons/typescript.svg",
                years: "5 Months",
                use: [
                    "Web Development",
                    "Frontend Development",
                    "Development RESTful APIs"
                ],
            },
            {
                name: "Python",
                icon: "/images/Icons/python.svg",
                years: "2 Year",
                use: [
                    "Robotic programming",
                    "Computer vision",
                    "Data analysis",
                ],
            },
            {
                name: "C++",
                icon: "/images/Icons/Clogo.jpg",
                years: "1 Year",
                use: [
                    "Microcontrollers",
                    "Embedded systems",
                    "Algorithm programming",
                ],
            },
        ],
        Tec: [
            {
                icon: "/images/Icons/css3.svg",
                name: "CSS3",
            },
            {
                icon: "/images/Icons/html.svg",
                name: "HTML",
            },
            {
                icon: "/images/Icons/nextjs.svg",
                name: "NextJS",
            },
            {
                icon: "/images/Icons/react.svg",
                name: "ReactJS",
            },
            {
                icon: "/images/Icons/vscode.svg",
                name: "VSCode",
            },
            {
                icon: "/images/Icons/arduino.svg",
                name: "Arduino",
            },
            {
                icon: "/images/Icons/git.svg",
                name: "Git",
            },
            {
                icon: "/images/Icons/github.svg",
                name: "Github",
            },
            {
                icon: "/images/Icons/tailwind.svg",
                name: "Tailwind",
            },
            {
                icon: "/images/Icons/framer.png",
                name: "Framer",
            },
            {
                icon: "/images/Icons/multisim.jpeg",
                name: "MultiSim",
            },
            {
                icon: "/images/Icons/SolidWorksLogo.png",
                name: "SolidWorks",
            },
            {
                icon: "/images/Icons/nodejs.svg",
                name: "NodeJS",
            }
            
        ],
        Mech: [
            {
                icon: "/images/Icons/3dmodeling.svg",
                name:"3D Modeling",
                description:["Proficiency in using 3D modeling software such as SolidWorks  to design mechanical components and assemblies."],
                targets:[
                    "SolidWorks",
                    "Fusion 360",
                ]
            },
            {
                icon: "/images/Icons/csystem.svg",
                name:"Control Systems",
                description:[
                    "Understanding of control systems and the implementation of feedback control loops.",
                ],
                targets:[
                    "PID",
                    "System Modeling"
                ]
            },
            // {
            //     icon: "/images/Icons/pcbdesign.svg",
            //     name:"PCB Design",
            //     description:[
            //         "Proficiency in creating clear schematic diagrams using KiCad's tool, defining the logical structure of the circuit."
            //     ],
            //     targets:[
            //         "KiCad",
            //         "MultiSim",
            //     ]
            // },
        ],
        sF: {},

    }

    return skillInfo
}

export default useSkillInfo