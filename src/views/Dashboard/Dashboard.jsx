import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import Autocomplete from 'views/Dashboard/Autocomplete';

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

class Dashboard extends React.Component {

    state = {
        uah: '',
        expense: '',
        curCategory: null
    };

    uahHandler = event => {

        let ch = event.target.value.replace(/[^0-9.0-9]/g, '');
        let pos1 = ch.indexOf('.');

        if (pos1 !== -1) {
            if ((ch.length - pos1) > 3) {
                ch = ch.slice(0, -1);
            }
        }

        this.setState({
            uah: ch
        });
    };

    handleChange = event => {
        this.setState({
            curCategory: this.props.categories.find(cat => cat._id === event.target.value)
        });
    };


    handleAddExpenses = () => {

        if (this.state.uah === '') {
            alert('Please, fill the textfield UAH');
            return;
        }

        if (this.props.categories.length <= 0) {
            alert('Please, add category!');
            return;
        }

        let curCat;

        if (this.state.curCategory === null) {
            curCat = this.props.categories[0];
        }
        else {
            curCat = {...this.state.curCategory};
        }

        const newExpense = {
            idCategory: curCat._id,
            date: Date.now(),
            category: curCat.name,
            expense: this.state.expense,
            valueUAH: Number(this.state.uah),
        };

        this.setState({
            uah: '',
            expense: ''
        });
        this.props.addExpense(newExpense);
    };

    getDate = value => {
        const dateFormat = require('dateformat');
        const date = dateFormat(value, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
        return date;
    };

    handleExpense = exp => {
        this.setState({
            expense: exp
        });
    };

    render() {
        const {classes} = this.props;
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
                            <Grid container>
                                <GridItem xs={12} sm={12} md={4}>
                                    <Select
                                        style={{display: 'flex', paddingTop: '39px'}}
                                        native
                                        onChange={this.handleChange}
                                        input={<Input id="age-native-simple"/>}
                                    >
                                        {
                                            this.props.categories
                                                .map(category => {
                                                        return (
                                                            <option value={category._id}>
                                                                {category.name}
                                                            </option>
                                                        );
                                                    }
                                                )
                                        }
                                    </Select>
                                </GridItem>
                                <GridItem xs={2} sm={12} md={4}>
                                    <div style={{paddingTop: '43px'}}>
                                        <Autocomplete
                                            pastDescriptions={this.props.pastDescriptions}
                                            setExpense={this.handleExpense}
                                            expense={this.state.expense}
                                        />
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <CustomInput
                                        labelText="UAH"
                                        id="uah"
                                        formControlProps={{fullWidth: true}}
                                        inputProps={
                                            {
                                                value: this.state.uah,
                                                onChange: this.uahHandler,
                                            }
                                        }
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2}>
                                    <Button
                                        color="primary"
                                        onClick={this.handleAddExpenses}
                                        style={{display: 'flex', top: '35%'}}
                                    >ADD EXPENSES</Button>
                                </GridItem>
                            </Grid>
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
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>Date</TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>Category</TableCell>
                                        <TableCell component="th" scope="row"
                                                   style={{color: 'blue', fontSize: '16px'}}>Expenses</TableCell>
                                        <TableCell component="th" scope="row" style={{color: 'blue', fontSize: '16px'}}>Value,
                                            UAH</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.expenses
                                        .sort((a, b) => b.date - a.date)
                                        .slice(0, 20)
                                        .map(expense => {
                                            return (
                                                <TableRow key={expense._id}>
                                                    <TableCell component="th" scope="row">
                                                        {this.getDate(expense.date)}
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
}

export default withStyles(styles)(Dashboard);

Dashboard.propTypes = {
    categories: PropTypes.array.isRequired,
    pastDescriptions: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired,
    addExpense: PropTypes.func.isRequired
};
