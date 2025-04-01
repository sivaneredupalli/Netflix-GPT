
const checkFormValidation = (Email,Password)=>{
   const isEmailValid = /(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/g.test(Email)
   const isPasswordValid = /(^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$)/g.test(Password)
   if(!isEmailValid) return "Email is not valid";
   if(!isPasswordValid) return "Password is not valid"

   return null;
}
export default checkFormValidation;