/* eslint-disable react/prop-types */
// import inst from "./../assets/inst.png";
import { motion } from "framer-motion"
import { useURLData } from "utils/URLData"
import phone from "./../assets/phone.png"
import what from "./../assets/what.png"
import { useTranslation } from 'react-i18next'

const slideVariants = {
   initial: {
      x: "2%", // Начальная позиция за пределами экрана справа
      scale: 0.75,
   },
   animate: {
      x: "-2%", // Конечная позиция за пределами экрана слева
      scale: 1,
   },
}
const Footer = ({ className }) => {
   const { t } = useTranslation()
   const { utm_source } = useURLData()
   return (
      <div className={`${className || ""}`}>
         <div className="wrapper  ">
            <div className="flex justify-between gap-5 py-5">
               <div className="flex w-full items-center justify-between text-white gap-5 md:justify-start">
                  <div>{t('fullName')} 2023 </div>
                  <div className="fixed bottom-5 md:bottom-[70px]  right-5 z-10 flex flex-col gap-5 md:left-5 md:flex-row">
                     {/* <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/ikshacountryclub/"
                     >
                        <img className="z-10 h-9 w-9" src={inst} alt="" />
                     </a> */}
                     <a
                        href={`https://wa.me/79859091202?text=${encodeURIComponent('Здравствуйте, меня интересует аренда домика')}`}
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img className="z-10 h-9 w-9" src={what} alt="" />
                     </a>
                     <motion.a
                        variants={slideVariants}
                        transition={{
                           repeat: Infinity,
                           duration: 0.5,

                           repeatType: "loop",
                           repeatDelay: 1,
                        }}
                        initial="initial"
                        animate="animate"
                        href={utm_source === 'yandex' ? 'tel:+74995055067' : utm_source === 'vkontakte' ? 'tel:+74995055087' : 'tel:+74995055031'}
                     >
                        <img className="z-10 h-9 w-9" src={phone} alt="" />
                     </motion.a>
                  </div>
               </div>
               {
                  utm_source === 'yandex' ?
                     <a href={'tel:+74995055067'} className="min-w-[160px] text-white">
                        +7(499) 505-50-67
                     </a>
                     : utm_source === 'vkontakte' ?
                        <a href={'tel:+74995055087'} className="min-w-[160px] text-white">
                           +7(499) 505-50-87
                        </a>
                        :
                        <a href={"tel:+74995055031"} className="min-w-[160px] text-white">
                           +7(499) 505-50-31
                        </a>

               }
            </div>
         </div>
      </div>
   )
}

export default Footer
