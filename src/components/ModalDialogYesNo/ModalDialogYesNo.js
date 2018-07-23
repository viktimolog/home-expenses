import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
});

class ModalDialogYesNo extends React.Component {

    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    DELhandler = () => {

        const findExpensesByCategory = this.props.expenses
            .filter(exp => exp.idCategory === this.props.category._id)

        if (findExpensesByCategory.length > 0) {
            findExpensesByCategory.map(exp => {
                const updateExpense = {
                    date: exp.date,
                    category: exp.category + ' (deleted)',
                    expense: exp.expense,
                    valueUAH: exp.valueUAH,
                    idCategory: exp.idCategory
                }
                this.props.updateExpense(exp._id, updateExpense)
            })
        }

        if (!this.props.category.parent && !this.props.category.child) {
            this.props.delCategory(this.props.category._id);
            this.handleClose();
            return;
        }

        let parents = [];

        if (this.props.category.parent) {
            const itsSubCategories = this.props.subCategories.filter(sub => sub.idCategory === this.props.category._id)
            if (itsSubCategories.length > 0) {
//удаляем нафиг все из subCategories
                itsSubCategories.map(sub => {
                    this.props.delSubCategory(sub._id)
                    parents.push(this.props.categories.filter(cat => cat._id === sub.idParent)[0])
                })
            }
//находим их парент и делаем им child=false
            parents.map(parent => {
                const updateParent = {
                    name: parent.name,
                    rating: parent.rating,
                    parent: parent.parent,
                    child: false
                }
                this.props.updateCategory(parent._id, updateParent)
            })
            this.props.delCategory(this.props.category._id);
            this.handleClose();
            return;
        }

        if (this.props.category.child) {
            const itInSubCategories = this.props.subCategories.filter(sub => sub.idParent === this.props.category._id)[0]

            const curParent = this.props.categories.filter(cat => cat._id === itInSubCategories.idCategory)[0];
//найти все подкатегории этого парента, если она одна то апдате емк парент = фолсе
            const subCatCurParent = this.props.subCategories.filter(sub => sub.idCategory === curParent._id)[0]
            if (subCatCurParent.length === 1) {
                const updateCurParent = {
                    name: curParent.name,
                    rating: curParent.rating,
                    parent: false,
                    child: curParent.child
                }
                this.props.updateCategory(curParent._id, updateCurParent)
            }

            this.props.delSubCategory(itInSubCategories._id)
            this.props.delCategory(this.props.category._id);
            this.handleClose();
            return;
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    onClick={this.handleOpen}
                >
                    DEL
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Are you sure?
                        </Typography>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                            <Button onClick={this.DELhandler}>Delete</Button>
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

ModalDialogYesNo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalDialogYesNo);