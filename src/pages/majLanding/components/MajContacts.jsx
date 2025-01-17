

import inst from 'images/icons/social/white/inst.png'
import what from 'images/icons/social/white/what.png'
import vk from 'images/icons/social/white/vk.png'
import s from './../maj.module.scss'
import { useURLData } from 'utils/URLData'
import { getWALink } from 'utils/helpers'

const ButterContacts = () => {

   const { utm_source } = useURLData()

   return (
      <div id='contacts' className=' mt-[70px] w-full text-white'>
         <div className='text-white font-bold text-center mb-[20px] text-lg'>Контакты</div>
         <div className='flex w-full px-[20px] md:px-[40px] justify-between flex-col pb-10 gap-2 md:flex-row'>
            <div className='md:w-[733.57px] text-white text-md font-semibold hidden md:block leading-[44.80px] tracking-wide'>Мы находимся по адресу Московская область,<br /> городской округ Мытищи,<br /> посёлок Менжинец </div>
            <div className='md:w-[733.57px] text-white text-md font-semibold block md:hidden leading-[44.80px] tracking-wide'>Мы находимся по адресу Московская область, городской округ Мытищи, посёлок Менжинец </div>


            <div className='flex gap-2 flex-col text-left md:text-right'>
               <div className='flex justify-start md:justify-end gap-5'>
                  <a href="https://www.instagram.com/ikshacountryclub" target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={inst} alt="" />
                  </a>
                  <a href={getWALink()} target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={what} alt="" />
                  </a>
                  <a href="https://vk.com/ikshacountryclub" target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={vk} alt="" />
                  </a>
               </div>
               {
                  utm_source === 'yandex' ?
                     <a href={'tel:+74995055067'}>
                        <h4 className={`text-white text-md- font-medium underline ${s.acariMedium}`}>+7(499) 505-50-67</h4>
                     </a>
                     : utm_source === 'vkontakte' ?
                        <a href={'tel:+74995055087'}>
                           <h4 className={`text-white text-md- font-medium underline ${s.acariMedium}`}>+7(499) 505-50-87</h4>
                        </a>
                        :
                        <a href={"tel:+74995055031"}>
                           <h4 className={`text-white text-md- font-medium underline ${s.acariMedium}`}>+7(499) 505-50-31</h4>
                        </a>

               }
               {/* <div className={`text-white text-md- font-medium ${s.acariMedium}`}>+7 (499) 505 50 31</div> */}
               <div className={`text-white text-md- font-medium ${s.acariMedium}`}>Время работы 24/7</div>
               <a rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=m24zezD9fWs' className={`text-white cursor-pointer text-md- font-medium underline  ${s.acariMedium} `}>Как проехать</a>
            </div>
         </div>
         <iframe
            className='h-[230px] md:h-[350px]'
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fd5ee0a4eb1741a8b66cbf0ff740727f45a33b5ab3731a94c50d75de17a22fc&amp;source=constructor"
            // scroll="false"
            width="100%"
            height="800"
         // frameBorder="0"
         ></iframe>
      </div>
   )
}

export default ButterContacts