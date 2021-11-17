import React, { useState, useEffect } from 'react';
import BloodType from './components/bloodType/bloodType';
import RadarChart from './components/radarChart/radarChart';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Header from './components/header/header';
import TableBlood from './components/tableBlood/tableBlodd';
import TableUsers from './components/tableUsers/tableUsers';
import { usersService } from './service/service.users';
import { User, ListUsersProps, BloodTest } from './types/types.users';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


type ReportProps = {
  userId: number;
};



function Report({ userId }: ReportProps) {
  const [dataBloodTest, setDataBloodTest] = useState<BloodTest[]>();
  const [dataReport, setDataReport] = useState<number[]>([]);
  const [typeBlood, setTypeBlood] = useState<string>("0+");

  function formatData(data: BloodTest[]) {

    setTypeBlood(data[0].type_blood);
    setDataBloodTest(data)
    setDataReport([
      parseInt(data[0].total_cholesterol),
      parseInt(data[0].ldl_cholesterol),
      parseInt(data[0].hdl_cholesterol),
      parseInt(data[0].triglycerides),
      parseInt(data[0]['non-hdl-c']),
      parseInt(data[0]['tg/hdl_ratio'])]);
  }


  useEffect(() => {
    usersService.getBloodTestByUser(userId).then(({ data }) => formatData(data.test))
  }, [userId]);

  if (dataReport.length === 0)
    return (<h2 style={{ marginLeft: 20 }}>No data register</h2>)
  return (
    <Box sx={{ flexGrow: 1, margin: 2, marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} style={{ minWidth: 600 }}>
          <Item>   <BloodType type={typeBlood}></BloodType></Item>
        </Grid>
        <Grid item xs={6} lg={4} >
          <Item>
            <RadarChart data={dataReport}></RadarChart>
          </Item>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Item>
            <RadarChart data={dataReport}></RadarChart>
          </Item>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Item>
            <TableBlood data={dataBloodTest}></TableBlood>
          </Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item>
            <RadarChart data={dataReport}></RadarChart>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

function ListUsers({ setUserId, users }: ListUsersProps) {
  return (
    <Box sx={{ flexGrow: 1, margin: 2, marginTop: 5 }}>
      <TableUsers users={users} setUserId={setUserId}></TableUsers>
    </Box>
  )
}

function App() {
  const [userId, setUserId] = useState(0);
  const [users, setUsers] = useState<User[] | undefined>();


  useEffect(() => {
    usersService.getUsers().then(({ data }) => setUsers(data.users))
  }, []);
  return (
    <div className="App">
      <Header setUserId={setUserId}></Header>
      {userId !== 0 && <Report userId={userId}></Report>}
      {userId === 0 && users !== undefined && <ListUsers users={users} setUserId={setUserId}></ListUsers>}
    </div>
  );
}

export default App;
