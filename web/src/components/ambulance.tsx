import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const columns = [
  { id: "telephone", label: "#", minWidth: 100 },
  { id: "name", label: "ผู้ประสบภัย", minWidth: 100 },
  {
    id: "distance",
    label: "ระยะห่าง",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "สถานะ",
    minWidth: 100,
  },
  {
    id: "start",
    label: "เวลาเรียก",
  },
  {
    id: "end",
    label: "เวลาที่เสร็จ",
  },
  {
    id: "doctor",
    label: "ชื่อผู้รับเคส",
    minWidth: 100,
  },
  {
    id: "action",
    label: "จัดการ",
    minWidth: 100,
  },
];

function createData(telephone, name, distance, status, start, end, doctor) {
  return { telephone, name, distance, status, start, end, doctor };
}

const rows = [
  createData("22450", "Fundee Hub", 10, "ยังไม่มีคนรับ", "19:00", null, "-"),
  createData(
    "22450",
    "Fundee Hub",
    100,
    "กำลังช่วยเหลือ",
    "19:00",
    null,
    "EmAdthasit"
  ),
  createData(
    "22450",
    "Fundee Hub",
    1000,
    "เรียบร้อย",
    "19:00",
    "19:15",
    "EmAdthasit"
  ),
];

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
  },
  body: {
    backgroundColor: "hsla(36, 100%, 75%, 0.5)",
  },
  container: {
    maxHeight: 430,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: "hsla(700, 100%, 75%, 0.5)",
  }
});

function Ambulance() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${index}`}
                  >
                    {columns.map((column) => {
                      const value =
                        column.id === "action" ? (
                          <Button variant="contained" color="primary">
                            รับเคส
                          </Button>
                        ) : (
                          row[column.id]
                        );
                      return (
                        <TableCell key={`${column.id}`}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.footer}
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Ambulance;
