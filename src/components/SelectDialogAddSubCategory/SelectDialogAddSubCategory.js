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

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.clearCategories.length !== nextProps.clearCategories.length) {
            return {
                curCategory:
                    nextProps.clearCategories
                        .filter(cat => cat._id !== nextProps.category._id)[0]
            }
        }
    }

    state = {
        open: false,
        curCategory: this.props.clearCategories
            .filter(cat => cat._id !== this.props.category._id)[0],
        clearCategories: this.props.clearCategories//only for getDerivedStateFromProps
    }

    //replaced getDerivedStateFromProps
    // componentWillReceiveProps(nextProps) {
    //     if (this.props.clearCategories.length !== nextProps.clearCategories.length) {
    //         this.setState({
    //             curCategory:
    //                 nextProps.clearCategories
    //                     .filter(cat => cat.id !== nextProps.category.id)[0]
    //         });
    //     }
    // }

    handleChange = name => event => {
        this.setState({
            curCategory: this.props.clearCategories.find(cat => cat._id === event.target.value)
        });
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({
            open: false,
            curCategory: this.props.clearCategories
                .filter(cat => cat._id !== this.props.category._id)[0]
        });
    };

    //todo
    handleAddSubCategory = () => {

        let maxRating = 0;

        if (this.props.subCategories.length === 1)
            maxRating = this.props.subCategories[0].rating;

        if (this.props.subCategories.length > 1)
            maxRating = this.props.subCategories.sort((a, b) => a.rating < b.rating)[0].rating;

        const getNewSubCategory = (category, curCategory) => {
        const newSubCategory = {
            idCategory: category._id,
            rating: maxRating,
            idParent: curCategory._id
            }
            return newSubCategory;
        }

        const getCategorySetChild = newSubCategory => {
            const categorySetChild = {
                name: newSubCategory.name,
                rating: newSubCategory.rating,
                parent: newSubCategory.parent,
                child: true
            }
            return categorySetChild;
        }

        const getCategorySetParent = category => {
            const categorySetParent = {
                name: category.name,
                rating: category.rating,
                parent: true,
                child: category.child
            }
            return categorySetParent;
        }

        const pushToDB = (category, curCategory) => {

            this.props.updateCategory(category._id, getCategorySetParent(category));
            //
            this.props.updateCategory(curCategory._id, getCategorySetChild(curCategory));

            this.props.addSubCategory(getNewSubCategory(category, curCategory));
        }

        if (this.props.clearCategories.length <= 0) {
            this.handleClose();
            return;
        }

        if (this.state.curCategory !== null) {
            if (this.props.category._id === this.state.curCategory._id
                || this.props.category.child) {
                this.handleClose();
                return;
            }
               pushToDB(this.props.category, this.state.curCategory);
        }

        else {
            if (this.props.category._id === this.props.clearCategories[0]._id) {
                this.handleClose();
                return;
            }

            if (!this.props.category.child)
                pushToDB(this.props.category, this.props.clearCategories[0]);
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
                    <DialogTitle>Choice new subcategory</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            <FormControl className={classes.formControl}>
                                <Select
                                    native
                                    // value={this.state.nameCategory}
                                    onChange={this.handleChange('nameCategory')}//todo
                                    input={<Input id="age-native-simple"/>}
                                >
                                    {
                                        this.props.clearCategories
                                            .filter(cat => cat._id !== this.props.category._id)
                                            .map(category => {
                                                    return (
                                                        <option value={category._id}>
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