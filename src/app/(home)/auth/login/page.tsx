// "use client";
// import { useState } from "react";
// import { useRouter } from "next/router";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     userName: "",
//     password: "",
//   });
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Validate credentials with the server
//     // If valid, redirect to profile page
//     router.push("/profile");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="userName"
//         placeholder="User Name"
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

import React from "react";

const Page = () => {
  return <div></div>;
};

export default Page;
