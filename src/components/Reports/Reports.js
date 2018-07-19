import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

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

class Reports extends React.Component {

    state = {
        uah: '',
        expense: '',
        curCategory:{},

        beginDate: 1521991436550,
        endDate:   1541991436550
    }

    componentDidMount(){


    }

    stringHandler = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    uahHandler = event => {

        let ch = event.target.value.replace(/[^0-9.0-9]/g, '');
        let pos1 = ch.indexOf('.');

        if (pos1 != -1) {
            if ((ch.length - pos1) > 3) {
                ch = ch.slice(0, -1);
            }
        }

        this.setState({
            uah: ch
        })
    }

    handleChange = event => {
        this.setState({
            curCategory: this.props.categories.find(cat => cat.id === event.target.value)
        });
    };


    handleAddExpenses = () => {

        if(this.state.uah ===''){
            alert('Please, fill the textfield UAH')
            return
        }

        if(this.props.categories.length <= 0){
            alert('Please, add category!')
            return
        }

        const newExpense = {
            id: Math.floor(Date.now() / 1000),
            idCategory: this.state.curCategory.id,
            date: Date.now(),
            category: this.state.curCategory.name,
            expense: this.state.expense,
            valueUAH: Number(this.state.uah),
        }
        this.setState({
            uah: '',
            expense: '',
            // curCategory:{}
        })
        this.props.addExpenses(newExpense);
    };

    getDate = value => {
        const dateFormat = require('dateformat');
        const date = dateFormat(value, 'ddd mmm d yyyy')
        return date;
    }

    trueExpense = expense => (expense.date >= this.state.beginDate && expense.date <= this.state.endDate)

    //todo

    getTrueExpenses = expense => {
        const date = expense.date;
        const curCategory = this.props.categories.find(cat => cat.id === expense.idCategory);

        let sum = 0, arrExpenses = [];


        //У самой категории есть расходы в заданный период
        if(this.trueExpense(expense)){

            sum += expense.valueUAH;

            //Если категория не имеет подкатегорий OK
            if(!curCategory.parent){
                return(
                    <TableRow key={expense.id}>
                        <TableCell component="th" scope="row">
                            {curCategory.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {sum}
                        </TableCell>
                    </TableRow>
                )
            }
        }
        //
        // else
        return null;
    }


    render()
    {
        const { classes } = this.props;
        return (
            <Grid container>
                    <GridItem xs={12} sm={12} md={12}>
                    <Card plain>
                        <CardHeader plain color="primary">
                            <h4 className={classes.cardTitleWhite}>
                                Expenses reports
                            </h4>
                            <p className={classes.cardCategoryWhite}>
                                Here is some expenses reports
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            {this.getDate(this.state.beginDate)} / {this.getDate(this.state.endDate)}

                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Button color="primary" onClick={this.handleAddExpenses}>
                                                {'<'}
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Button color="primary" onClick={this.handleAddExpenses}>
                                                {'>'}
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleAddExpenses}>
                                                DAY
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleAddExpenses}>
                                                WEEK
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleAddExpenses}>
                                                MONTH
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row" style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleAddExpenses}>
                                                PERIOD
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>Category</TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>Expenses value, UAH</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.expenses
                                        .sort((a, b) => a.date < b.date)
                                        .slice(0, 20)
                                        .map(expense => {
                                            return this.getTrueExpenses(expense)
                                            // if (this.trueExpense(expense))
                                            // return (
                                            //     <TableRow key={expense.id}>
                                            //         <TableCell component="th" scope="row">
                                            //             {expense.category}
                                            //         </TableCell>
                                            //         <TableCell component="th" scope="row">
                                            //             {expense.expense}
                                            //         </TableCell>
                                            //     </TableRow>
                                            // );
                                            // return null
                                        })}
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        );
    }
}

export default withStyles(styles)(Reports);
