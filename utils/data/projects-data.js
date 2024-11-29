import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Role based admin panel for e-commerce (ReactJS)',
        description: "I led the development of a dynamic e-commerce web application using React, taking " +
            "charge of implementing a responsive front-end. This effort resulted in an intuitive user " +
            "interface and ensured seamless compatibility across various browsers. Collaborating " +
            "closely with a team of designers and back-end developers, I ensured the smooth " +
            "integration of user interfaces and functionalities. Our collective effort aimed to create a " +
            "cohesive and user-friendly experience for customers, emphasizing both design and " +
            "functionality.",
        tools: ['ReactJs,', 'React-MUI'],
        role: 'Front-end Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'AI based Analytics Mobile application (Ionic)',
        description: 'I took the reins in designing and engineering a versatile cross-platform mobile ' +
            'application using Ionic 6 and Angular. My focus was on crafting responsive user ' +
            'interfaces that catered to both iOS and Android platforms, ensuring a seamless and ' +
            'user-friendly experience across devices. Throughout the development process, I ' +
            'employed Git for version control, facilitating efficient team collaboration and ' +
            'streamlined code management. The goal was to create a cohesive mobile application ' +
            'that offered a consistent and enjoyable experience to users regardless of their device ' +
            'preferences.',
        tools: ['Ionic', 'Angular', "Typescript", "HTML", "CSS"],
        role: 'Front-end Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Online School Management system (ReactJS)',
        description: 'I led the development of an innovative online learning platform using React, where I was responsible for implementing a responsive and user-centric front-end. My work focused on creating an intuitive interface that facilitated smooth navigation and an engaging user experience across different devices and browsers. Collaborating closely with a team of designers and back-end developers, I ensured the seamless integration of live classes, recorded content, and problem-solving features. This collective effort aimed to deliver a comprehensive and accessible educational experience, with a strong emphasis on both design aesthetics and functionality.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Razorpay', 'Javascript'],
        code: '',
        role: 'Front-end Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Admin panel for LMS (NextJs)',
        description: "I spearheaded the development of an Admin Learning Management System (LMS) using NextJs, where I was responsible for building and managing a robust platform that offers courses and products to users. The project involved creating a dynamic and responsive admin dashboard that allows administrators to effortlessly manage course content, user enrollments, and product offerings. By integrating powerful features like course creation, product listings, and user management, I ensured the platform provides a seamless experience for both administrators and end-users. The emphasis was on creating a scalable, secure, and user-friendly system that supports the efficient delivery of educational content and products.",
        tools: ['NextJS', 'Material UI', 'Redux', 'React', "TypeScript,"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front-end Developer',
    },
    {
        id: 5,
        name: 'User application for restaurant (React native)',
        description: "I developed a user application for a restaurant using React Native, focusing on delivering a comprehensive and user-friendly experience. The app allows users to log in, sign up, and manage their profiles, including updating personal information and addresses. Integration with Google Maps enables users to easily locate the restaurant and manage delivery addresses. I also implemented seamless payment processing using Razorpay, allowing users to create and track orders efficiently. Additional features include cart management, the ability to download invoices, and a smooth, intuitive interface that enhances the overall user experience.",
        tools: ['React Native', 'Expo', 'Razorpay', 'Google Maps', "Firebase"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front-end Developer',
    }
];