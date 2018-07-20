import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CategoryReports from 'components/CategoryReports/CategoryReports'
import ModalDialogDatePickers from 'components/ModalDialogDatePickers/ModalDialogDatePickers'

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
}

const dayTime = 86400000;

class Reports extends React.Component {

    state = {
        beginDate: 1541391436550,
        endDate: 1541991436550,
        mode: 'period'
    }


    setPeriod = (begin, end) => {
        this.setState({
            beginDate: begin,
            endDate: end
        })
    }

    // setBeginDay = val => this.setState({beginDay: val})
    // setEndDay = val => this.setState({endDate: val})

    handleMonth = () => {
        let date = new Date();
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime();

        this.setState({
            beginDate: firstDay,
            endDate: lastDay,
            mode: 'month'
        })
    }

    handleWeek =() => {

        function getMonday(d) {
            d = new Date(d);
            const day = d.getDay(),
                diff = d.getDate() - day + (day == 0 ? -6:1);
            return new Date(d.setDate(diff))
        }

        const Monday = getMonday(new Date());


        //Прибавили неделю

        let Sunday = new Date();

        Sunday.setDate(Monday.getDate()+6);
        //
        //-----Прибавили неделю

        this.setState({
            beginDate: Monday.getTime(),
            endDate: Sunday.getTime(),
            mode: 'week'
        })
    }

