import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class SelectDialogAddSubCategory extends React.Component {

    //curCategory сразу равно или {} или первой категории с parent = false

    state = {
        open: false,
        // categories: [...this.props.categories.filter(category => category.parent === false)],
        curCategory:
        ([...this.props.categories.filter(category => category.parent === false)].length>0)
        ? [...this.props.categories.filter(category => category.parent === false)][0]
            : {}

    };

    handleChange = event => {

        console.log('event.target.value = ',event.target.value)

        this.setState({
            curCategory: event.target.value,
        })
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAddSubCategory = () => {

        // console.log('this.state.curCategory = ',this.state.curCategory)//ok category 2

        if(this.state.curCategory !== {})
        this.props.addSubCategory(this.props.category, this.state.curCategory);

        // this.props.addSubCategory(this.props.category);
        this.handleClose();

    };

    render() {
        const { classes } = this.props;

        const categories = [...this.props.categories.filter(category => category.parent === false)]

        return (
            <div>
                <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    onClick={this.handleClickOpen}
                >
                    ADD SUBCATEGORY
                </Button>
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Chose new subcategory</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <FormControl className={classes.formControl}>
                                <Select
                                    native
                                    value={this.state.curCategory}
                                    onChange={this.handleChange}
                                    input={<Input id="age-native-simple" />}
                                >
                                    {
                                        categories.filter(category => category.parent === false)
                                            .map(category => {
                                                return (
                                                    <option value={category}>
                                                        {category.name}
                                                    </option>
                                                )
                                            }
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAddSubCategory} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

SelectDialogAddSubCategory .propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectDialogAddSubCategory );