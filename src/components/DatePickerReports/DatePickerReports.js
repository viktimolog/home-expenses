import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class DatePickerReports extends React.Component {

    getDate = value => {
        const dateFormat = require('dateformat');
        const date = dateFormat(value, 'yyyy-mm-dd');
        return date;
    };

    state = {
        date: this.getDate(Date.now())
    };

    handleDate = event => {
        this.setState({date: event.target.value});
        this.props.handleTmpBegin(new Date(event.target.value).getTime());
    };

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label={this.props.label}
                    type="date"
                    defaultValue={this.getDate(Date.now())}
                    className={classes.textField}
                    onChange={this.handleDate}
                    value={this.state.date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}

DatePickerReports.propTypes = {
    classes: PropTypes.object.isRequired,
    handleTmpBegin: PropTypes.func.isRequired
};

export default withStyles(styles)(DatePickerReports);
