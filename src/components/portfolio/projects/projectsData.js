import flightfullImgPreview from './screenshots/Flightfull/preview.jpg';
import flightfullPopupImgPreview from './screenshots/Flightfull/popup-preview.jpg';
import budgetAppImgPreview from './screenshots/Budget-app/preview.jpg';
import budgetAppPopupImgPreview from './screenshots/Budget-app/popup-preview.jpg';
import robofriendsImgPreview from './screenshots/Robofriends/preview.jpg';
import robofriendsPopupImgPreview from './screenshots/Robofriends/popup-preview.jpg';
import spaceTravellerImgPreview from './screenshots/Space-traveller/preview.jpg';
import spaceTravellerPopupImgPreview from './screenshots/Space-traveller/popup-preview.jpg';
import mathMagicianImgPreview from './screenshots/Math-magician/preview.jpg';
import mathMagicianPopupImgPreview from './screenshots/Math-magician/popup-preview.jpg';
import movies2WatchImgPreview from './screenshots/Movies2Watch/preview.jpg';
import movies2WatchPopupImgPreview from './screenshots/Movies2Watch/popup-preview.jpg';

const projects = [
  {
    id: 1,
    name: 'Flightfull',
    preview: flightfullImgPreview,
    technologies: [
      {
        name: 'React',
        link: 'https://github.com/facebook/react',
      },
      {
        name: 'Redux',
        link: 'https://github.com/reduxjs/redux',
      },
      {
        name: 'React Router',
        link: 'https://github.com/remix-run/react-router',
      },
      {
        name: 'Ruby on Rails',
        link: 'https://github.com/rails/rails',
      },
      {
        name: 'JWT',
        link: 'https://github.com/jwt/ruby-jwt',
      },
      {
        name: 'Rswag',
        link: 'https://github.com/rswag/rswag',
      },
    ],
    popupPreview: flightfullPopupImgPreview,
    info: "Flightfull is a flight reservations website that use REST API. Users can manage their own flights and reserve others' flights.",
    demo: 'https://flightfull.netlify.app/',
    source: 'https://github.com/saied2035/Flightfull-frontend',
  },
  {
    id: 2,
    name: 'Budget app',
    preview: budgetAppImgPreview,
    technologies: [
      {
        name: 'Ruby on Rails',
        link: 'https://github.com/rails/rails',
      },
      {
        name: 'Devise',
        link: 'https://github.com/heartcombo/devise',
      },
      {
        name: 'CanCanCan',
        link: 'https://github.com/CanCanCommunity/cancancan',
      },
    ],
    popupPreview: budgetAppPopupImgPreview,
    info: 'RoR app that helps users to add their categories and transactions.',
    demo: 'https://glacial-lake-16247.herokuapp.com/',
    source: 'https://github.com/saied2035/Rails-budget-app',
  },
  {
    id: 3,
    name: 'Robofriends',
    preview: robofriendsImgPreview,
    technologies: [
      {
        name: 'React',
        link: 'https://github.com/facebook/react',
      },
      {
        name: 'Redux',
        link: 'https://github.com/reduxjs/redux',
      },
    ],
    popupPreview: robofriendsPopupImgPreview,
    info: 'Robofriends is a website that displays robots and has an instant search by name. I built the website built by React and Redux.',
    demo: 'https://saied2035.github.io/robofriends-react/',
    source: 'https://github.com/saied2035/robofriends-react',
  },
  {
    id: 4,
    name: 'Space traveller',
    preview: spaceTravellerImgPreview,
    technologies: [
      {
        name: 'React',
        link: 'https://github.com/facebook/react',
      },
      {
        name: 'Redux',
        link: 'https://github.com/reduxjs/redux',
      },
      {
        name: 'React Router',
        link: 'https://github.com/remix-run/react-router',
      },
    ],
    popupPreview: spaceTravellerPopupImgPreview,
    info: "A space traveler is where you can book a rocket or join a mission to discover the space. It consists of 3 pages. Rockets' page is where you can book a rocket of your choice. Missions' page is where you can join a mission to explore the space. The profile is where you can find your booked rockets & joined missions.",
    demo: 'https://saied-laxmi-spacetraveler.netlify.app/',
    source: 'https://github.com/saied2035/space-traveler',
  },
  {
    id: 5,
    name: 'Math magician',
    preview: mathMagicianImgPreview,
    technologies: [
      {
        name: 'React',
        link: 'https://github.com/facebook/react',
      },
      {
        name: 'React Router',
        link: 'https://github.com/remix-run/react-router',
      },
    ],
    popupPreview: mathMagicianPopupImgPreview,
    info: "Calculator website with react router. It's single page application that enables you to perform mathematical operations, read a quote about mathematics and an introduction to math on the home page",
    demo: 'https://math-magic-site.netlify.app/',
    source: 'https://github.com/saied2035/math-magicians-full-website',
  },
  {
    id: 6,
    name: 'Movies2Watch',
    preview: movies2WatchImgPreview,
    technologies: [
      {
        name: 'JavaScript/ES6',
        link: 'https://github.com/lukehoban/es6features',
      },
      {
        name: 'HTML5',
        link: 'https://www.w3schools.com/html/',
      },
      {
        name: 'CSS3',
        link: 'https://www.w3schools.com/css/',
      },
    ],
    popupPreview: movies2WatchPopupImgPreview,
    info: 'Display list of movies and their descriptions with ability of commint, like, and react.',
    demo: 'https://saied2035.github.io/movie-app/',
    source: 'https://github.com/saied2035/movie-app',
  },
];

export default projects;
