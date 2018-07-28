import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
    const top = 50;
    const left = 50;

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
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    DELhandler = () => {

        //todo expenses fix

        const curExpenses = this.props.expenses.filter(exp => exp.idCategory === this.props.category._id);

        console.log('console.log curExpenses = ', curExpenses);

        curExpenses.map(exp => {
            const newExp = {
                date: exp.date,
                category: exp.category + ' (deleted)',
                expense: exp.expense,
                valueUAH: exp.valueUAH,
                idCategory: null
            };
            this.props.updateExpense(exp._id, newExp);
        });

        let maxRating;

        if (this.props.categories
            .filter(cat => cat.idParent === '0')
            .length === 1) {
            maxRating = this.props.categories[0].rating;
        }
        else {
            maxRating = this.props.categories
                .filter(cat => cat.idParent === '0')
                .sort((a, b) => a.rating < b.rating)[0].rating;
        }

        const arrNextCats = this.props.categories
            .filter(cat => cat.idParent === this.props.category.idParent)
            .filter(cat => cat.rating > this.props.category.rating);

        const subCatsCategory = this.props.categories
            .filter(cat => cat.idParent === this.props.category._id);

        this.props.delCategory(this.props.category._id);

        if (arrNextCats.length) {
            arrNextCats.map(cat => {
                const newNextCategory = {
                    name: cat.name,
                    rating: cat.rating - 1,
                    isParent: cat.isParent,
                    isChild: cat.isChild,
                    idParent: cat.idParent
                };
                this.props.updateCategory(cat._id, newNextCategory);
            });
        }

        subCatsCategory.map(subCat => {
            const newCat = {
                name: subCat.name,
                idParent: '0',
                isParent: subCat.isParent,
                isChild: false,
                rating: maxRating
            };
            maxRating++;
            this.props.updateCategory(subCat._id, newCat);
        });


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
