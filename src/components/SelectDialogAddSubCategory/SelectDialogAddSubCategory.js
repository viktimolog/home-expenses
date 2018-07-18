import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
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

    state = {
        open: false,
        // nameCategory: '',
        curCategory: null
    }

    handleChange = name => event => {
        this.setState({
            curCategory: this.props.clearCategories.find(cat => cat.id === event.target.value)
        });
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({
            open: false,
            curCategory: null
        });
    };

    // handleAddSubCategory = () => {
    //
    //
    //     if (this.state.curCategory !== null
    //     && this.props.category.id !== this.state.curCategory.id
    //     && !this.props.category.child)
    //         this.props.addSubCategory(this.props.category, this.state.curCategory);
    //     else {
    //         if (this.props.clearCategories.length > 0
    //             && this.props.category.id !== this.props.clearCategories[0].id
    //             && !this.props.category.child)
    //             this.props.addSubCategory(this.props.category, this.props.clearCategories[0]);
    //     }
    //     this.handleClose();
    // };

    handleAddSubCategory = () => {

        if (this.props.clearCategories.length <= 0) {
            this.handleClose();
            return;
        }

        if (this.state.curCategory !== null) {
            if (this.props.category.id === this.state.curCategory.id
                || this.props.category.child) {
                this.handleClose();
                return;
            }
            this.props.addSubCategory(this.props.category, this.state.curCategory);
        }

        else {
            if (this.props.category.id === this.props.clearCategories[0].id) {
                this.handleClose();
                return;
            }

            if (!this.props.category.child)
                this.props.addSubCategory(this.props.category, this.props.clearCategories[0]);
        }
        this.handleClose();
    };

    render() {
        const {classes} = this.props;

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
                                    // value={this.state.nameCategory}
                                    onChange={this.handleChange('nameCategory')}
                                    input={<Input id="age-native-simple"/>}
                                >
                                    {
                                        this.props.clearCategories
                                            .map(category => {
                                                    return (
                                                        <option value={category.id}>
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

SelectDialogAddSubCategory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectDialogAddSubCategory);