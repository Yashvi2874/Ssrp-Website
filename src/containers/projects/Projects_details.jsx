import Project_1_img from '../../assests/images/project_images/img1.jpg';
import Project_2_img from '../../assests/images/project_images/img2.jpg';
import Project_3_img from '../../assests/images/project_images/img3.jpg';
import Project_4_img from '../../assests/images/project_images/img4.jpg';
import Project_5_img from '../../assests/images/project_images/img5.jpg';
import Project_6_img from '../../assests/images/project_images/img6.jpg';
import Project_7_img from '../../assests/images/project_images/img7.jpeg';
import Project_8_img from '../../assests/images/project_images/img8.jpg';
import Project_9_img from '../../assests/images/project_images/img9.jpg';

const Projects = [
    {
      id: 1,
      title: 'Student SAT',
      author: 'SSRP',
      image: Project_1_img,
      url: '/project/{id}',
      description: 'Our inaugural StudentSat, guided by ISRO and leading space startups, aims to elevate educational opportunities and expand the horizons of space research. Join us as we inspire future engineers and students to turn their dreams into reality ',
      objective: 'Data collection, communications and conducting experiments.',
      outcomes: 'Our showcase of technological expertise in propulsion and communications will garner nationwide recognition, fostering valuable connections and collaboration opportunities with startups and organizations. This event will positively impact student communities and encourage more colleges to venture into outer space.'
    },
    {
      id:2,
      title: 'GROUND STATION',
      author: 'SSRP',
      image: Project_2_img,
      url: '/project/{id}',
      description: 'The ground station is a device which will be built and used for the purpose of satellite communication, data acquisition, and space research endeavors and to connect with the ham community(Amateur Radio community).',
      objective: 'To receive and transmit data to satellites and for tracking our satellite. It will be used to remotely interact with the ham community (Amateur Radio community).',
      outcomes: 'This enables stable communication with satellites, facilitates satellite tracking for students, and allows us to become an active member of the ham community(Amateur Radio community).'
    },
    {
      id:3,
      title: 'CANSAT',
      author: 'SSRP',
      image: Project_3_img,
      url: '/project/{id}',
      description: 'The CanSat competition allows students to design, build, and launch miniature satellites resembling canisters. It provides practical experience in space science, progressing through design, construction, testing, and launch stages. CanSats are deployed via rockets to gather data during descent, with teams evaluated on design, functionality, data accuracy, and presentation.',
      objective: 'Components: Container, Probe Altitude Range: 670m - 725m  Deployment: Peak altitude Orientation: Uncontrolled Survivability: Launch and deployment forces Objective: Collect and transmit data from peak altitude.',
      outcomes: 'Students learn to develop optimized systems under extreme space constraints, including mechanical space-grade systems that endure forces and vibrations.'
    },
    {
      id:4,
      title: 'SPACEPORT AMERICA',
      author: 'SSRP',
      image: Project_4_img,
      url: '/project/{id}',
      description: "Intercollegiate rocket engineering competition by Spaceport America. Students design propulsion systems and avionics. Also aids in rocket recovery mechanism development for SSRP's CanSat testing.",
      objective: 'IREC teams design, build, and launch sounding rockets with payloads of minimum 8.8 lbs to reach apogees of 10,000 ft or 30,000 ft AGL. Aiming to advance research in monopropellant/hybrid rocket propulsion engines.',
      outcomes: 'Enables development of propulsion engines, including hybrids, and gathers sounding data from rocket payloads. Rockets can serve as testing platforms for CanSat tournament.'
    },
    {
      id:5,
      title: 'INTERNATIONAL ROVER CHALLENGE',
      author: 'SSRP',
      image: Project_5_img,
      url: '/project/{id}',
      description: 'To conceptualize, design, develop and operate an extraterrestrial rover and perform specific missions in simulated conditions.',
      objective: 'Design and build a rover with autonomous navigation, featuring detachable modules including an arm and a laboratory module for detecting signs of ancient life. Equipped with sensors like spectrometers and gas sensors, it can manipulate objects up to 1kg weight, enabling research in extraterrestrial terrain.',
      outcomes: 'This will forward our research on extraterrestrial autonomous rovers on harsh terrain.It will deepen our understanding of STEM fields.'
    },
    {
      id:6,
      title: 'BALLOON SAT',
      author: 'SSRP',
      image: Project_6_img,
      url: '/project/{id}',
      description: 'Experiment involves a meteorological balloon ascending to 50 km above sea level. Equipped with a UV sensor, it measures UV levels across regions to assess ozone levels.',
      objective: 'To gather ozone level data, attach a camera for topographic views, and establish ground station communication.',
      outcomes: "Explores satellite propulsion methods while collecting data in Earth's atmosphere."
    },
    {
      id:7,
      title: 'ALL SKY CAMERA',
      author: 'SSRP',
      image: Project_7_img,
      url: '/project/{id}',
      description: 'The All Sky camera is an apparatus which will be assembled by SSRP and will provide a 360 view of the night sky.',
      objective: 'To take a video record of the night sky which will allow us to record the different positions of the celestial bodies and how they differ each night.',
      outcomes: 'Study pictures to analyze irregularities in orbit, advancing understanding of celestial body influence on space.'
    },
    {
      id:8,
      title: 'TELESCOPE',
      author: 'SSRP',
      image: Project_8_img,
      url: '/project/{id}',
      description: 'Stargazing, fundamental to any astronomy club, promotes astronomy among amateurs and enthusiasts. A high-quality telescope enhances this experience.',
      objective: 'To study various astronomical bodies, including rare cosmic phenomena and potentially discover new ones and drive advancements in astronomy and spark curiosity about the cosmos.',
      outcomes: 'Advance knowledge in astronomy, astrophysics, and cosmology, foster interest in astronomy and space science and promote astrophotography, imaging, data analysis, and optics, enabling hands-on engagement with astronomy.'
    },
    {
      id:9,
      title: 'FESTIVAL',
      author: 'SSRP',
      image: Project_9_img,
      url: '/project/{id}',
      description: 'The festival serves to showcase our project, promote astronomy to a broad audience including amateurs and enthusiasts on an inter-collegiate level, expand our community and research opportunities, and raise awareness.',
      objective: 'To Instill curiosity about the cosmos in young minds, generate interest and establish contacts and engage potential sponsors and raise funds.',
      outcomes: 'Impart knowledge about astronomy, learning experience for the project and sponsor recognition for continued operations, awareness spreading, and accelerated research.'
    },
    // Add more projects as needed
  ];

    export default Projects;