import { useState, useEffect } from "react"

import Button from "common/Button"

import { URLData } from "utils/URLData"

import InputMask from "react-input-mask"

import { useNavigate } from "react-router-dom"

const HousingForm = () => {
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
         formType: "Аренда на год лендинг",
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
      <div id="form" className={`py-[80px]`}>
         <div className="flex justify-center w-full ">
            <form
               className="montserrat justify-center md:mr-[20px]  bg-white rounded-[28.37px] shadow border border-stone-400 flex-col items-center  w-[90%] md:max-w-[640px]   px-[20px] py-[30px] md:px-[50px] md:py-[70px]"
               name="Form"
               action=""
            >
               <h2 className="mb-10 text-center text-md text-brown">
                  Оставьте ваши данные, и наш менеджер свяжется с вами для
                  уточнения деталей
               </h2>
               <input
                  type="text"
                  placeholder="Имя"
                  className="mb-5 border border-brown h-[40px] pl-[25px] md:pl-[50px] md:h-[80px] w-[100%] md:w-full rounded-[20px] bg-white p-2 text-[14px] text-black outline-none md:text-[27px]"
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
                        className={`mb-5 border border-brown h-[40px] pl-[25px] md:pl-[50px]  md:h-[80px] w-[100%] md:w-full rounded-[20px] bg-white p-2 text-[14px] text-black outline-none md:text-[27px] ${phoneError ? "border-red-500" : ""
                           }`}
                        {...inputProps}
                     />
                  )}
               </InputMask>



               <Button
                  onClick={handleSubmit}
                  className="h-[40px] w-full md:h-[60px] montserrat bg-brown gap-10 md:w-full text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
               >
                  Узнать стоимость
               </Button>
            </form>
         </div>
      </div>
   )
}

export default HousingForm
