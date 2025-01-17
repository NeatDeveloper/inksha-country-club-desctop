import { Link as ScrollLink } from "react-scroll"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
// import ProgramaSwiper from "./NYProgramaSwiper";
import Reveal from "common/Reveal"
import { scale, slideFromRight } from "constants/motion"
import NYCreamButton from './NYCreamButton'
import NYGreenButton from './NYGreenButton'


// import prog1 from 'images/NY/prog/001.webp'
import prog2 from 'images/NY/prog/002.webp'
import prog3 from 'images/NY/prog/003.webp'
import { useTranslation } from 'react-i18next'


const getProgramaContent = () => {
   const { t } = useTranslation()

   const programaContent = {
      1: {
         events: [
            {
               time: '15:00-16:00: ',
               title: t('ny.program.day1.event1.title'),
            },
            {
               time: '16:00-20:00: ',
               title: t('ny.program.day1.event2.title'),
            },
         ],
      },
      2: {
         events: [
            {
               time: '18:30 - 20:00:',
               title: t('ny.program.day2.event1.title'),
            },
            {
               time: '00:00: ',
               title: t('ny.program.day2.event2.title'),
            },
         ],
      },
      3: {
         events: [
            {
               time: '12:00 - 14:00: ',
               title: t('ny.program.day3.event1.title'),
            },
            {
               time: '16:00 - 18:00: ',
               title: t('ny.program.day3.event2.title'),
            },
            {
               time: '18:30 - 20:00: ',
               title: t('ny.program.day3.event3.title'),
            },
         ],
      },
      4: {
         events: [
            {
               time: '09:00 - 11:00: ',
               title: t('ny.program.day4.event1.title'),
            },
            {
               time: '12:00 - 18:00:30: ',
               title: t('ny.program.day4.event2.title'),
            },
            {
               time: '18:30 - 20:00: ',
               title: t('ny.program.day4.event3.title'),
            },
         ],
      },
   }

   return programaContent
}



