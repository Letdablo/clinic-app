import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BloodTest } from '../../types/types.users';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


type TableBloodType = {
    data: BloodTest[] | undefined,

};

//"Total Cholesterol", "LDL Cholesterol", "HDL Cholesterol", "Triglycerides", "non HDL C", "TG/HDL Ratio"
export default function TableBlood({ data }: TableBloodType) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Total Cholesterol</StyledTableCell>
                        <StyledTableCell align="right">LDL Cholesterol</StyledTableCell>
                        <StyledTableCell align="right">HDL Cholesterol</StyledTableCell>
                        <StyledTableCell align="right">Triglycerides</StyledTableCell>
                        <StyledTableCell align="right">non HDL C</StyledTableCell>
                        <StyledTableCell align="right">TG/HDL Ratio</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((row) => {
                        return (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.total_cholesterol}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.ldl_cholesterol}</StyledTableCell>
                                <StyledTableCell align="right">{row.hdl_cholesterol}</StyledTableCell>
                                <StyledTableCell align="right">{row.triglycerides}</StyledTableCell>
                                <StyledTableCell align="right">{row['non-hdl-c']}</StyledTableCell>
                                <StyledTableCell align="right">{row['tg/hdl_ratio']}</StyledTableCell>
                            </StyledTableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}