import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
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

export default function BasicModal({ open, handleClose, group, teacher }) {
   const [from, setFrom] = useState({});

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFrom({ ...from, [name]: value });
   };

   const handleSubmit = async () => {
      try {
         const res = await axios.post("http://localhost:3000/students", from);
         handleClose();
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
                  <InputLabel id="demo-simple-select-label">Groups</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     name="group"
                     label="group"
                     onChange={handleChange}
                  >
                     {group?.map((item, index) => {
                        return (
                           <MenuItem key={index} value={item?.name}>
                              {item?.name}
                           </MenuItem>
                        );
                     })}
                  </Select>
                  <TextField
                     fullWidth
                     label="name"
                     id="fullWidth"
                     name="name"
                     onChange={handleChange}
                  />
                  <TextField
                     fullWidth
                     type="number"
                     label="Age"
                     id="fullWidth"
                     name="age"
                     onChange={handleChange}
                  />
                  <TextField
                     fullWidth
                     type="number"
                     label="Phone Number"
                     id="fullWidth"
                     name="phone"
                     onChange={handleChange}
                  />
                  <TextField
                     fullWidth
                     label="Address"
                     id="fullWidth"
                     name="address"
                     onChange={handleChange}
                  />
                  <InputLabel id="teacher" className="mt-[22.5rem]">
                     teacher
                  </InputLabel>
                  <Select
                     labelId="teacher"
                     id="teacher"
                     name="teacher"
                     label="teacher"
                     onChange={handleChange}
                  >
                     {teacher?.map((item, index) => {
                        return (
                           <MenuItem key={index} value={item?.name}>
                              {item?.name}
                           </MenuItem>
                        );
                     })}
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
      </div>
   );
}
