import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ text, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1, boxShadow: "0px 4px 12px rgba(0, 0, 255, 0.2)" }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="px-6 py-3 text-white rounded-lg text-lg font-medium transition duration-300 ease-in-out bg-blue-600 hover:bg-blue-700"
    onClick={onClick}
  >
    {text}
  </motion.button>
);


const pageVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
);

export const LoginForm = ({ title, fields }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100 font-[Poppins]"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="bg-white shadow-md rounded-lg p-8 w-96 text-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">{title}</h1>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <InputField key={index} type={field.type} placeholder={field.placeholder} />
          ))}
          <Button text="Register" onClick={() => navigate("/")} />
        </div>
      </div>
    </motion.div>
  );
};

export const Login = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-white font-[Poppins]"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="bg-white shadow-md rounded-lg p-8 w-96 text-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Register</h1>
        <div className="flex flex-col gap-4">
          <Button text="User Register" onClick={() => navigate("/user")} />
          <Button text="Volunteer Register" onClick={() => navigate("/volunteer")} />
        </div>
      </div>
    </motion.div>
  );
};

const userFields = [
  { name : "name",id: "name", type: "text", placeholder: "Enter your name", dataType: "string", required: true },
  { name : "email",id: "email", type: "email", placeholder: "Enter your email", dataType: "string", required: true },
  { name : "password",id: "password", type: "password", placeholder: "Enter your password", dataType: "string", required: true },
  { name : "phoneNumber",id: "phoneNumber", type: "tel", placeholder: "Enter your Phone Number", dataType: "number", required: true },
  { name : "flatNo",id: "flatNo", type: "text", placeholder: "Enter your FLAT NUMBER", dataType: "number", required: true },
];

const volunteerFields = [
  { name : "name",id: "name", type: "text", placeholder: "Enter your name", dataType: "string", required: true },
  { name : "email",id: "email", type: "email", placeholder: "Enter your email", dataType: "string", required: true },
  { name : "password",id: "password", type: "password", placeholder: "Enter your password", dataType: "string", required: true },
  { name : "phoneNumber",id: "phoneNumber", type: "tel", placeholder: "Enter your Phone Number", dataType: "number", required: true },
  { name : "aadharNumber  ",id: "aadharNumber", type: "number", placeholder: "Enter your Aadhar Number", dataType: "number", required: true },
];

export const UserRegister = () => <LoginForm title="User Registration" fields={userFields} />;
export const VolunteerRegister = () => <LoginForm title="Volunteer Registration" fields={volunteerFields} />;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserRegister />} />
        <Route path="/volunteer" element={<VolunteerRegister />} />
      </Routes>
    </Router>
  );
};

export default App;