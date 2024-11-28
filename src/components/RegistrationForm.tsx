// // src/components/RegistrationForm.tsx
// import { useState } from "react";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     firstName: "",
//     phoneNumber: "",
//     email: "",
//     userName: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (Object.values(formData).some((field) => field === "")) {
//       alert("Make sure to fill the form correctly");
//       return;
//     }
//     // Send formData to the server
//   };

//   return (
//     <div className={styles.card}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="userName"
//           placeholder="User Name"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           onChange={handleChange}
//         />
//         <button type="submit" className={styles.submitButton}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
import React from "react";

const RegistrationForm = () => {
  return <div>registration</div>;
};

export default RegistrationForm;
