import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaPhp } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-orange-500' />,
    text: 'Being skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-yellow-300' />,
    text: 'Enjoying the possibilities of JavaScript, building interactive and dynamic web applications with good user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'Php',
    icon: <FaPhp className='h-16 w-16 text-sky-700' />,
    text: 'The base of backend, developing the data handling behind the scene to construct result what the user wishes to see.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    //url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/Johnthestudent/Aveomachine_games_typescriptified',
    title: 'first project - Aveomachine game series',
    text: 'An interesting escaping logical game series with Javascript - JQuery event handling.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    //url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/Johnthestudent/Johnthestudent.github.io/tree/main/singlung_magyar_2',
    title: 'second project - Singlung page',
    text: 'Introductionary page of the Singlung method.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    //url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/Johnthestudent/OpenAPI_project',
    title: 'third project - OpenAPI project',
    text: 'Implementing a REST-API like Php project with two forms.',
  },
];
