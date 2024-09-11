import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ data }) {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell align="center">T/R</TableCell>
                  <TableCell align="center">name</TableCell>
                  <TableCell align="center">age</TableCell>
                  <TableCell align="center">phone</TableCell>
                  <TableCell align="center">address</TableCell>
                  <TableCell align="center">group</TableCell>
                  <TableCell align="center">teacher</TableCell>
                  <TableCell align="center">actions</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((row, index) => (
                  <TableRow
                     key={row.id}
                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                     <TableCell align="center">{index + 1}</TableCell>
                     <TableCell align="center">{row.name}</TableCell>
                     <TableCell align="center">{row.age}</TableCell>
                     <TableCell align="center">{row.phone}</TableCell>
                     <TableCell align="center">{row.address}</TableCell>
                     <TableCell align="center">{row.group}</TableCell>
                     <TableCell align="center">{row.teacher}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
