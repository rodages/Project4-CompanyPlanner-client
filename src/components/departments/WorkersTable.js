import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function WorkersTable({workers}){
    const directors = workers.filter(worker=>worker.role=='Director').sort((current,next)=>current.username.localeCompare(next.username))
    const managers = workers.filter(worker=>worker.role=='Manager').sort((current,next)=>current.username.localeCompare(next.username))
    const supervisors = workers.filter(worker=>worker.role=='Supervisor').sort((current,next)=>current.username.localeCompare(next.username))
    const staff = workers.filter(worker=>worker.role=='Regular Staff').sort((current,next)=>current.username.localeCompare(next.username))
    const WorkersSortedByRoleAndUsername = [...directors,...managers,...supervisors,...staff]
    console.log(WorkersSortedByRoleAndUsername)
    {console.log(new Date(workers[0].DOB),"date")}
    if(workers.length<1){
        return<h1>Department has no workers</h1>
    }
    return(
        <>
            <TableContainer sx={{width:'80%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Date Joined</TableCell>
            <TableCell align="center">Date of Birth</TableCell>
            <TableCell align="center">Postcode</TableCell>
            {/* <TableCell align="center">Contant Number</TableCell> */}
            <TableCell align="center">is Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {WorkersSortedByRoleAndUsername.map((worker,i) =>{
            console.log(new Date(worker.DOB).toString())
            return(
              <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{worker.role}</TableCell>
                  <TableCell align="center">{worker.first_name}</TableCell>
                  <TableCell align="center">{worker.last_name}</TableCell>
                  <TableCell align="center">{worker.username}</TableCell>
                  <TableCell align="center">{new Date(worker.DOB).toISOString().substring(0, 10)}</TableCell>
                  <TableCell align="center">{new Date(worker.DOB).toISOString().substring(0, 10)}</TableCell>
                  <TableCell align="center">{worker.postcode}</TableCell>
                  <TableCell align="center">{worker.is_active?"yes":"no"}</TableCell>
              </TableRow>
          )})
          }
        </TableBody>
      </Table>
    </TableContainer>
            
        </>
    )
}

export default WorkersTable
