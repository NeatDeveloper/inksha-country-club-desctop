import loc1 from "images/korpLanding/locations/003.webp"
import loc2 from "images/korpLanding/locations/001.webp"
import loc3 from "images/korpLanding/locations/002.webp"
import loc4 from "images/korpLanding/locations/004.webp"
import longarrow from "icons/longbluearrow.png"

// import arrow from "icons/arrow.png"

import { Link } from "react-router-dom"
import MartModule from './ButterModule'
import { getLocation } from 'constants/locations'
import s from './../butter.module.scss'
const locations = [
   {
      title: "ЛЕСНАЯ РЕЗИДЕНЦИЯ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc1,
      link: '/locations-about',
   },
   {
      title: "КОТТЕДЖ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc2,
      link: '/locations-about',
   },
   {
      title: "ШАЛЕ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc3,
      link: '/locations-about',
   },
   {
      title: "ОЛИМПИЙСКАЯ ДЕРЕВНЯ",
      people: "До 30 чел",
      price: "от 15 000 руб",
      img: loc4,
      link: '/locations-about',
   },
]
const ButterLocations = () => {
   return (
      <div id="locations" className="bg-ButterDarkBlue text-black ">
         <div className="wrapper py-[15vh]">

            <div className={`grid grid-rows-1 grid-cols-1 md:place-items-start place-items-center gap-10 md:grid-cols-2 ${s.cormReg} `}>
               {getLocation().map((loc, i) => {
                  return (
                     <Link
                        to={loc.link}
                        className={`flex md:place-self-start shadow gap-[10px] sm:max-w-[550px] h-[82] md:h-[182px]  md:gap-[40px] md:max-h-[216px]   w-full  rounded-[19px] bg-[#F5F5F5]`}
                        key={i}
                     >
                        <img
                           className="  w-[110px] sm:w-[150px] h-full"
                           src={loc.img}
                           alt=""
                        />
                        <div className="flex flex-col justify-between    py-[20px]">
                           <div className={`text-md  max-w-[150px] font-bold text-ButterDarkBlue `}>
                              {loc.title}
                           </div>
                           <div className="flex items-center  gap-5 text-sm font-semibold text-white">
                              <div className="flex flex-col text-ButterDarkBlue gap-2">
                                 <div className=''>{loc.people}</div>
                                 <div className=' font-semibold text-md-'>{loc.price}</div>
                              </div>
                              <img
                                 className="w-12 md:w-[40px] lg:w-[100px] pr-1"
                                 src={longarrow}
                                 alt=""
                              />
                           </div>
                        </div>
                     </Link>
                  )
               })}
            </div>
            {/* <LocationsBlocks /> */}
            {/* <a href="#form">
               <Button className="bg-MartBrown text-md  w-auto h-[40px] md:h-[60px] gap-10 md:min-w-[600px]   mx-auto montserrat z-20 text-white">
                  Забронировать

               </Button>
            </a> */}
            <MartModule />
         </div>
      </div >
   )
}

export default ButterLocations
