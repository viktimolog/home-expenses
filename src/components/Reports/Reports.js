import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import {FormLabel} from '@material-ui/core';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Typography from '@material-ui/core/Typography';
import CategoryReports from 'components/CategoryReports/CategoryReports';
import ModalDialogDatePickers from 'components/ModalDialogDatePickers/ModalDialogDatePickers';
import SubCategoryReports from '../SubCategoryReports/SubCategoryReports';

const styles = {
    cardCategoryWhite: {
        '&,& a,& a:hover,& a:focus': {
            color: 'rgba(255,255,255,.62)',
            margin: '0',
            fontSize: '14px',
            marginTop: '0',
            marginBottom: '0'
        },
        '& a,& a:hover,& a:focus': {
            color: '#FFFFFF'
        }
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
        marginBottom: '3px',
        textDecoration: 'none',
        '& small': {
            color: '#777',
            fontSize: '65%',
            fontWeight: '400',
            lineHeight: '1'
        }
    }
};

const dayTime = 86400000;

class Reports extends React.Component {

    getBeginDayMilliSeconds = begin => {
        let beginDay = begin;
        beginDay = beginDay.setHours(0);
        beginDay = new Date(beginDay);
        beginDay = beginDay.setMinutes(0);
        beginDay = new Date(beginDay);
        beginDay = beginDay.setSeconds(0);
        beginDay = new Date(beginDay);
        beginDay = beginDay.setMilliseconds(0);
        return beginDay;
    };

    getEndDayMilliSeconds = end => {
        let endDay = end;
        endDay = endDay.setHours(23);
        endDay = new Date(endDay);
        endDay = endDay.setMinutes(59);
        endDay = new Date(endDay);
        endDay = endDay.setSeconds(59);
        endDay = new Date(endDay);
        endDay = endDay.setMilliseconds(999);
        return endDay;
    };

    state = {
        beginDate: this.getBeginDayMilliSeconds(new Date()),
        endDate: this.getEndDayMilliSeconds(new Date()),
        mode: 'day'
    };

    setPeriod = (begin, end) => {
        this.setState({
            beginDate: this.getBeginDayMilliSeconds(new Date(begin)),
            endDate: this.getEndDayMilliSeconds(new Date(end))
        });
    };

    handleMonth = () => {
        let date = new Date();
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime();

        this.setState({
            beginDate: firstDay,
            endDate: lastDay,
            mode: 'month'
        });
    };

    handleWeek = () => {

        function getMonday(d) {
            d = new Date(d);
            const day = d.getDay(),
                diff = d.getDate() - day + (day === 0 ? -6 : 1);
            return new Date(d.setDate(diff));
        }

        const Monday = getMonday(new Date());
        let Sunday = new Date();
        Sunday.setDate(Monday.getDate() + 6);
        this.setState({
            beginDate: Monday.getTime(),
            endDate: Sunday.getTime(),
            mode: 'week'
        });
    };

    handleDay = () => {
        let beginDay = new Date();
        beginDay = beginDay.setHours(0);
        beginDay = new Date(beginDay);
        beginDay = beginDay.setMinutes(0);
        beginDay = new Date(beginDay);
        beginDay = beginDay.setSeconds(0);
        beginDay = new Date(beginDay);
        beginDay = beginDay.setMilliseconds(0);

        this.setState({
            beginDate: beginDay,
            endDate: Date.now(),
            mode: 'day'
        });
    };

