import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {Button} from "@/components/ui/button";
import axios from "axios"; 
import { server } from "@/lib/utils"

const pageVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const InputField = ({ type, placeholder, id, name, value, onChange }) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    required
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
);

// Volunteer Login Page
export const VolunteerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(server+"volunteer/login", formData);
      localStorage.setItem("accessToken", response.data.accessToken);
      console.log("Volunteer Logged In:", response.data);
      navigate("/volunteer/home"); // Redirect after login
    } catch (error) {
      console.error("Volunteer Login Failed:", error.response?.data || error.message);
    }
  };

  return (
    <motion.div className="flex items-center justify-center min-h-screen bg-gray-100 font-[Poppins]"
      initial="initial" animate="animate" variants={pageVariants}>
      <div className="bg-white shadow-md rounded-lg p-8 w-96 text-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Volunteer Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
          <InputField id="password" name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
          <Button text="Login" />
        </form>
      </div>
    </motion.div>
  );
};