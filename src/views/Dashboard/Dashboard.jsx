import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

function Dashboard(props) {
    const { classes } = props;

    return (
        <Grid container>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>New expenses</h4>
                        <p className={classes.cardCategoryWhite}>
                            Please, enter new expenses data here
                        </p>
                    </CardHeader>


                    <CardBody>
                    <Card/>
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
                <Card plain>
                    <CardHeader plain color="primary">
                        <h4 className={classes.cardTitleWhite}>
                            Latest expenses
                        </h4>
                        <p className={classes.cardCategoryWhite}>
                            Here is latest 20 expenses
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell component="th" scope="row" style={{color: 'blue', fontSize: '16px'}}>Date</TableCell>
                                    <TableCell component="th" scope="row" style={{color: 'blue', fontSize: '16px'}}>Category</TableCell>
                                    <TableCell component="th" scope="row" style={{color: 'blue', fontSize: '16px'}}>Expenses</TableCell>
                                    <TableCell component="th" scope="row" style={{color: 'blue', fontSize: '16px'}}>Value, UAH</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.expenses
                                    .sort((a, b) => a.date > b.date)
                                    .slice(0,20)
                                    .map(expense => {
                                        return (
                                            <TableRow key={expense.id}>
                                                <TableCell component="th" scope="row">
                                                    {expense.date}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {expense.category}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {expense.expense}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {expense.valueUAH}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    );
}

export default withStyles(styles)(Dashboard);
