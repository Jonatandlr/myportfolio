const useProjects = () => {
    const data = [
        {
            image: '/images/imagesProyects/RetoAutomatizacionIndustrial.png',
            page: "/archivos/automatizacionInd.pdf",
            title: 'PID-Controlled Vehicle',
            description: 'The objective of this project is the design, assembly, and testing of an autonomous vehicle using a PID control system.',
            targets: ["Control", "PID", "Arduino", "C++"],
            github: "https://github.com/Jonatandlr/JohnDeereAutomatization"

        },
        {
            image: '/images/imagesProyects/TodoAPP.png',
            page: "https://todolistapp-umber.vercel.app/",
            title: 'To Do List',
            description: 'To Do List is a web application that allows you to create a list of tasks to be done, and mark them as completed.',
            targets: ["Nextjs", "Express", "REST API", "Vercel"],
            github: "https://github.com/Jonatandlr/ToDoList"
        },
        {
            image: '/images/imagesProyects/RetoJohnDeere.png',
            page: "/archivos/Reporte_Reto_JohnDeere.docx.pdf",
            title: 'John Deere Challenge',
            description: 'Creating of a device capable of forming a curvature on a metal sheet without generating deformation at the ends.',
            targets: ["Manufacturing", "Materials", "SolidWorks", "Simulations"],
            github: ""

        },
        {
            image: '/images/imagesProyects/RetoCarroArenaPLCS.png',
            page: "/archivos/CarritoDeArenaPLCs.pdf",
            title: 'Loading System',
            description: 'Designing a Sand Loading and Unloading System with PLC and a human interface to control it.',
            targets: ["PLCs", "Mechanical Design", "Automation", "Scheneider"],
            github: ""

        },


    ]
    return data
}
export default useProjects