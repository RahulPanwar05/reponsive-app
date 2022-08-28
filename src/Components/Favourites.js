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
  Paper,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  favouriteList: {
    backgroundColor: green[300],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const Favourites = ({ favourites, removeFromFav }) => {
  const classes = useStyles();

  return (
    <div>
      <Box textAlign="center" p={2} className={classes.favouriteList}>
        <Typography variant="h5">Favourite Country</Typography>
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
                Falg
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favourites.map((Country, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center" style={{ width: 220 }}>{Country.name}</TableCell>
                  <TableCell align="center" style={{ width: 150 }}>
                    {Country.callingCodes[0]}
                  </TableCell>
                  <TableCell align="center" style={{ width: 150 }}>
                    <img src={Country.flag} width="120" alt="" />
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Delete from your favourite list">
                    <IconButton onClick={() => removeFromFav(Country)}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Favourites;
