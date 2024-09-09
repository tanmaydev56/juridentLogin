
import logo from "../assets/Logo (1).svg"
import bell from "../assets/bell.svg"
import image1  from "../assets/image12.png"
import line from "../assets/line.svg"
import { FaFacebook } from "react-icons/fa";
import image2 from "../assets/WhatsApp Image 2024-09-09 at 11.46.42_b689a943.jpg"
import image3 from "../assets/WhatsApp Image 2024-09-09 at 11.47.14_f4454fb3.jpg"
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useState } from 'react';
import Search from "../assets/search.svg"
import avatar from "../assets/avatar.svg"
 import google from "../assets/Google__G__logo.svg"
import DashIcon from "../assets/dashicon.svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import { useEffect } from 'react';
 

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const tl = gsap.timeline({
        repeat:-1,
        repeatDelay:0.2,
      });
      const t2 = gsap.timeline({
        repeat:-1,
        repeatDelay:0.2,
      })

      const t3 = gsap.timeline({
        repeat: -1,           // Loop indefinitely
        repeatDelay: 0.2,     // Delay between repeats
      });
      const t4 = gsap.timeline({
        repeat: -1,           // Loop indefinitely
        repeatDelay: 0.2,     // Delay between repeats

      });
      
  
      t3.fromTo(
        "#image11",
        { opacity: 0, transform: "translateX(600px)" }, // Starting state with translateX
        { 
          opacity: 1,
          transform: "translateX(40px)",               // Slide to the position using translateX
          duration: 1,
          ease: "power2.out",
        }
      ).to("#image11", {
        opacity: 0,                                     // Fade out
        duration: 1,
        delay: 5,                                       // Delay to allow full visibility
      });
      
      t3.fromTo(
        "#image22",
        { opacity: 0, transform: "translateX(600px)" },  // Starting state with translateX
        { 
          opacity: 1,
          transform: "translateX(-280px)",               // Slide to the position using translateX
          duration: 1,
          ease: "power2.out",
        }
      ).to("#image22", {
        opacity: 0,                                      // Fade out
        duration: 1,
        delay: 5,                                        // Delay to allow full visibility
      });
      
      t3.fromTo(
        "#image33",
        { opacity: 0, transform: "translateX(600px)" },  // Starting state with translateX
        { 
          opacity: 1,
          transform: "translateX(-560px)",               // Slide to the position using translateX
          duration: 1,
          ease: "power2.out",
        }
      ).to("#image33", {
        opacity: 0,                                      // Fade out
        duration: 1,
        delay: 5,                                        // Delay to allow full visibility
      });
      


      // text mobile animation
      // Animation for #text11
