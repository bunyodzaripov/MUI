import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import {
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

export default function BasicModal({
   open,
   handleClose,
   group,
   teacher,
   update,
}) {
   const [from, setFrom] = useState({
      name: "",
      age: "",
      phone: "",
      address: "",
      group: "",
      teacher: "",
   });

   useEffect(() => {
      if (update) {
         setFrom({
            name: update.name || "",
            age: update.age || "",
            phone: update.phone || "",
            address: update.address || "",
            group: update.group || "",
            teacher: update.teacher || "",
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
            await axios.put(
               `http://localhost:3000/students/${update.id}`,
               from
            );
            window.location.reload();
         } else {
            await axios.post("http://localhost:3000/students", from);
            window.location.reload();
         }
         handleClose();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Modal open={open} onClose={handleClose}>
         <Box sx={style}>
            <FormControl fullWidth className="flex flex-col gap-3">
               <InputLabel id="group-select-label">Groups</InputLabel>
               <Select
                  labelId="group-select-label"
                  id="group-select"
                  name="group"
                  label="Group"
                  value={from.group}
                  onChange={handleChange}
               >
                  {group?.map((item, index) => (
                     <MenuItem key={index} value={item?.name}>
                        {item?.name}
                     </MenuItem>
                  ))}
               </Select>

               <TextField
                  label="Name"
                  name="name"
                  value={from.name}
                  onChange={handleChange}
               />
               <TextField
                  label="Age"
                  name="age"
                  type="number"
                  value={from.age}
                  onChange={handleChange}
               />
               <TextField
                  label="Phone Number"
                  name="phone"
                  type="number"
                  value={from.phone}
                  onChange={handleChange}
               />
               <TextField
                  label="Address"
                  name="address"
                  value={from.address}
                  onChange={handleChange}
               />

               <InputLabel id="teacher-select-label" className="mt-[359px]">
                  Teacher
               </InputLabel>
               <Select
                  labelId="teacher-select-label"
                  id="teacher-select"
                  name="teacher"
                  label="Teacher"
                  value={from.teacher}
                  onChange={handleChange}
               >
                  {teacher?.map((item, index) => (
                     <MenuItem key={index} value={item?.name}>
                        {item?.name}
                     </MenuItem>
                  ))}
               </Select>

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
   );
}
