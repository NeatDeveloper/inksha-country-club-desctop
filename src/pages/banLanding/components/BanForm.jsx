import { useState, useEffect } from "react"

import Button from "common/Button"

import { URLData } from "utils/URLData"

import s from './../ban.module.scss'

import InputMask from "react-input-mask"

import { useNavigate } from "react-router-dom"

const BanForm = () => {
   const navigate = useNavigate()
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")

   const [isValid, setIsValid] = useState(true)
   const [phoneError] = useState("")
   const [isError, setIsError] = useState(true) // State for tracking errors

   const handleSubmitBot = async () => {
      const data = {
         name: name,
         phone: phone,
         email: '-',
         groupID: 1002014846298,
      }


      const sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType: "Баня лендинг",
         link: window.location.href,
         ...URLData,
      }

      try {
         const response = await fetch(
            "https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/submit-form",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Access-Control-Allow-Origin": "*",
               },
               body: new URLSearchParams(sendingData).toString(),
            }
         )

         if (response.ok) {
            setTimeout(() => {
               navigate("/thanks")
            }, 1000)
            // ... ваша существующая логика ...
            setPhone("") // Очищаем состояние телефона
            setName("") // Очищаем состояние телефона

         } else {
            alert("Произошла ошибка при отправке данных")
         }
      } catch (error) {
         console.error(error)
         alert("Произошла ошибка при отправке данных")
      }
   }

   useEffect(() => {

      // Проверка на ошибки при изменении полей формы
      const newIsError = !name || !phone || !isValid
      setIsError(newIsError)
   }, [name, phone])

   const handlePhoneChange = (e) => {
      const inputValue = e.target.value
      const numericValue = inputValue.replace(/[^\d]/g, "") // Убираем все символы, кроме цифр
      const isValidPhone = numericValue.length === 11 // Проверяем, что длина равна 11
      setPhone(numericValue)
      setIsValid(isValidPhone) // Устанавливаем валидность номера телефона
   }
   const handleNameChange = (e) => {
      const { value } = e.target
      setName(value)
   }


   const handleSubmit = (e) => {
      e.preventDefault()
      if (isError) {
         alert("Ошибка с номером")
         return
      }

      handleSubmitBot()
   }
   return (
      <div id="form" className={`${s.formBg} py-[80px] `}>
         <div className="">
            <form
               className="montserrat flex justify-center bg-[#ECE9E9] rounded-[28.37px] shadow border border-stone-400 flex-col items-center ml-[5%] w-[90%] md:max-w-[740px]   px-[20px] py-[30px] md:px-[50px] md:py-[70px]"
               name="Form"
               action=""
            >
               <h2 className="mb-10 text-center text-md text-black">
                  Оставьте ваши данные, и наш менеджер свяжется с вами для
                  уточнения деталей
               </h2>
               <input
                  type="text"
                  placeholder="Имя"
                  className="mb-5 h-[40px] pl-[25px] md:pl-[50px] md:h-[80px] w-[100%] md:w-full rounded-[20px] bg-white p-2 text-[14px] text-[#C5C3C3] outline-none md:text-[27px]"
                  onChange={handleNameChange}
                  value={name}
               />
               <InputMask
                  mask="+7 (999) 999-99-99"
                  maskChar=" "
                  value={phone}
                  onChange={handlePhoneChange}
               >
                  {(inputProps) => (
                     <input
                        type="text"
                        placeholder="Телефон"
                        className={`mb-5 h-[40px] pl-[25px] md:pl-[50px]  md:h-[80px] w-[100%] md:w-full rounded-[20px] bg-white p-2 text-[14px] text-[#C5C3C3] outline-none md:text-[27px] ${phoneError ? "border-red-500" : ""
                           }`}
                        {...inputProps}
                     />
                  )}
               </InputMask>


               <Button
                  onClick={handleSubmit}
                  className="mx-auto h-[40px] w-full md:h-[60px] montserrat gap-10 md:w-[600px]  bg-black text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
               >
                  Узнать стоимость

               </Button>
            </form>
         </div>
      </div>
   )
}

export default BanForm