    handleDay =() => {
        this.setState({
            beginDate: Date.now(),
            endDate: Date.now(),
            mode: 'day'
        })
    }
//todo
    handleLeft = () => {

        switch (this.state.mode) {

            case 'period':{
                this.setState({
                    beginDate: 2*this.state.beginDate - this.state.endDate,
                    endDate: this.state.beginDate
                })
                break;
            }

            case 'month': {
                let date = new Date(this.state.beginDate);
                let firstDayPrevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);//первый день предыдущего месяца
                let firstDayCurMonth = new Date(date.getFullYear(), date.getMonth(), 1);//первый день текущего
                let endDayPrevMonth = firstDayCurMonth.getTime() - dayTime
                this.setState({
                    beginDate: firstDayPrevMonth,
                    endDate: endDayPrevMonth,
                })
                break;
            }

            case 'week': {
                this.setState({
                    beginDate: this.state.beginDate - dayTime * 7,
                    endDate: this.state.endDate - dayTime * 7
                })
                break;
            }

            case 'day': {
                let beginDay = this.state.beginDate - dayTime;
                beginDay = new Date(beginDay);
                beginDay = beginDay.setHours(0);
                beginDay = new Date(beginDay);
                beginDay = beginDay.setMinutes(0);
                beginDay = new Date(beginDay);
                beginDay = beginDay.setSeconds(0);
                beginDay = new Date(beginDay);
                beginDay = beginDay.setMilliseconds(0);

                let endDay = this.state.endDate - dayTime;
                endDay = new Date(endDay);
                endDay = endDay.setHours(23);
                endDay = new Date(endDay);
                endDay = endDay.setMinutes(59);
                endDay = new Date(endDay);
                endDay = endDay.setSeconds(59);
                endDay = new Date(endDay);
                endDay = endDay.setMilliseconds(999);

                this.setState({
                    beginDate: beginDay,
                    endDate: endDay
                })
                break;
            }
        }
    }

    handleRight = () => {
        switch (this.state.mode) {

            case 'period':{
                this.setState({
                    beginDate: this.state.endDate,
                    endDate: 2*this.state.endDate - this.state.beginDate
                })
                break;
            }

            case 'month': {

                let firstDayNextMonth = this.state.endDate + dayTime;//первый день следующего

                let monthEndDay = new Date(new Date(firstDayNextMonth).getFullYear(), new Date(firstDayNextMonth).getMonth() + 1, 0);//последний день следующего

                this.setState({
                    beginDate: firstDayNextMonth,
                    endDate: monthEndDay.getTime()
                })
                break;
            }

            case 'week': {
                this.setState({
                    beginDate: this.state.beginDate + dayTime * 7,
                    endDate: this.state.endDate + dayTime * 7
                })
                break;
            }

            case 'day': {
                let beginDay = this.state.beginDate + dayTime;
                beginDay = new Date(beginDay);
                beginDay = beginDay.setHours(0);
                beginDay = new Date(beginDay);
                beginDay = beginDay.setMinutes(0);
                beginDay = new Date(beginDay);
                beginDay = beginDay.setSeconds(0);
                beginDay = new Date(beginDay);
                beginDay = beginDay.setMilliseconds(0);

                let endDay = this.state.endDate + dayTime;
                endDay = new Date(endDay);
                endDay = endDay.setHours(23);
                endDay = new Date(endDay);
                endDay = endDay.setMinutes(59);
                endDay = new Date(endDay);
                endDay = endDay.setSeconds(59);
                endDay = new Date(endDay);
                endDay = endDay.setMilliseconds(999);

                this.setState({
                    beginDate: beginDay,
                    endDate: endDay
                })
                break;
            }
        }
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

    getDate = value => {
        const dateFormat = require('dateformat');
        const date = dateFormat(value, 'ddd mmm d yyyy')
        return date;
    }

    trueExpense = expense => expense.date >= this.state.beginDate && expense.date <= this.state.endDate

    //todo
    catSubCatsToString = (sum, curCategory, arrViewExpenses, expense) => {

        if (sum === 0 && !this.trueExpense(expense)) return null;

        let newSum = sum;

        if (this.trueExpense(expense))
            newSum += expense.valueUAH;

        const Styles1 = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'center'
        }

        return (
            <div style={Styles1}>
                {
                    expense
                        ? <CategoryReports
                                category={curCategory}
                                sum={newSum}
                                arrViewExpenses={arrViewExpenses}
                                // expense={expense}
                          />

                        : <CategoryReports
                            category={curCategory}
                            sum={sum}
                            arrViewExpenses={arrViewExpenses}
                            // expense={expense}
                          />
                }
            </div>
        )
    }

    //todo
    getTrueExpenses = expense => {
        // const date = expense.date;
        const curCategory = this.props.categories.find(cat => cat.id === expense.idCategory);

        // console.log('consolelog curCategory = ',curCategory)//OK

        let sum = 0, arrSubExpenses = [], arrViewExpenses = [];

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
                    <Card style={Styles}>
                        <CardContent>
                            <TableCell component="th" scope="row">
                            <Typography
                                color="inherit"
                                gutterBottom variant="title"
                                component="h2"
                            >
                                {curCategory.name}
                            </Typography>
                            </TableCell>
                                <TableCell component="th" scope="row">
                            <Typography
                                color="inherit"
                                gutterBottom variant="title"
                                component="h2"
                            >
                                {expense.valueUAH}
                            </Typography>
                                </TableCell>
                        </CardContent>
                    </Card>

                    // <TableRow key={expense.id}>
                    //     <TableCell component="th" scope="row">
                    //         {curCategory.name}
                    //     </TableCell>
                    //     <TableCell component="th" scope="row">
                    //         {expense.valueUAH}
                    //     </TableCell>
                    // </TableRow>
                )
            }
        }
    }

    render() {
        // alert('RenderReports this.getDate(this.state.beginDate) = '+this.getDate(this.state.beginDate))

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
                                            <Button color="primary" onClick={this.handleLeft}>
                                                {'<'}
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Button color="primary" onClick={this.handleRight}>
                                                {'>'}
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleDay}>
                                                DAY
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleWeek}>
                                                WEEK
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            <Button color="primary" onClick={this.handleMonth}>
                                                MONTH
                                            </Button>
                                        </TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>
                                            <ModalDialogDatePickers
                                                label={'From: '}
                                                beginDay={this.state.beginDate}
                                                endDay={this.state.endDate}
                                                // setBeginDay={this.setBeginDay}
                                                setPeriod={this.setPeriod}
                                            />
                                            //todo
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
                                            return (
                                                <TableRow key={expense.id}>
                                                    {/*<TableCell component="th" scope="row">*/}
                                                        {this.getTrueExpenses(expense)}
                                                    {/*</TableCell>*/}
                                                </TableRow>
                                            )
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

export default withStyles(styles)(Reports)
