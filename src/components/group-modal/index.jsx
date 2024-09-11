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

export default function BasicModal({ open, handleClose, course }) {
   const [from, setFrom] = useState({});

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFrom({ ...from, [name]: value });
   };

   const handleSubmit = async () => {
      try {
         const res = await axios.post("http://localhost:3000/groups", from);
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
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     name="course"
                     label="Course"
                     onChange={handleChange}
                  >
                     {course?.map((item, index) => {
                        return (
                           <MenuItem key={index} value={item?.name}>
                              {item?.name}
                           </MenuItem>
                        );
                     })}
                  </Select>
                  <TextField
                     fullWidth
                     label="Group Name"
                     id="fullWidth"
                     name="name"
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
