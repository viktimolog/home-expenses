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

const Styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
}

class Reports extends React.Component {

    state = {
        beginDate: 1521991436550,
        endDate: 1541991436550
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


            alert('CLICK')
            return


        if (this.props.categories.length <= 0) {
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
    catSubCatsToString = (sum, curCategory, arrViewExpenses, expense) => {

        if (sum === 0 && !this.trueExpense(expense)) return null;

        let newSum = sum;

        if (this.trueExpense(expense))
            newSum += expense.valueUAH;

        return (
            <div style={Styles}>
                {
                    expense
                        ? <TableRow key={curCategory.id}>
                            <TableCell component="th" scope="row">
                                {curCategory.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {newSum}
                            </TableCell>
                        </TableRow>
                        : <TableRow key={curCategory.id}>
                            <TableCell component="th" scope="row">
                                {curCategory.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {sum}
                            </TableCell>
                        </TableRow>
                }
                {
                    (sum > 0)
                        ? arrViewExpenses
                            .map(expense => {
                                return (
                                    <div style={{marginLeft: '30px', color: 'blue'}}>
                                        <TableRow key={expense.id}>
                                            <TableCell component="th" scope="row">
                                                {expense.category}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {expense.expense}
                                            </TableCell>
                                        </TableRow>
                                    </div>
                                );
                            })
                        : null
                }
            </div>
        )
    }

    //todo
    getTrueExpenses = expense => {
        // const date = expense.date;
        const curCategory = this.props.categories.find(cat => cat.id === expense.idCategory);

        // console.log('consolelog curCategory = ',curCategory)//OK

        var sum = 0;
        var arrSubExpenses = [];

        var arrViewExpenses = [];

        if (curCategory.parent) {
            //Нашли все подкатегории текущей категории, array
            const arrCurSubCat = this.props.subCategories.filter(subCat => subCat.idCategory === curCategory.id);

            console.log('consolelog arrCurSubCat = ', arrCurSubCat)//OK array 1 obj ok

            arrCurSubCat.map(curSubCat => {
                    const subExpense = this.props.expenses.filter(subExp => subExp.idCategory === curSubCat.idParent);
                    subExpense.map(subExp => arrSubExpenses.push(subExp))
                    //Получили массив расходов с подкатегориями нашей категории
                }
            )

            arrSubExpenses.map(curSubExp => {
                    // alert('curSubExp.date = '+curSubExp.date)
                    console.log('consolelog curSubExp = ', curSubExp)//это массив с одним объектом expense правильным
                    if (this.trueExpense(curSubExp)) {
                        // alert('if (this.trueExpense(curSubExp))')//ok
                        sum += curSubExp.valueUAH;
                        const viewExp = {
                            id: Math.floor(Date.now() / 1000),
                            category: this.props.categories.find(cat => cat.id === curSubExp.idCategory).name,
                            expense: curSubExp.valueUAH
                        }
                        arrViewExpenses.push(viewExp);
                    }
                }
            )

            return this.catSubCatsToString(sum, curCategory, arrViewExpenses, expense)
        }
        else {
            //todo
            if (this.trueExpense(expense)) {
                return (
                    <TableRow key={expense.id}>
                        <TableCell component="th" scope="row">
                            {curCategory.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {expense.valueUAH}
                        </TableCell>
                    </TableRow>
                )
            }
        }
    }

    render() {
        const {classes} = this.props;
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
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
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
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleAddExpenses}>
                                                PERIOD
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>Category</TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>Expenses value,
                                            UAH</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.expenses
                                        .sort((a, b) => a.date < b.date)
                                        .slice(0, 20)
                                        .map(expense => {
                                            return this.getTrueExpenses(expense)
                                            // return this.test1(expense)//ok
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

export default withStyles(styles)

(
    Reports
)
;
