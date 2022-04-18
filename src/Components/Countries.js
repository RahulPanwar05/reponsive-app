import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@material-ui/core";
import {green } from "@mui/material/colors";

const useStyles = makeStyles({
  countryList: {
    backgroundColor: green[300],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

const Countries = ({ courtrylist, addToFav }) => {
  const classes = useStyles();

  return (
    <div className="main">
      <Box textAlign="center" p={2} className={classes.countryList} mb={0}>
        <Typography variant="h5">Country list</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Phone code
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Flag
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Table>
          <TableHead>
            <TableBody >
              {courtrylist.map((country, i) => {
                return (
                  <TableHead>
                    <TableRow key={i}>
                      <TableCell style={{ width: 220 }}>
                        {country.name}
                      </TableCell>
                      <TableCell style={{ width: 150 }}>
                        {country.callingCodes[0]}
                      </TableCell>
                      <TableCell style={{ width: 150 }}>
                        <img src={country.flag} width="120" alt="" />
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => addToFav(country)}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                );
              })}
            </TableBody>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Countries;
