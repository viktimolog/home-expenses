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
        curCategory: null
    }

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
            curCategory: null
        });
    };

    handleAddSubCategory = () => {

        if (this.props.clearCategories.length <= 0) {
            this.handleClose();
            return;
        }

        let maxRating = 0;

        if (this.props.subCategories.length === 1)
            maxRating = this.props.subCategories[0].rating;

        if (this.props.subCategories.length > 1)
            maxRating = this.props.subCategories.sort((a, b) => a.rating < b.rating)[0].rating;

        const getNewSubCategory = (category, curCategory) => {
        const newSubCategory = {
            idCategory: category._id,
            rating: maxRating+1,
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

            this.props.updateCategory(curCategory._id, getCategorySetChild(curCategory));

            this.props.addSubCategory(getNewSubCategory(category, curCategory));
        }


        if(this.state.curCategory === null){
            pushToDB(this.props.category, this.props.clearCategories[0]);
        }
        else{
            pushToDB(this.props.category, this.state.curCategory);
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