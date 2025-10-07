import CardNav from '../CardNav'
import logo from '../../public/heromoyo.svg';
import Section from '../myComponents/Section';

export default function Navbar() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "the specs",href:"#spec", ariaLabel: "About Company" },
        { label: "the project",href:"#about", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Research", 
      bgColor: "#C4CC93",
      textColor: "#fff",
      links: [
        { label: "Results",href:"#research", ariaLabel: "Featured Projects" },
        { label: "Insights",href:"#insights", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Persona", 
      bgColor: "#DCB8FF",
      textColor: "#fff",
      links: [
        { label: "Who is Sophia?",href:"#persona", ariaLabel: "Featured Projects" },
        { label: "User Flow",href:"#userflow", ariaLabel: "Featured Projects" },
        // { label: "Insights",href:"/", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Design", 
      bgColor: "#EA5036",
      textColor: "#fff",
      links: [
        { label: "Principles",href:"#principles", ariaLabel: "Featured Projects" },
        // { label: "Style Guide",href:"#style", ariaLabel: "Featured Projects" },
        { label: "Low Fidelity Wireframes",href:"#lofi", ariaLabel: "Featured Projects" },
        { label: "High Fidelity Wireframes",href:"#hifi", ariaLabel: "Featured Projects" },
        // { label: "Insights",href:"/", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contacts",
      bgColor: "#1B4E49", 
      textColor: "#fff",
      links: [
        { label: "Contact us",href:"#contact", ariaLabel: "Email us" },
        // { label: "Twitter",href:"/", ariaLabel: "Twitter" },
        // { label: "LinkedIn",href:"/", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <Section background='foundation' classname='w-full h-auto sticky top-0 z-50'>
      {/* CONTENEUR AJOUTÉ : Ce div va hériter des styles responsive de Section */}
      <div className='w-full relative'>
        <CardNav
          logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fcfaf2"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
    </Section>
  );
};