t4.fromTo(
  "#text11",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state with translateX
  { 
    opacity: 1,
    transform: "translateX(100px)",                // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  }
).to("#text11", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

// Animation for #text22
t4.fromTo(
  "#text22",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state with translateX
  { 
    opacity: 1,
    transform: "translateX(-130px)",                // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  }
).to("#text22", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

// Animation for #text33
t4.fromTo(
  "#text33",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state with translateX
  { 
    opacity: 1,
    transform: "translateX(-300px)",               // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  }
).to("#text33", {  // This should target #text33 instead of #text22
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});



      
      


     // Animation for #text1
t2.fromTo(
  "#text1",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state: right of the viewport with translateX
  {
    opacity: 1,
    transform: "translateX(390px)",                // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  }
).to("#text1", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

// Animation for #text2
t2.fromTo(
  "#text2",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state: right of the viewport with translateX
  {
    opacity: 1,
    transform: "translateX(60px)",                 // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  },
  "-=0.5"                                          // Start slightly before text1 finishes
).to("#text2", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

// Animation for #text3
t2.fromTo(
  "#text3",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state: right of the viewport with translateX
  {
    opacity: 1,
    transform: "translateX(-330px)",               // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  },
  "-=0.5"                                          // Start slightly before text2 finishes
).to("#text3", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

  
      
  
      // Animation for image1
     // Animation for #image1
tl.fromTo(
  "#image1",
  { opacity: 0, transform: "translateX(800px)" },  // Starting state: right of the viewport with translateX
  {
    opacity: 1,
    transform: "translateX(580px)",                // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  }
).to("#image1", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

// Animation for #image2 (starts after image1 is done)
tl.fromTo(
  "#image2",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state: right of the viewport with translateX
  {
    opacity: 1,
    transform: "translateX(0px)",                  // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  },
  "-=0.5"                                          // Start slightly before image1 finishes
).to("#image2", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

// Animation for #image3 (starts after image2 is done)
tl.fromTo(
  "#image3",
  { opacity: 0, transform: "translateX(600px)" },  // Starting state: right of the viewport with translateX
  {
    opacity: 1,
    transform: "translateX(-550px)",               // Slide to position using translateX
    duration: 1,
    ease: "power2.out",
  },
  "-=0.5"                                          // Start slightly before image2 finishes
).to("#image3", {
  opacity: 0,                                      // Fade out
  duration: 1,
  delay: 5,                                        // Delay to allow full visibility
});

    }, []);


    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div className='w-full h-screen '>
        
<div className='flex overflow-hidden flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[165px] shrink-0 bg-[#FAFAFA] p-4 lg:p-12 shadow-custom'>

  <div className='flex justify-center lg:justify-start gap-4 items-center w-full lg:w-auto'>
    <img src={logo} alt="Jurident Logo" className='lg:w-[38px] h-[72px] w-[25px]' />
    <h1 className='text-[#050125] text-[24px] lg:text-[30px] lg:mt-6 font-[900] leading-normal mr-[23px]'>
      JURIDENT
    </h1>
  </div>

  
  <div className='lg:hidden flex items-center left-7 top-10 absolute'>
    <button onClick={toggleMenu} className=''>
      <img src={DashIcon} className='text-[#050125] h-[25px] w-[25px] mt-[2px]' alt="Menu" />
    </button>
  </div>

  
  <div className={`lg:flex ${isOpen ? 'flex' : 'hidden'} flex-col lg:flex-row w-full lg:w-auto mt-4  lg:justify-center lg:mt-6 lg:items-center `}>
    <ul className='flex flex-col lg:flex-row text-[#616161] text-[20px] lg:text-[26px] font-[500] lg:w-[450px] justify-center lg:justify-between items-center'>
      <li className='mt-2 lg:mt-0 lg:mx-4'>Blogs</li>
      <li className='mt-2 lg:mt-0 lg:mx-4'>News</li>
      <li className='mt-2 lg:mt-0 lg:mx-4'>About Us</li>
    </ul>
  </div>


  <div className='flex gap-3 items-center'>
 
    <div className='lg:hidden flex gap-2 absolute right-7 mb-16  '>
      <button className='w-[35px] h-[35px] shrink-0 rounded-full bg-gray-200 flex justify-center items-center'>
        <img src={Search} alt="Search" className='h-[25px] w-[25px]' />
      </button>
      <button className='w-[35px] h-[35px] shrink-0 rounded-full bg-gray-200 flex justify-center items-center'>
        <img src={avatar} alt="Profile" className='h-[25px] w-[25px]' />
      </button>
    </div>

 
    <div className='hidden lg:flex gap-3 lg:mt-6'>
      <button className='w-[123px] h-[43px] shrink-0 rounded-[30px] bg-[#050125] text-[15px] font-[500] text-center text-[#FAFAFA]'>Log In</button>
      <button className='w-[123px] h-[43px] shrink-0 rounded-[30px] bg-[#FAFAFA] border text-[15px] font-[500] text-[#050125] border-custom'>Sign Up</button>
      <img className='h-[30px] w-[30px] shrink-0  lg:mt-2' src={bell} alt="Notifications" />
    </div>
  </div>
</div>





<div className='flex flex-col-reverse lg:flex-row w-full justify-around p-4 lg:p-14 gap-6'>

  <div className='flex flex-col gap-6 w-full lg:w-auto'>
    <h1 className='text-[#000] text-[24px] lg:text-[30px] font-[700]'>Login</h1>
    <h3 className='text-[#555454] text-[14px] lg:text-[16px] font-[500]'>Welcome back! Please login to your account.</h3>
    
    <label htmlFor="" className='text-[16px] lg:text-[20px] text-[#000] font-[500]'>User Name</label>
    <input className='w-full lg:w-[457px] h-[50px] lg:h-[68px] shrink-0 rounded-[10px] border-[1px] p-10 text-[#000] text-[16px] font-[500] border-[#555454] bg-[#FAFAFA]' type="text" />
    
    <label htmlFor="" className='text-[16px] lg:text-[20px] text-[#000] font-[500]'>Password</label>
    <input className='w-full lg:w-[457px] h-[50px] lg:h-[68px] shrink-0 rounded-[10px] border-[1px] border-[#555454] bg-[#FAFAFA] p-10 text-[#000] text-[16px] font-[500]' type="password" />
    
    <div className='w-full lg:w-[459px] flex flex-col lg:flex-row justify-between'>
      <div className='flex items-center gap-3'>
        <input className='w-[20px] lg:w-[25px] h-[20px] lg:h-[25px] bg-[#050125]' type="checkbox" name="" id="" />
        <h2 className='text-[14px] lg:text-[16px] font-[500] text-[#000]'>Remember Me</h2>
      </div>
      <h2 className='text-[14px] lg:text-[16px] font-[500] text-[#000] mt-2 lg:mt-0'>Forgot Password?</h2>
    </div>
    
    <div className='text-center'>
      <button className='w-full lg:w-[335px] h-[50px] lg:h-[68px] shrink-0 rounded-[10px] text-[#FAFAFA] text-[16px] lg:text-[20px] font-[500] border-[1px] border-[#050125] bg-[#050125]'>Log In</button>
    </div>
    
    <br />
    
    <div className='flex flex-row lg:flex-row items-center gap-3 lg:gap-6'>
      <h1 className='text-[14px] lg:text-[16px] font-[500] text-[#000] mt-1'>New User?</h1>
      <a className='text-[#C99F4A] text-[18px] lg:text-[20px] font-[700]' href="/SignUp">
        <h1>Sign Up</h1>
      </a>
      <img className='w-[130px] lg:w-[253px] lg:block mt-2' src={line} alt="" />

    </div>
    
    <div className='flex justify-center'>
      <ul className='w-full lg:w-[246px] h-[25px] shrink-0 flex lg:justify-between  justify-evenly'>
        <li><a href=""><FaFacebook className='text-[#1877F2] text-[20px] lg:text-[25px] font-[700]'/></a></li>
        <li><a href=""><img src={google} alt="" className='text-yellow-500 text-[20px] lg:text-[25px] font-[700]' /></a></li>
        <li><a href=""><FaTwitter className='text-[#1DA1F2] text-[20px] lg:text-[25px] font-[700]'/></a></li>
        <li><a href=""><FaApple className='text-[#000000] text-[20px] lg:text-[25px] font-[700]'/></a></li>
      </ul>
    </div>
  </div>

 
  <div className="flex flex-col justify-center items-center gap-6 lg:gap-10 w-full lg:w-auto overflow-hidden" id="animation">
  
  <div className="hidden lg:flex">
    <img
      src={image1}
      id="image1"
      alt="Organized illustration"
      className="w-full max-w-[300px] lg:w-auto lg:max-w-none"
    />
    <img
      src={image2}
      id="image2"
      className="w-full max-w-[300px] lg:w-auto lg:max-w-none"
      alt=""
    />
    <img
      src={image3}
      id="image3"
      className="w-full max-w-[300px] lg:w-auto lg:max-w-none"
      alt=""
    />
  </div>

 
  <div className="hidden lg:flex" id="textanimation">
  
    <div className="flex flex-col" id="text1">
      <h2 className="text-[#1E1E1E] text-[20px] lg:text-[36px] font-[500] text-center">Stay Organised</h2>
      <div className="w-full lg:w-[379px] h-auto lg:h-[97px] text-center px-4 lg:px-0">
        <h2 className="text-[#000] text-[14px] lg:text-[20px] font-[500]">
          Ensure that your schedule is accurate by entering new appointments or events into our digital calendar.
        </h2>
      </div>
    </div>

    
    <div id="text2" className="flex flex-col">
      <h2 className="text-[#1E1E1E] text-[20px] lg:text-[36px] font-[500] text-center">Never be Late</h2>
      <div className="w-full lg:w-[379px] h-auto lg:h-[97px] text-center px-4 lg:px-0">
        <h2 className="text-[#000] text-[14px] lg:text-[20px] font-[500]">
          Our alarm system integrated within the app will notify you of any upcoming events.
        </h2>
      </div>
    </div>

    
    <div id="text3" className="flex flex-col">
      <h2 className="text-[#1E1E1E] text-[20px] lg:text-[36px] font-[500] text-center">Everything in one place</h2>
      <div className="w-full lg:w-[379px] h-auto lg:h-[97px] text-center px-4 lg:px-0">
        <h2 className="text-[#000] text-[14px] lg:text-[20px] font-[500]">
          Add your personal notes to any case you’d prefer.
        </h2>
      </div>
    </div>
  </div>
</div>


{/* mobile animation */}
<div className="flex flex-col justify-center items-center gap-6 max-w-[400px] w-full  h-[500px]  lg:hidden overflow-hidden" >
<div className="flex">
      <img
        src={image1}
        id="image11"
        className="w-full max-w-[300px] lg:w-auto lg:max-w-none rounded-[30px]"
        alt="Image 1"
      />
      <img
        src={image2}
        id="image22"
        className="w-full max-w-[300px] lg:w-auto lg:max-w-none rounded-[30px]"
        alt="Image 2"
      />
      <img
        src={image3}
        id="image33"
        className="w-full max-w-[300px] lg:w-auto lg:max-w-none rounded-[30px]"
        alt="Image 3"
      />
    </div>

  <div className="flex w-full justify-between   ">
  <div className="flex flex-col" id="text11" >
      <h2 className="text-[#1E1E1E] text-[20px] lg:text-[36px] font-[500] w-[200px] text-center">Stay Organised</h2>
      <div className="w-full lg:w-[379px] h-auto lg:h-[97px] text-center px-4 lg:px-0">
        <h2 className="text-[#000] text-[14px] lg:text-[20px] font-[500]">
          Ensure that your schedule is accurate by entering new appointments or events into our digital calendar.
        </h2>
      </div>
    </div>

    <div id="text22" className="flex flex-col">
      <h2 className="text-[#1E1E1E] text-[20px] lg:text-[36px] w-[200px] font-[500] text-center">Never be Late</h2>
      <div className="w-full lg:w-[379px] h-auto lg:h-[97px] text-center px-4 lg:px-0">
        <h2 className="text-[#000] text-[14px] lg:text-[20px] font-[500]">
          Our alarm system integrated within the app will notify you of any upcoming events.
        </h2>
      </div>
    </div>

    <div id="text33" className="flex flex-col ">
      <h2 className="text-[#1E1E1E] text-[20px] lg:text-[36px] font-[500] w-[200px]  text-center">Everything in one place</h2>
      <div className="w-full lg:w-[379px] h-auto lg:h-[97px] text-center px-4 lg:px-0">
        <h2 className="text-[#000] text-[14px] lg:text-[20px] font-[500]">
          Add your personal notes to any case you’d prefer.
        </h2>
      </div>
    </div>


    </div>

</div>

</div>


    </div>
  )
}

export default LoginPage
