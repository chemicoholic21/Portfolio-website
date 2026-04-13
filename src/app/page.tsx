'use client';

import Image from "next/image";
import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Section refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const nameSectionRef = useRef<HTMLDivElement>(null);
  const socialEmailLinkRef = useRef<HTMLAnchorElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  
  const skillSectionRef1 = useRef<HTMLDivElement>(null);
  const skillSectionRef2 = useRef<HTMLDivElement>(null);
  const skillSectionRef3 = useRef<HTMLDivElement>(null);
  const skillSectionRefs = useMemo(() => [skillSectionRef1, skillSectionRef2, skillSectionRef3], []);
  
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Page Load Reveal (Hero)
      const tl = gsap.timeline();
      tl.fromTo(
        [aboutSectionRef.current, nameSectionRef.current],
        { opacity: 0, y: 80, scale: 0.95, filter: "blur(10px)" },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          filter: "blur(0px)",
          duration: 1.5, 
          ease: "expo.out", 
          stagger: 0.2 
        }
      );

      // Social links magnetic-like enter
      tl.fromTo(
        ".socialLink",
        { opacity: 0, y: 40, rotation: 5 },
        { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "power4.out", stagger: 0.1 },
        "-=1.2"
      );

      // 2. Scrub Parallax for Skills
      skillSectionRefs.forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0.2, y: 150, scale: 0.95, rotationX: 10 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              ease: "expo.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 95%",
                end: "top 60%",
                scrub: 1.5,
              },
            }
          );
        }
      });

      // 3. Staggered Experience Cards with Clip Path Reveal
      if (experienceRef.current) {
        const experienceItems = experienceRef.current.querySelectorAll('.companyBox, .experienceItem');
        gsap.fromTo(
          experienceItems,
          { opacity: 0, y: 100, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: experienceRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      }

      // 4. Oryzo-like Parallax Projects Cards
      if (projectsContainerRef.current) {
        const projects = projectsContainerRef.current.querySelectorAll('.projects');
        projects.forEach((proj) => {
          const img = proj.querySelector('.projectImg');
          
          // Outer card smooth entry
          gsap.fromTo(proj,
            { opacity: 0, y: 200, scale: 0.9 },
            {
              opacity: 1, y: 0, scale: 1, 
              ease: "expo.out",
              scrollTrigger: {
                trigger: proj,
                start: "top 90%",
                end: "top 50%",
                scrub: 1.2
              }
            }
          );

          // Inner image slight un-zooming parallax effect
          if (img) {
            gsap.fromTo(img,
              { scale: 1.2, rotation: 1 },
              {
                scale: 1, rotation: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: proj,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              }
            );
          }
        });
      }

      // 5. Contact Section Dramatic Reveal
      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current,
          { opacity: 0, y: 200, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 95%",
              end: "center 70%",
              scrub: 1.5,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [skillSectionRefs]);

  return (
    <div className="container" ref={containerRef}>
      <div className="navbar">
        <div className="nameLink">TANIYA SOUZA ©</div>
        <div className="pageLinks">
          <a href="#skills">skills</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </div>

      <div className="about">
        <div className="aboutSection" ref={aboutSectionRef}>
          <Image className="myPic" alt="Taniya Souza" src="/myPic.png" width={400} height={400} />
          <div className="fieldSection">
            <div>Taniya Souza</div>
            <div className="fieldName">Software engineer</div>
          </div>
        </div>
        <div className="nameSection" ref={nameSectionRef}>
          <div className="aboutHeading">ABOUT</div>
          <span>
            More into logic, systems, and backend than just UI. I build full-stack products using React, TypeScript, and Python, and spend a lot of time working on APIs, data flow, and AI-driven features. Currently building something on Github, you can check it!
          </span>
        </div>
      </div>

      <div className="socials" ref={socialLinksRef}>
        <a className="socialLink socialEmailLink" ref={socialEmailLinkRef} href="mailto:taniyasouza@gmail.com">email.</a>
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
          <div className="companyName">AI Foundations</div>
          <div className="companyPeriod">March 2026 – Present</div>
          <div className="companySkills">
            <div className="companySkillName">TypeScript</div>
            <div className="companySkillName">Performance</div>
            <div className="companySkillName">API Integration</div>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceName">Frontend Engineer (TypeScript, Performance & API Integration)</div>
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
          <div className="companyName">frog by Capgemini</div>
          <div className="companyPeriod">January 2025 - June 2025</div>
          <div className="companySkills">
            <div className="companySkillName">ReactJS</div>
            <div className="companySkillName">TypeScript</div>
            <div className="companySkillName">Next.js</div>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceName">Frontend / Design technologist</div>
          <div className="experienceDesc">
          Automated insurance policy verification using n8n and DeepOpinion. Built reusable, accessible UI components with React, TypeScript, Tailwind, and Storybook. Delivered a full-stack journaling app with Supabase and enforced coding standards via ESLint/Husky.
          </div>
        </div>
      </div>

      <div id="projects" ref={projectsContainerRef} style={{ display: 'flex', flexDirection: 'column', gap: '6vw' }}>
        <div className="projects">
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
          <a href="https://gitpulltalent.vercel.app" target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Image className="projectImg" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600" alt="GitPullTalent" width={1600} height={900} />
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
          <a href="https://github.com/chemicoholic21/github-data-pipeline" target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Image className="projectImg" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600" alt="github-data-pipeline" width={1600} height={900} />
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
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Image className="projectImg" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600" alt="Fitness App" width={1600} height={900} />
          </a>
        </div>

        <div className="projects">
          <div className="projectHeader">
            <div>
              <div className="projectName">JournalMind</div>
              <div className="projectDesc">
                Journaling application built with Next.js, TypeScript, and Tailwind CSS. Seamless user experience and robust design layout leveraging SSR.
              </div>
            </div>
            <a href="https://github.com/tsouza1007/JM" target="_blank" rel="noopener noreferrer">
              <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
            </a>
          </div>
          <a href="https://github.com/tsouza1007/JM" target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Image className="projectImg" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600" alt="JournalMind" width={1600} height={900} />
          </a>
        </div>

        <div className="projects">
          <div className="projectHeader">
            <div>
              <div className="projectName">Image Processing AI</div>
              <div className="projectDesc">
                Advanced image processing pipeline using Grounding DINO for object detection, SAM for segmentation, and SD-XL for image generation.
              </div>
            </div>
            <a href="https://colab.research.google.com/drive/1YGKV5TSSjF9UAfWZiulkk8t1GDxN6ysD" target="_blank" rel="noopener noreferrer">
              <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
            </a>
          </div>
          <a href="https://colab.research.google.com/drive/1YGKV5TSSjF9UAfWZiulkk8t1GDxN6ysD" target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Image className="projectImg" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1600" alt="AI PIPELINE" width={1600} height={900} />
          </a>
        </div>

        <div className="projects">
          <div className="projectHeader">
            <div>
              <div className="projectName">Positivus</div>
              <div className="projectDesc">
                Responsive website with microanimations and smooth transitions, built using ReactJS and Tailwind CSS.
              </div>
            </div>
            <a href="https://github.com/tsouza1007/Hackathon" target="_blank" rel="noopener noreferrer">
              <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
            </a>
          </div>
          <a href="https://github.com/tsouza1007/Hackathon" target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Image className="projectImg" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1600" alt="Positivus" width={1600} height={900} />
          </a>
        </div>

        <div className="projects">
          <div className="projectHeader">
            <div>
              <div className="projectName">Travel Planner</div>
              <div className="projectDesc">
                A travel planning application that allows users to create and manage their travel itineraries, integrated with live APIs.
              </div>
            </div>
            <a href="https://github.com/chemicoholic21/Travel-Planner" target="_blank" rel="noopener noreferrer">
              <Image className="projectLink" src="/linkArrow.png" alt="link" width={52} height={52} />
            </a>
          </div>
          <a href="https://github.com/chemicoholic21/Travel-Planner" target="_blank" rel="noopener noreferrer" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <Image className="projectImg" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=1600" alt="Travel Planner" width={1600} height={900} />
          </a>
        </div>
      </div>

      <div className="contact" id="contact" ref={contactRef}>
        <div className="contactName">Let&apos;s get started.</div>
        <a className="contactButton" href="mailto:taniyasouza@gmail.com">
          <button>taniyasouza@gmail.com</button>
        </a>
        <div className="pageLinks" style={{ marginTop: '2vw' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to Top</a>
        </div>
      </div>

      <div className="footer">
        <div className="nameLink">Taniya Souza.</div>
        <div className="footerRight">all rights reserved © 2026</div>
      </div>
    </div>
  );
}
