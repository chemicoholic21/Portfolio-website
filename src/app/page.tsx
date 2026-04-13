'use client';

import Image from "next/image";
import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Section refs for GSAP animations
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const nameSectionRef = useRef<HTMLDivElement>(null);
  const socialEmailLinkRef = useRef<HTMLAnchorElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const skillSectionRef1 = useRef<HTMLDivElement>(null);
  const skillSectionRef2 = useRef<HTMLDivElement>(null);
  const skillSectionRef3 = useRef<HTMLDivElement>(null);
  const skillSectionRefs = useMemo(() => [skillSectionRef1, skillSectionRef2, skillSectionRef3], []);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // About section
    if (aboutSectionRef.current) {
      gsap.fromTo(
        aboutSectionRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 }
      );
    }
    if (nameSectionRef.current) {
      gsap.fromTo(
        nameSectionRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 }
      );
    }
    // Socials
    if (socialEmailLinkRef.current) {
      gsap.fromTo(
        socialEmailLinkRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, ease: "power2.out", duration: 1 }
      );
    }
    if (socialLinksRef.current) {
      gsap.fromTo(
        socialLinksRef.current.querySelectorAll(".socialLink"),
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, ease: "power2.out", duration: 1, stagger: 0.1 }
      );
    }
    // Skills
    skillSectionRefs.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            ease: "power.out",
            duration: 1,
            scrollTrigger: {
              trigger: ref.current,
              start: "0% 84%",
              end: "10% 70%",
            },
          }
        );
      }
    });
    // Experience
    if (experienceRef.current) {
      gsap.fromTo(
        experienceRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "power.out",
          duration: 2,
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "10% 80%",
            end: "50% 70%",
          },
        }
      );
    }
    // Projects
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "power.out",
          duration: 2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "10% 80%",
            end: "50% 70%",
          },
        }
      );
    }
    // Contact
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "power.out",
          duration: 1,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "0% 80%",
            end: "50% 70%",
          },
        }
      );
    }
  }, [skillSectionRefs]);

  return (
    <div className="container">
      <div className="navbar">
        <div className="nameLink">Portfolio</div>
        <div className="pageLinks">
          <a href="#skills">skills</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </div>

      <div className="about">
        <div className="aboutSection" ref={aboutSectionRef}>
          <Image className="myPic" alt="photo" src="/myPic.png" width={280} height={280} />
          <div className="fieldSection">
            <div>Taniya Souza</div>
            <div className="fieldName">Software engineer</div>
          </div>
        </div>
        <div className="nameSection" ref={nameSectionRef}>
          <div className="aboutHeading">ABOUT</div>
          <span>
            Frontend Engineer and AI Product Builder with experience across TypeScript, React, and Python. Currently building GitPullTalent — a GitHub-based developer ranking and discovery platform. I've worked across AI product engineering, design systems, and full-stack development at Series-A startups and design consultancies.
          </span>
        </div>
      </div>

      <div className="socials" ref={socialLinksRef}>
        <a className="socialEmailLink" ref={socialEmailLinkRef} href="mailto:taniyasouza@gmail.com">email.</a>
        <a className="socialLink" href="/Taniya_Souza_.pdf" download>resume.</a>
        <a className="socialLink" href="https://www.linkedin.com/in/taniya-souza-284167203/" target="_blank" rel="noopener noreferrer">linkedIn.</a>
        <a className="socialLink" href="https://github.com/chemicoholic21" target="_blank" rel="noopener noreferrer">github.</a>
      </div>

      <div className="skills" id="skills">
        <div className="skillSection" id="front" ref={skillSectionRefs[0]}>
          <div className="skillHeader">Frontend.</div>
          <div className="skillNameSection">
            <div className="skillName">ReactJS</div>
            <div className="skillName">HTML & CSS</div>
            <div className="skillName">JavaScript</div>
            <div className="skillName">TypeScript</div>
            <div className="skillName">Tailwind CSS</div>
            <div className="skillName">Storybook</div>
            <div className="skillName">Figma</div>
          </div>
        </div>
        <div className="skillSection" id="back" ref={skillSectionRefs[1]}>
          <div className="skillHeader">Backend.</div>
          <div className="skillNameSection">
            <div className="skillName">NodeJS</div>
            <div className="skillName">ExpressJS</div>
            <div className="skillName">MongoDB</div>
            <div className="skillName">AWS</div>
            <div className="skillName">Supabase</div>
            <div className="skillName">Qdrant</div>
            <div className="skillName">REST APIs</div>
            <div className="skillName">LLM/AI integrations</div>
            <div className="skillName">CI/CD</div>
            <div className="skillName">MySQL</div>
          </div>
        </div>
        <div className="skillSection" id="lang" ref={skillSectionRefs[2]}>
          <div className="skillHeader">Languages & Tools.</div>
          <div className="skillNameSection">
            <div className="skillName">Python</div>
            <div className="skillName">Next.js</div>
            <div className="skillName">SQL</div>
            <div className="skillName">Linux</div>
            <div className="skillName">ESLint/Husky</div>
          </div>
        </div>
      </div>

      <div className="experience" id="experience" ref={experienceRef}>
        <div className="experienceheading">EXPERIENCE</div>
        <div className="companyBox">
          <div className="companyName">AI Foundations School</div>
          <div className="companyPeriod">March 2026 – Present</div>
          <div className="companySkills">
            <div className="companySkillName">TypeScript</div>
            <div className="companySkillName">Performance</div>
            <div className="companySkillName">API Integration</div>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceName">Frontend Engineer (TypeScript, Performance & API Integration), Remote</div>
          <div className="experienceDesc">
          Building GitPullTalent: a GitHub-based developer ranking and discovery platform. Designed a scoring system evaluating developers on commits, pull requests, and repo quality for recruiter-focused signals. Handled large-scale data ingestion, ranking logic, and profile prioritization heuristics.
          </div>
        </div>
        <div className="companyBox">
          <div className="companyName">Indhic AI</div>
          <div className="companyPeriod">Jan 2026 – Feb 2026</div>
          <div className="companySkills">
            <div className="companySkillName">AI Engineer</div>
            <div className="companySkillName">Consultant</div>
            <div className="companySkillName">Contract</div>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceName">AI Engineer Consultant (Contract), Bengaluru</div>
          <div className="experienceDesc">
          Comparative analysis of healthcare LLMs (MedGemma vs Gemini Flash 2.5 & 3.0) across clinical reasoning, cost, latency, and deployment. Extracted treatment-planning algorithms from STOPP/START frameworks.
          </div>
        </div>
        <div className="companyBox">
          <div className="companyName">Grapevine (Series-A)</div>
          <div className="companyPeriod">July 2025 – Jan 2026</div>
          <div className="companySkills">
            <div className="companySkillName">AI Product Engineer</div>
            <div className="companySkillName">Intern</div>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceName">AI Product Engineer Intern, Bengaluru</div>
          <div className="experienceDesc">
          Deployed LLM-powered conversational and voice AI using Gemini, ElevenLabs, and Google Voice. Migrated n8n workflows to Python, reducing execution time by ~97%. Built embedding-based resume tagging and search pipelines using Qdrant. Built backend automation for job discovery and outreach at scale.
          </div>
        </div>
        <div className="companyBox">
          <div className="companyName">frog by Capgemini Invent</div>
          <div className="companyPeriod">January 2025 - June 2025</div>
          <div className="companySkills">
            <div className="companySkillName">ReactJS</div>
            <div className="companySkillName">TScript</div>
            <div className="companySkillName">Next.js</div>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceName">Frontend / Design technologist</div>
          <div className="experienceDesc">
          • Automated insurance policy verification using n8n and DeepOpinion.
          <br />
• built reusable, accessible UI components with React, TypeScript, Tailwind, and Storybook.
<br />
• delivered a full-stack journaling app with Supabase, Typescript, Tailwind css and Next Js.
<br />
• enforced coding standards via ESLint/Husky, followed atomic design, and collaborated through
GitHub and CI.
<br />
• Delivered a full-stack web application using Next.js, TypeScript, Supabase, and REST APIs.
          </div>
        </div>
      </div>

      <div className="projects" id="projects" ref={projectsRef}>
        <div className="projectHeader">
          <div>
            <div className="aboutHeading">PROJECTS</div>
            <div className="projectName">GitPullTalent</div>
            <div className="projectDesc">
              A GitHub-based developer ranking and discovery platform. Scores developers on real activity like commits, PRs, and repo quality to surface meaningful signals for recruiters. Built with TypeScript.
            </div>
          </div>
          <a href="https://github.com/chemicoholic21/Git-Pull-Talent" target="_blank" rel="noopener noreferrer">
            <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
          </a>
        </div>
        <a href="https://gitpulltalent.vercel.app" target="_blank" rel="noopener noreferrer">
          <Image className="projectImg" src="/mockup1.png" alt="GitPullTalent" width={800} height={400} />
        </a>
      </div>

      <div className="projects">
        <div className="projectHeader">
          <div>
            <div className="projectName">github-data-pipeline</div>
            <div className="projectDesc">
              A headless data pipeline that ingests, caches, and analyzes GitHub data, storing structured insights in Postgres and Redis. Built with TypeScript, BullMQ, Drizzle ORM.
            </div>
          </div>
          <a href="https://github.com/chemicoholic21/github-data-pipeline" target="_blank" rel="noopener noreferrer">
            <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
          </a>
        </div>
        <a href="https://github.com/chemicoholic21/github-data-pipeline" target="_blank" rel="noopener noreferrer">
          <Image className="projectImg" src="/mockup1.png" alt="github-data-pipeline" width={800} height={400} />
        </a>
      </div>

      <div className="projects">
        <div className="projectHeader">
          <div>
            <div className="projectName">Fitness App</div>
            <div className="projectDesc">
              Real-time posture/movement monitoring web app using OpenCV. Python backend, React frontend, hosted on AWS.
            </div>
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
          </a>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image className="projectImg" src="/mockup1.png" alt="Fitness App" width={800} height={400} />
        </a>
      </div>

      <div className="projects">
        <div className="projectHeader">
          <div>
            <div className="projectName">JournalMind</div>
            <div className="projectDesc">
              Journaling application built with Next.js, TypeScript, and Tailwind CSS.
              It allows users to create, edit, and delete journal entries, with a focus on
              user-friendly design and responsive layout. The app features a clean interface,
              ensuring a seamless experience across devices. It utilizes Next.js for server-side rendering,
              enhancing performance and SEO. The project showcases proficiency in modern web development
              technologies and a commitment to delivering high-quality, maintainable code.
            </div>
          </div>
          <a href="https://github.com/tsouza1007/JM" target="_blank" rel="noopener noreferrer">
            <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
          </a>
        </div>
        <a href="https://github.com/tsouza1007/JM" target="_blank" rel="noopener noreferrer">
          <Image className="projectImg" src="/mockup3.png" alt="Book shop" width={800} height={400} />
        </a>
      </div>

      <div className="projects">
        <div className="projectHeader">
          <div>
            <div className="projectName">Image Processing using Groudning Dino, SAM and SD-XL</div>
            <div className="projectDesc">
              This project demonstrates advanced image processing techniques using
              Grounding DINO for object detection, SAM (Segment Anything Model) for
              segmentation, and SD-XL (Stable Diffusion XL) for image generation.
              It showcases the integration of these models to create a comprehensive
              pipeline for analyzing and generating images, highlighting the capabilities
              of modern AI in computer vision tasks.
            </div>
          </div>
          <a href="https://colab.research.google.com/drive/1YGKV5TSSjF9UAfWZiulkk8t1GDxN6ysD#scrollTo=wz7jaj02TnKi" target="_blank" rel="noopener noreferrer">
            <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
          </a>
        </div>
        <a href="https://colab.research.google.com/drive/1YGKV5TSSjF9UAfWZiulkk8t1GDxN6ysD#scrollTo=wz7jaj02TnKi" target="_blank" rel="noopener noreferrer">
          <Image className="projectImg" src="/mockup1.png" alt="Book shop" width={800} height={400} />
        </a>
      </div>

      <div className="projects">
        <div className="projectHeader">
          <div>
            <div className="projectName">Positivus</div>
            <div className="projectDesc">
              Responsive website with microanimations and smooth transitions,
              built using ReactJS and Tailwind CSS. The project showcases 
              advanced CSS techniques, including hover effects and animations,
              to create an engaging user experience. It features a modern design
              with a focus on usability and aesthetics, ensuring compatibility
              across various devices and screen sizes.
            </div>
          </div>
          <a href="https://github.com/tsouza1007/Hackathon" target="_blank" rel="noopener noreferrer">
            <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
          </a>
        </div>
        <a href="https://github.com/tsouza1007/Hackathon" target="_blank" rel="noopener noreferrer">
          <Image className="projectImg" src="/mockup1.png" alt="Book shop" width={800} height={400} />
        </a>
      </div>

      <div className="projects">
        <div className="projectHeader">
          <div>
            <div className="projectName">Travel Planner</div>
            <div className="projectDesc">
              A travel planning application that allows users to create and manage their travel itineraries.
              It features a user-friendly interface for adding destinations, activities, and accommodations,
              with options to customize trip details. The app integrates with external APIs for real-time
              information on flights, weather, and local attractions, providing a comprehensive travel planning
              experience.
            </div>
          </div>
          <a href="https://github.com/chemicoholic21/Travel-Planner" target="_blank" rel="noopener noreferrer">
            <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
          </a>
        </div>
        <a href="https://github.com/chemicoholic21/Travel-Planner" target="_blank" rel="noopener noreferrer">
          <Image className="projectImg" src="/mockup1.png" alt="Book shop" width={800} height={400} />
        </a>
      </div>

      <div className="contact" id="contact" ref={contactRef}>
        <div className="contactName">Let&apos;s get started.</div>
        <a className="contactButton" href="mailto:taniyasouza@gmail.com">
          <button>taniyasouza@gmail.com</button>
        </a>
        <div className="pageLinks"><a href="#">Back to Top</a></div>
      </div>

      <div className="footer">
        <div className="nameLink">Taniya Souza.</div>
        <div className="footerRight">all rights reserved © 2026</div>
      </div>
    </div>
  );
}
