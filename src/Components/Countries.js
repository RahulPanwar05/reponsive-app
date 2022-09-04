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
  Tooltip,
} from "@material-ui/core";
import { green } from "@mui/material/colors";

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

const Countries = ({ countrylist, addToFav, search }) => {
  const classes = useStyles();

  return (
    < >
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
              {countrylist == "" ? (
                <TableCell>
                  loading...
                </TableCell>
              ) : (
                countrylist
                  .filter((searchcountry) =>searchcountry.name.toLowerCase().includes(search))
                  .map((country, i) => {
                    return (
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
                          <Tooltip title="Add to your favourite country">
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => addToFav(country)}
                            >
                              Add
                            </Button>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })
              )}
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
};

export default Countries;
