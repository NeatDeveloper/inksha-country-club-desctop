import loc1 from "images/korpLanding/locations/003.webp"
import loc2 from "images/korpLanding/locations/001.webp"
import loc3 from "images/korpLanding/locations/002.webp"
import loc4 from "images/korpLanding/locations/004.webp"
import longarrow from "icons/longbluearrow.png"

// import arrow from "icons/arrow.png"

import { Link } from "react-router-dom"
import MartModule from './RusModule'
import { getLocation } from 'constants/locations'
import s from './../rus.module.scss'

const RusLocations = () => {
   return (
      <div id="locations" className="bg-RusOrange text-black ">
         <div className="wrapper py-[15vh]">

            <div className={`grid grid-rows-1 grid-cols-1 md:place-items-start place-items-center gap-10 md:grid-cols-2 ${s.cormReg} `}>
               {getLocation().map((loc, i) => {
                  return (
                     <Link
                        to={loc.link}
                        className={`flex md:place-self-start shadow gap-[10px] sm:max-w-[550px] h-[82] md:h-[182px]  md:gap-[40px] md:max-h-[216px] text-RusLigthBlue  w-full  rounded-[19px] bg-[#F5F5F5]`}
                        key={i}
                     >
                        <img

                           className={`w-[110px] ${s.LocationImg} sm:w-[150px] h-full`}
                           src={loc.img}
                           alt=""
                        />
                        <div className="flex flex-col justify-between    py-[20px]">
                           <div className={`text-md  max-w-[150px] font-bold text-RusGreen `}>
                              {loc.title}
                           </div>
                           <div className="flex items-center  gap-5 text-sm font-semibold ">
                              <div className="flex flex-col text-RusGreen gap-2">
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

export default RusLocations
