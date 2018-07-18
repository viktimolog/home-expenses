import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Category from "components/Category/Category";
import SubCategoriesEdit from "components/SubCategoriesEdit/SubCategoriesEdit";

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
        width: theme.spacing.unit * 150,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
});

class ModalDialogEditSubCategories extends React.Component {

    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Button
                    size="small"
                    color="inherit"
                    variant="contained"
                    onClick={this.handleOpen}
                >
                    EDIT
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </div>

                        <Grid container>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardHeader color="primary">
                                        <h4 className={classes.cardTitleWhite}>Edit Category: {this.props.category.name}</h4>
                                        <p className={classes.cardCategoryWhite}>
                                            Please, config your subcategories
                                        </p>
                                    </CardHeader>
                                    <CardBody>
                                        <Table>
                                            <TableBody>
                                                {this.props.subCategories
                                                    .filter(subCategory => subCategory.idCategory === this.props.category.id)
                                                    .sort((a, b) => a.rating > b.rating)
                                                    .map(subCategory => {
                                                        return (
                                                            <TableRow key={this.props.category.id}>
                                                                <TableCell component="th" scope="row">
                                                                    <SubCategoriesEdit
                                                                        category={this.props.category}
                                                                        subCategories={this.props.subCategories}
                                                                        subCategory={subCategory}
                                                                        subCategoryUP={this.props.subCategoryUP}
                                                                        subCategoryDOWN={this.props.subCategoryDOWN}
                                                                        delSubCategory={this.props.delSubCategory}
                                                                        //TODO
                                                                    />
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
                    </div>
                </Modal>
            </div>
        );
    }
}

ModalDialogEditSubCategories.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalDialogEditSubCategories);