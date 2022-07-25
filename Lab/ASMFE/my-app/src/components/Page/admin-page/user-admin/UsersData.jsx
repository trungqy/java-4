import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { usersController } from "../../../../controller/UsersController";
import { AiOutlineDelete } from "react-icons/ai";
import { MdEditOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4444',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UserData({ data, onSetdata, onRemove, id }) {
  const navigate = useNavigate();
  

  React.useEffect(()=>{
    console.log();
    if(localStorage.getItem("userInfo") != null ? JSON.parse(localStorage.getItem("userInfo")).role=="user":''){
      navigate("/")
    }

  },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow> 
            <StyledTableCell width={200} align="right">UserName</StyledTableCell>
            <StyledTableCell width={200} align="right">PassWord</StyledTableCell>
            <StyledTableCell width={200} align="right">Email</StyledTableCell>
            <StyledTableCell width={200} align="right">Role</StyledTableCell>
            <StyledTableCell width={200} align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="right">{row.userName}</StyledTableCell>
              <StyledTableCell align="right">{row.passWord}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.role}</StyledTableCell>

              <StyledTableCell align="right">
                <MdEditOff
                  onClick={() =>
                    onSetdata(
                      row.id,
                      row.userName,
                      row.passWord,
                      row.email,
                      row.role
                    )
                  }
                />
                <AiOutlineDelete onClick={() => onRemove(row.id)} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
