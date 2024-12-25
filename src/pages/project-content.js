import BlogImage from '../images/blog.png';
import ChatImage from '../images/chat.png';
import AutoImage from '../images/home.png';
import PetImage from '../images/petcare.png';
import ScrapImage from '../images/scrap.jpeg';
import Note from '../images/note.png';
import Recipe from '../images/recipe.png';
const projects = [
    {
        img: AutoImage,
        title: 'Auto-Mobile Mechanic Website',
        desc:`An automobile mechanic website is an online platform designed to connect customers with professional
         mechanics for vehicle repair and maintenance services. The website allows users to browse available
          services, schedule appointments, and receive quotes. It may feature a user-friendly interface with
           service categories, a blog section for car care tips, customer testimonials, and an integrated 
           payment system. Additionally, it could include a mechanic locator tool, enabling users to find
            the nearest service providers. The website aims to streamline the process of vehicle maintenance
             and enhance customer satisfaction.`,
        live:'https://auto-mobiles-site.netlify.app/',
        repo:'https://github.com/Ranjithk7/AutoMob_Mechanic_Site'
    },
    {
        img: BlogImage,
        title: 'Full Stack Blog Site',
        desc:`A Full Stack Blog Website is a comprehensive web application where users can create, edit, view, and delete blog posts. The project involves both front-end and back-end development, integrating technologies such as HTML, CSS, JavaScript for the front-end, and Node.js, Express.js, and a database (like MongoDB or PostgreSQL) for the back-end. The front-end provides a user-friendly interface for browsing posts, while the back-end handles data storage, user authentication, and server-side logic. This project demonstrates proficiency in building and deploying a full stack web application, incorporating CRUD operations, responsive design, and secure authentication.`,
        live:'',
        repo:'https://github.com/Ranjithk7/Fullstack-Blog-Site-Redux-Toolkit-'
    },
    {
        img: ScrapImage,
        title: 'Scraping a Jop Portal Using Python',
        desc:`This project demonstrates how to extract and process data from web pages using Python's Beautiful Soup library. The project involves sending HTTP requests to a website, retrieving its HTML content, and then parsing it to identify and extract specific elements such as text, links, images, or tables. The scraped data can be stored in various formats like CSV, JSON, or databases for further analysis or use in other applications. This project is ideal for automating data collection from websites that do not provide APIs.`,
        live:'',
        repo:'https://github.com/Ranjithk7/Scraping-Job-Portal-Using-Python/tree/master'
    },
    {
        img: ChatImage,
        title: 'Real Time Chat Application',
        desc:`A Real-Time Chat Web Application is an interactive platform that allows users to communicate instantly with one another through text messages. Built using modern web technologies, this application features user authentication, real-time messaging, and the ability to create or join chat rooms. It employs technologies like WebSocket for live communication, a responsive UI for an optimal user experience across devices, and a backend server to manage user data and message persistence. The project aims to provide a seamless and efficient way for users to engage in conversations, either one-on-one or in group settings, in real time.`,
        live:'',
        repo:'https://github.com/Ranjithk7/Realtime-chat-web-application'
    },
    {
        img: PetImage,
        title: 'Pet Care Site Using Tailwind Css',
        desc:`A Pet Clinic website designed using Tailwind CSS is a modern, responsive platform that offers a 
        clean and professional interface for pet care services. The site features key sections like Home, 
        Services, About Us, and Contact, showcasing services such as veterinary care, grooming, and 
        boarding. Tailwind CSS enables efficient styling with utility classes, ensuring the site is visually 
        appealing and user-friendly on all devices. The project emphasizes responsive design, quick loading 
        times, and ease of navigation, making it a robust solution for pet owners seeking care for their pets.`,
        live:'',
        repo:'https://github.com/Ranjithk7/Realtime-chat-web-application'
    },
    {
        img: Note,
        title: 'Sticky Notes',
        desc:`This web application is a digital platform for creating, organizing, and managing sticky notes, developed using React with 
        Vite for a fast development environment. The application uses Bootstrap for responsive and visually appealing UI components, 
        ensuring a sleek and user-friendly design. Redux is integrated for efficient state management, allowing seamless handling of 
        user interactions and updates across the application`,
        live:'https://online-sticky-notes.netlify.app/',
        repo:'https://github.com/Ranjithk7/note-app'
    },
    {
        img: Recipe,
        title: 'Recipe Book',
        desc:``,
        live:'https://yummy-recipe-list.netlify.app/',
        repo:'https://github.com/Ranjithk7/Recipe-Book/tree/main'
    }

    
]

export default projects
