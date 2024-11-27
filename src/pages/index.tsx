// src/pages/index.tsx
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/RegistrationForm";

const Home = () => (
  <div
    style={{ backgroundColor: "skyblue", minHeight: "100vh", padding: "1rem" }}
  >
    <Navbar />
    <h1>Welcome to NextPortfolio</h1>
    <RegistrationForm />
  </div>
);

export default Home;
