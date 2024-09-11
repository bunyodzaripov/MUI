import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import {
   duration,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   TextField,
} from "@mui/material";
import axios from "axios";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function BasicModal({ open, handleClose, update }) {
   const [from, setFrom] = useState({
      name: "",
      duration: "",
      price: "",
   });

   useEffect(() => {
      if (update) {
         setFrom({
            name: update.name || "",
            duration: update.duration || "",
            price: update.price || "",
         });
      }
   }, [update]);

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFrom({ ...from, [name]: value });
   };

   const handleSubmit = async () => {
      try {
         if (update?.id) {
            await axios.put(`http://localhost:3000/courses/${update.id}`, from);
            handleClose();
         } else {
            await axios.post("http://localhost:3000/courses", from);
            handleClose();
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <FormControl fullWidth className="flex flex-col gap-3">
                  <TextField
                     fullWidth
                     label="Course Name"
                     id="fullWidth"
                     name="name"
                     value={from.name}
                     onChange={handleChange}
                  />
                  <TextField
                     fullWidth
                     label="duration"
                     id="fullWidth"
                     name="duration"
                     value={from.duration}
                     onChange={handleChange}
                  />
                  <TextField
                     fullWidth
                     label="price"
                     id="fullWidth"
                     name="price"
                     value={from.price}
                     onChange={handleChange}
                  />
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={handleSubmit}
                  >
                     Save
                  </Button>
               </FormControl>
            </Box>
         </Modal>
      </div>
   );
}