export const Programa = () => {
   const { t } = useTranslation()

   const programaContent = getProgramaContent()
   return (
      <div
         id="Programa"
         name="Programa"
         className="  py-[10vh] pb-[5vh] md:pb-[40vh]"
      >
         <div className="wrapper relative">
            <Reveal duration={1} variants={slideFromRight()}>
               <div className='tariff-bg p-3 370p:p-6  md:p-14'>
                  <h1 className="text-xl mb-6 mount tracking-widest relative">
                     {t('ny.program.title')}
                     <div className="absolute left-2 -top-[30px] md:-top-[70px] text-[64px] md:text-[128px]  opacity-10">
                        {t('ny.program.title')}
                     </div>
                  </h1>
                  <p className="text-center text-NYblack mb-10 yaes  font-semibold text-lg yaes">
                     {t('ny.program.description')}
                  </p>
                  <div className="grid grid-cols-1 place-items-center  md:grid-cols-2 gap-y-20 gap-10">
                     <div className="flex col-span-1 md:col-span-2 flex-col relative  w-full md:w-[90%] justify-center items-center">

                        <img
                           className="md:w-[200px] absolute w-[60px] 370p:w-[75px] 370p:h-[75px] md:h-[200px] md:-left-[250px] md:top-1/2 transform md:-translate-y-1/2    -top-10 right-1/2 translate-x-1/2    z-10"
                           src={prog2}
                           alt=""
                        />
                        <div className="bg-NYblack w-full text-white yaes relative rounded-[20px] ">
                           <h2 className="md:text-[40px] relative py-10 w-full text-center text-[25px] font-extrabold">
                              {t('ny.program.day1.title')}
                              <div className='absolute w-full border-b-[3px]  border-b-NYred my-5 border-dashed h-[4px]'></div>
                           </h2>
                           <div className='px-3 flex   flex-col gap-7 md:px-[50px]'>
                              {programaContent[1].events.map((item, i) => {
                                 return (

                                    <div key={i} className='flex  flex-col w-full md:flex-row justify-between gap-1 md:gap-5 text-center md:text-start'>
                                       <h2 className=" md:text-[40px] whitespace-nowrap mount text-[25px]  font-bold ">
                                          {item.time}
                                       </h2>
                                       <h2 className="text-md mb-6 w-full font-light ">
                                          {item.title}
                                       </h2>
                                    </div>
                                 )
                              })}

                              <Reveal variants={scale()}>
                                 {/* <img
                                    src={bat}
                                    className="absolute -bottom-[90px] -right-[20%] "
                                    alt=""
                                 /> */}
                              </Reveal>
                           </div>
                        </div>
                     </div>

                     <div className="flex col-span-1 md:col-span-2 flex-col relative  w-full md:w-[90%] justify-center items-center">

                        <img
                           className="md:w-[200px] absolute w-[60px] 370p:w-[75px] 370p:h-[75px] md:h-[200px] md:-left-[250px] md:top-1/2 transform md:-translate-y-1/2    -top-10 right-1/2 translate-x-1/2    z-10"
                           src={prog2}
                           alt=""
                        />
                        <div className="bg-NYblack w-full text-white yaes relative rounded-[20px] ">
                           <h2 className="md:text-[40px] relative py-10 w-full text-center text-[25px] font-extrabold">
                              {t('ny.program.day2.title')}
                              <div className='absolute w-full border-b-[3px]  border-b-NYred my-5 border-dashed h-[4px]'></div>
                           </h2>
                           <div className='px-3 flex   flex-col gap-7 md:px-[50px]'>
                              {programaContent[2].events.map((item, i) => {
                                 return (

                                    <div key={i} className='flex  flex-col w-full md:flex-row justify-between gap-1 md:gap-5 text-center md:text-start'>
                                       <h2 className=" md:text-[40px] whitespace-nowrap mount text-[25px]  font-bold ">
                                          {item.time}
                                       </h2>
                                       <h2 className="text-md mb-6 w-full font-light ">
                                          {item.title}
                                       </h2>
                                    </div>
                                 )
                              })}

                              <Reveal variants={scale()}>
                                 {/* <img
                                    src={bat}
                                    className="absolute -bottom-[90px] -right-[20%] "
                                    alt=""
                                 /> */}
                              </Reveal>
                           </div>
                        </div>
                     </div>

                     <div className="flex relative col-span-1 mt-auto md:mt-[100px] self-start flex-col max-w-[600px] justify-center items-center">

                        <img
                           className="md:w-[200px] w-[60px] 370p:w-[80px] 370p:h-[80px] md:h-[200px] absolute transform md:right-1/2 md:translate-x-1/2  -top-10 right-1/2 translate-x-1/2   md:-top-[150px] z-10"
                           src={prog2}
                           alt=""
                        />
                        <div className="bg-NYblack text-center md:text-start text-white yaes relative rounded-[20px] ">
                           <h2 className="md:text-[40px] relative py-10 w-full text-center text-[25px] font-extrabold">
                              {t('ny.program.day3.title')}

                              <div className='absolute w-full border-b-[3px] border-b-NYred my-5 border-dashed h-[4px]'></div>
                           </h2>
                           <div className='px-3 md:px-[50px]'>

                              {programaContent[3].events.map((item, i) => {
                                 return (

                                    <div key={i} className='flex  flex-col w-full  justify-between gap-1 md:gap-5 text-center md:text-start'>
                                       <h2 className=" md:text-[40px] whitespace-nowrap mount text-[25px]  font-bold ">
                                          {item.time}
                                       </h2>
                                       <h2 className="text-md mb-6 w-full font-light ">
                                          {item.title}
                                       </h2>
                                    </div>
                                 )
                              })}

                              <Reveal variants={scale()}>
                                 {/* <img
                                    src={bat}
                                    className="absolute -bottom-[90px] -right-[20%] "
                                    alt=""
                                 /> */}
                              </Reveal>
                           </div>
                        </div>
                     </div>

                     <div className="flex  w-full relative col-span-1 mt-auto md:mt-[100px] self-start text-center md:text-start flex-col  max-w-[600px] justify-center items-center">
                        <img
                           className="md:w-[200px] w-[60px] 370p:w-[80px] 370p:h-[80px] md:h-[200px] absolute transform md:right-1/2 md:translate-x-1/2  -top-10 right-1/2 translate-x-1/2   md:-top-[150px] z-10"
                           src={prog3}
                           alt=""
                        />

                        <div className="bg-NYblack w-full text-white yaes relative rounded-[20px] ">

                           <h2 className="md:text-[40px] py-10 relative text-center text-[25px] font-extrabold">
                              {t('ny.program.day4.title')}
                              <div className='absolute w-full border-b-[3px] border-b-NYred my-5 border-dashed h-[4px]'></div>
                           </h2>
                           <div className='px-3 md:px-[50px]'>
                              {programaContent[4].events.map((item, i) => {
                                 return (

                                    <div key={i} className='flex  flex-col w-full justify-between gap-1 md:gap-5 text-center md:text-start'>
                                       <h2 className=" md:text-[40px] whitespace-nowrap mount text-[25px]  font-bold ">
                                          {item.time}
                                       </h2>
                                       <h2 className="text-md mb-6 w-full font-light ">
                                          {item.title}
                                       </h2>
                                    </div>
                                 )
                              })}


                              <Reveal delay={0.5} variants={scale()}>
                                 {/* <img
                                 src={bat}
                                 className="absolute scale-50 -rotate-90 -bottom-[150px] -right-[20%] "
                                 alt=""
                              /> */}
                              </Reveal>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
               <ScrollLink
                  to="Form"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <NYGreenButton className="mx-auto text-black">
                     {t('ny.booking.button')}
                     {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                  </NYGreenButton>
               </ScrollLink>
               <ScrollLink
                  to="Tariff"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <NYCreamButton className="mx-auto">
                     {t('ny.viewRates.button')}
                     {/* <img src={down_arrow} className="w-6 h-8" alt="" /> */}
                  </NYCreamButton>
               </ScrollLink>
            </Reveal>
         </div>
      </div>
   )
}