    handleLeft = () => {
        switch (this.state.mode) {
            case 'period': {
                this.setState({
                    beginDate: 2 * this.state.beginDate - this.state.endDate,
                    endDate: this.state.beginDate
                });
                break;
            }

            case 'month': {
                let date = new Date(this.state.beginDate);
                let firstDayPrevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1).getTime();
                let firstDayCurMonth = new Date(date.getFullYear(), date.getMonth(), 1);
                let endDayPrevMonth = firstDayCurMonth.getTime() - dayTime;

                this.setState({
                    beginDate: firstDayPrevMonth,
                    endDate: endDayPrevMonth,
                });
                break;
            }

            case 'week': {
                this.setState({
                    beginDate: this.state.beginDate - dayTime * 7,
                    endDate: this.state.endDate - dayTime * 7
                });
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
                });
                break;
            }
        }
    };

    handleRight = () => {
        switch (this.state.mode) {
            case 'period': {
                this.setState({
                    beginDate: this.state.endDate,
                    endDate: 2 * this.state.endDate - this.state.beginDate
                });
                break;
            }

            case 'month': {
                let firstDayNextMonth = this.state.endDate + dayTime;
                let monthEndDay = new Date(new Date(firstDayNextMonth).getFullYear()
                    , new Date(firstDayNextMonth).getMonth() + 1, 0);

                this.setState({
                    beginDate: firstDayNextMonth,
                    endDate: monthEndDay.getTime()
                });
                break;
            }

            case 'week': {
                this.setState({
                    beginDate: this.state.beginDate + dayTime * 7,
                    endDate: this.state.endDate + dayTime * 7
                });
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
                });
                break;
            }
        }
    };

    getDate = value => {
        const dateFormat = require('dateformat');
        const date = dateFormat(value, 'ddd mmm d yyyy');
        return date;
    };

    trueExpense = expense => expense.date >= this.state.beginDate && expense.date <= this.state.endDate;

    getTrueExpenses = () => {

        let total = 0;

        let arrExpensesForView = [];
        let curExpenses = this.props.expenses.filter(exp => this.trueExpense(exp));

        let curExpensesCatDel = this.props.expenses
            .filter(exp => this.trueExpense(exp))
            .filter(exp => exp.idCategory === null);


        curExpensesCatDel.map(exp => {
            total += exp.valueUAH;
            arrExpensesForView.push(
                <CategoryReports
                    name={exp.category}
                    sum={exp.valueUAH}/>);
        });

        curExpensesCatDel.map(exp => {
            curExpenses = curExpenses.filter(expense => expense._id !== exp._id);
        });

        const isNeedCat = cat => curExpenses.filter(exp => exp.idCategory === cat._id).length;

        let curCategories = [];

        this.props.categories.map(category => {
            if (isNeedCat(category)) {
                curCategories.push(category);
            }
        });

        let curChildren = [];

        curCategories.map(cat => {
            if ((!cat.isParent && !cat.isChild)
                || (!cat.isParent && cat.isChild
                    && !curCategories.find(category => category._id === cat.idParent))) {
                let sum = 0;

                curExpenses.filter(exp => exp.idCategory === cat._id)
                    .map(exp => {
                        sum += exp.valueUAH;
                    });

                total += sum;

                arrExpensesForView.push(
                    <CategoryReports
                        name={cat.name}
                        sum={sum}/>);
            }

            if (cat.isParent) {

                let sumParent = 0;

                curChildren = curCategories.filter(categ => categ.idParent === cat._id);

                curChildren.map(child => {
                    curExpenses.filter(exp => exp.idCategory === child._id)
                        .map(exp => {
                            sumParent += exp.valueUAH;
                        });
                });

                curExpenses.filter(exp => exp.idCategory === cat._id)
                    .map(exp => {
                        sumParent += exp.valueUAH;
                    });

                total += sumParent;

                arrExpensesForView.push(
                    <CategoryReports
                        name={cat.name}
                        sum={sumParent}/>);

                curChildren.map(child => {
                    let sumChild = 0;
                    curExpenses.filter(exp => exp.idCategory === child._id)
                        .map(exp => {
                            sumChild += exp.valueUAH;
                        });
                    arrExpensesForView.push(
                        <SubCategoryReports
                            name={child.name}
                            sum={sumChild}/>);
                });
            }
        });

        arrExpensesForView.push(
            <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <Typography
                            color="primary"
                            gutterBottom variant="title"
                            component="info"
                        >
                            Total, UAH
                        </Typography>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <Typography
                            color="primary"
                            gutterBottom variant="title"
                            component="info"
                        >
                            {total}
                        </Typography>
                    </Card>
                </GridItem>
            </Grid>
        );

        return arrExpensesForView;
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader plain color="primary">
                            <h4 className={classes.cardTitleWhite}>
                                Expenses reports
                            </h4>
                            <p className={classes.cardCategoryWhite}>
                                Here is some expenses reports
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={1}>
                                    <FormLabel>
                                        {this.getDate(this.state.beginDate)} / {this.getDate(this.state.endDate)}
                                    </FormLabel>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1}>
                                    <Button color="primary" onClick={this.handleLeft}>
                                        <ChevronLeft/>
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <Button color="primary" onClick={this.handleRight}>
                                        <ChevronRight/>
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <Button color="primary" onClick={this.handleDay}>
                                        Day
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <Button color="primary" onClick={this.handleWeek}>
                                        Week
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <Button color="primary" onClick={this.handleMonth}>
                                        Month
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <ModalDialogDatePickers
                                        beginDay={this.state.beginDate}
                                        endDay={this.state.endDate}
                                        setPeriod={this.setPeriod}
                                    />
                                </GridItem>
                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <Grid container>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <Card>
                                                    <Typography
                                                        color="primary"
                                                        gutterBottom variant="title"
                                                        component="info"
                                                    >
                                                        Category
                                                    </Typography>
                                                </Card>
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <Card>
                                                    <Typography
                                                        color="primary"
                                                        gutterBottom variant="title"
                                                        component="info"
                                                    >
                                                        Expenses value, UAH
                                                    </Typography>
                                                </Card>
                                            </GridItem>
                                            {this.getTrueExpenses()}
                                        </Grid>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        );
    }
}

Reports.propTypes = {
    categories: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired
};

export default withStyles(styles)(Reports);
