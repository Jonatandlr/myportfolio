const useProjects = () => {
    const data=[
        {
            image: '/images/imagesProyects/RetoAutomatizacionIndustrial.png',
            page: "/archivos/automatizacionInd.pdf",
            title: 'PID-Controlled Vehicle',
            description:'The objective of this project is the design, assembly, and testing of an autonomous vehicle using a PID control system.',
            targets: ["Control", "PID", "Arduino","C++"],
            github:"https://github.com/Jonatandlr/JohnDeereAutomatization"
            
        },
        {
            image: '/images/imagesProyects/RetoJohnDeere.png',
            page: "/archivos/Reporte_Reto_JohnDeere.docx.pdf",
            title: 'Johnn Deere Challenge',
            description:'Creating of a device capable of forming a curvature on a metal sheet without generating deformation at the ends.',
            targets: ["Manufacturing", "Materials", "SolisWorks","Simulations"],
            github:""
            
        },
        {
            image: '/images/imagesProyects/3enLinea.png',
            page: "https://3-en-linea-react.vercel.app",
            title: '3 in a row',
            description:'Developed a web-based Tic Tac Toe game, providing an interactive and enjoyable experience.  the game allows two players to take turns, and the system detects the winner or a draw. ',
            targets: ["ReactJS", "CSS","HTML","Vercel"],
            github:"https://github.com/Jonatandlr/3EnLineaReact"
            
        },
        {
            image: '/images/imagesProyects/RetoCarroArenaPLCS.png',
            page: "/archivos/CarritoDeArenaPLCs.pdf",
            title: 'Loading and unloading system',
            description:'Designing a Sand Loading and Unloading System with PLC and a human interface to control it.',
            targets: ["PLCs", "Mechanical Design","Automation", "Scheneider"],
            github:""
            
        },

       
    ]
    return data
}
export default useProjects