
import { CommandLineIcon, CodeBracketSquareIcon,ComputerDesktopIcon,UserGroupIcon } from '@heroicons/react/24/outline'
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import {  XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";
import Squares from './Background';

import { Bars3Icon,EnvelopeIcon} from '@heroicons/react/24/outline'
import photo from '../assets/images/portfolio.jpeg';
// import bg from '../assets/images/bg2.jpg';
import { use } from 'react';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contacts', href: '#contacts' },
]

const features = [
  {
    name: 'Languages',
    description:'Python, JavaScript, Java',
    icon: CommandLineIcon,
  },
  {
    name: 'Libraries',
    description:'NumPy, Pandas, MatPlotLib, React, Node.js, Express.js',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Relevant Coursework',
    description:' Operating Systems, Data Structures, Algorithms, Database Systems',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Soft Skills:',
    description:'Leadership,Teamwork, Communication, Problem Solving, Time Management',
    icon: UserGroupIcon,
  },
]
export default function Landing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
      () => ["DEVELOPER", "DESIGNER", "YAPPER", "EXPLORER", "HUSTLER"]
    
    );
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (titleNumber === titles.length - 1) {
          setTitleNumber(0);
        } else {
          setTitleNumber(titleNumber + 1);
        }
      }, 2000);
      return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

  return (
    // <div style={{background: "linear-gradient(90deg, rgb(221, 128, 216) 0%, rgba(216,141,226,1) 36%, rgba(180,130,223,1) 53%, rgba(141,105,182,1) 63%, rgba(159,104,240,1) 68%, rgba(110,97,213,1) 84%, rgba(105,102,148,1) 100%, rgba(84,115,124,1) 100%, rgba(0,212,255,1) 100%)" }}>
    <div style={{background:"linear-gradient(plum,30%,yellow,60%,pink,91%,black)"}}>
    
         
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
           
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12" style={{borderRadius:"50%",borderBlockColor:"black"}}>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/ font-semibold text-gray-900 underline hover:text-gray-700 hover:underline" >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="mailto:arshiatalwar17@gamil.com" className="text-sm/ font-bold text-gray-900 hover:text-green-700 hover:underline">
              Hire me<span aria-hidden="true" className="text-2xl">&rarr;</span>
            </a>
          </div>
        </nav>
         {/* Mobile menu, show/hide based on mobile menu state. */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src=""
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="mailto:arshiatalwar17@gamil.com"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Hire me
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6  lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
       

          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  sm:left-1/2 sm:w-[36.125rem] lg::w-[72.1875rem]"
          />
        </div>
        <div className="mx-10 py-40 sm:py-40 lg:py-15 mb-0">
          
          <div className="text-center " >
            
            <div className=" flex flex-col sm:flex-row items-center sm:items-start ">
              <div className=" intro flex-1 ml-10 mr-80">
                
            <h1 className=" text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Hi! I am Arshia Talwar
            </h1>
            <p className=" mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-3xl font-mono">
             I'm a
            </p>
            <h6 className="text-5xl md:text-6xl max-w-2xl tracking-tighter text-center font-regular">
              {/* <span className="text-spektr-cyan-50">This is something</span> */}
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h6>
            
            </div>
            <div className="relative flex-1 mt-10 sm:mt-0 ">
        <img
          alt="Arshia Talwar"
          src={photo}
          className="relative w-auto h-96  object-cover sm:-top-16"
        />
      </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        
        >
          <div
            
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
             />
        </div>
       <h1 className='text-5xl font-semibold tracking-tight text-gray-600 sm:text-7xl text-center py-7' id='projects'>Projects</h1>
      </div>
      <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
          className='absolute top- left-0 w-full h-full z-0'
        />
      <div className="py-2 sm:py-30 " >
       
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-10 grid gap-4 sm:mt-1 lg:grid-cols-3 lg:grid-rows-2" >
  {/* Card 1 - Mobile Friendly */}
  <a href="#projects" className="relative lg:row-span-2">
    <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
      <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
          Mobile friendly
        </p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        </p>
      </div>
      <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
        <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
          <img
            className="size-full object-cover object-top"
            src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
            alt="Mobile friendly"
          />
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
  </a>

  {/* Card 2 - Performance */}
  <div className="relative max-lg:row-start-1">
    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
      <div className="px-8 pt-8 sm:px-10 sm:pt-10">
        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
        <img
          className="w-full max-lg:max-w-xs"
          src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
          alt="Performance"
        />
      </div>
    </div>
    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
  </div>

  {/* Card 3 - Security */}
  <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
    <div className="absolute inset-px rounded-lg bg-white"></div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
      <div className="px-8 pt-8 sm:px-10 sm:pt-10">
        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
        </p>
      </div>
      <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
        <img
          className="h-[min(152px,40cqw)] object-cover"
          src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
          alt="Security"
        />
      </div>
    </div>
    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
  </div>

  {/* Card 4 - Powerful APIs */}
  <div className="relative lg:row-span-2">
    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
      <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
          Powerful APIs
        </p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
        </p>
      </div>
      <div className="relative min-h-[30rem] w-full grow">
        <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                NotificationSetting.jsx
              </div>
              <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
            </div>
          </div>
          <div className="px-6 pb-14 pt-6">{/* Your code example */}</div>
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
  </div>
</div></div></div>
{/* about me */}
<div className="relative isolate overflow-hidden py-24 sm:py-20">
      <div
        aria-hidden="true"
        className="transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 4.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 40%, 27.6% 76.8%, 26.1% 97.7%, 4.1% 44.1%)',
          }}
          className=" lg:w-[68.5625rem] bg-gradient-to-tr from-[#874ee5] to-[#c5bbd6] opacity-20"
        />
      </div>
      <div className=" flex mx-auto max-w-7xl px-6 lg:px-8">
     
        <div className="flex-1 mx-auto max-w-xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-600 sm:text-7xl" id='about'>About me</h2>
          <p className="mt-20 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
           I'm a tech enthusiast,currently in B.Tech third year based in delhi-ncr who is looking for opportunities to grow and learn.<br/>
           I'm a Frontend Web Developer focused on building and managing the Front-end of Websites and Web Applications. Check out some of my work in the Projects section. <br/>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
          </p>
        </div>
        
        <div className=" flex-1 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-pink-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-900">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div></div>
        {/* contact */}
      
   
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-0 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#c5bbd6] opacity-20"
        />
      </div>
        
      <div
        aria-hidden="true"
        className="transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          
          className="lg:w-[68.5625rem] bg-gradient-to-tr from-[#874ee5] to-[#c5bbd6] opacity-20"
        />
      </div>
      <div className="  mx-auto max-w-8xl px-6 lg:px-8 h-80" >
      
        <div className=" mx-auto max-w-xl lg:mx-0"></div>
      <div className="contact mx-auto max-w-7xl px-6 lg:px-8 py-4 ml-20"></div>
            <h1 className=" text-5xl font-semibold tracking-tight text-gray-700 sm:text-7xl text-center" id='contacts'>Contact</h1>
            <div className="flex justify-center items-center space-x-6 py-10">
      {/* Gmail Icon */}
      <a
        href="mailto:arshiatalwar17@gamil.com"
        className="text-black-600 hover:text-red-800"
        aria-label="Email"
      >
        <EnvelopeIcon className="h-8 w-8" />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/arshia-talwar-151a9a258/"
        className="text-lue-600 hover:text-red-800"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-8 w-8"
        >
          <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.33c-.97 0-1.75-.8-1.75-1.75s.78-1.75 1.75-1.75 1.75.8 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.33h-3v-5.5c0-1.33-.03-3.04-1.85-3.04s-2.13 1.45-2.13 2.96v5.58h-3v-10h2.88v1.35h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.63v5.56z" />
        </svg>
      </a>
            <a
        href="https://github.com/arshia-talwar"
        className="text-black-600 hover:text-red-800"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-8 w-8"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.53.117-3.18 0 0 1.008-.322 3.3 1.23.957-.267 1.983-.4 3.003-.405 1.02.005 2.047.138 3.006.405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.65.24 2.875.118 3.18.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.825.577C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
     
    </div>
        </div>
          
                  
    </div>





    
  )
}
