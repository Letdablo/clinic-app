import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { ListUsersProps } from '../../types/types.users';

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




export default function TableUsers({ setUserId, users }: ListUsersProps) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Phone</StyledTableCell>
                        <StyledTableCell align="right">Phone 2</StyledTableCell>
                        <StyledTableCell align="right">Mail</StyledTableCell>
                        <StyledTableCell align="right">GeoPosition</StyledTableCell>
                        <StyledTableCell align="right">Country</StyledTableCell>
                        <StyledTableCell align="right">Location</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Gend</StyledTableCell>
                        <StyledTableCell align="right">Service</StyledTableCell>
                        <StyledTableCell align="right">Reports</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.phone}</StyledTableCell>
                            <StyledTableCell align="right">{row.phone2}</StyledTableCell>
                            <StyledTableCell align="right">{row.mail}</StyledTableCell>
                            <StyledTableCell align="right">

                                <a
                                    target="_blank"
                                    href={
                                        row.geoposition &&
                                        "https://www.google.es/maps/place/" +
                                        row.geoposition.replace(" ", "+")
                                    }
                                >
                                    {row.geoposition}
                                </a>


                            </StyledTableCell>
                            <StyledTableCell align="right">{row.country}</StyledTableCell>
                            <StyledTableCell align="right">{row.localitation}</StyledTableCell>
                            <StyledTableCell align="right">{row.age}</StyledTableCell>
                            <StyledTableCell align="right">{row.gender}</StyledTableCell>
                            <StyledTableCell align="right">{row.type_service}</StyledTableCell>
                            <StyledTableCell align="right"><Button variant={'outlined'} onClick={() => setUserId(row.id)}>Report</Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}