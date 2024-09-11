import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Notification from "../../utilis/notification";
const Index = () => {
   const [form, setForm] = useState({});
   const navigate = useNavigate();
   const handleChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
   };
   console.log(form);

   const handleSumbit = (event) => {
      event.preventDefault();
      if (form.username === "admin") {
         navigate("/admin-layout");
      } else if (form.username === "student") {
         navigate("/student-layout");
      } else {
         Notification({ title: "Error", type: "error" });
      }
   };

   return (
      <div className="container">
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bouncer
         ></ToastContainer>
         <div className="row">
            <div className="col-3 offset-4 mt-5">
               <div className="card">
                  <div className="card-header">
                     <h1 className="text-center text-2xl">Sign In</h1>
                  </div>
                  <div className="card-body">
                     <form onSubmit={handleSumbit} id="form">
                        <TextField
                           id="outlined-basic"
                           label="Username"
                           variant="outlined"
                           fullWidth
                           type="text"
                           className="mb-3"
                           name="username"
                           onChange={() => handleChange(event)}
                        />
                        <TextField
                           id="outlined-basic"
                           label="Password"
                           variant="outlined"
                           fullWidth
                           type="password"
                           name="password"
                           onChange={() => handleChange(event)}
                        />
                     </form>
                     <Button
                        variant="contained"
                        fullWidth
                        className="mt-3"
                        color="success"
                        form="form"
                        type="submit"
                     >
                        Sign In
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Index;
