import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Category from "components/Category/Category";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const ConfigTableList = props => {
    const ADDhandler = () => {
        //todo

        // alert('ADDhandler')//ok

        let maxRating = 0;

        if (props.categories.length === 1)
            maxRating = props.categories[0].rating;

        if (props.categories.length > 1)
            maxRating = props.categories.sort((a, b) => a.rating < b.rating)[0].rating;

        const newCategory = {
            // id: Math.floor(Date.now() / 1000) + '',
            name: '',
            rating: maxRating + 1,
            parent: false,
            child: false
        }
        props.addCategory(newCategory);
    }

    const {classes} = props;
    return (
        <Grid container>
            <GridItem xs={12} sm={12} md={10}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Edit Categories</h4>
                        <p className={classes.cardCategoryWhite}>
                            Please, config your categories
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <TableBody>
                                {props.categories
                                    .sort((a, b) => a.rating > b.rating)
                                    .map(category => {
                                        return (
                                            <TableRow key={category.id}>
                                                <TableCell component="th" scope="row">
                                                    <Category
                                                        categories={props.categories}
                                                        category={category}
                                                        categoryUP={props.categoryUP}
                                                        categoryDOWN={props.categoryDOWN}
                                                        delCategory={props.delCategory}
                                                        updateCategory={props.updateCategory}
                                                        subCategories={props.subCategories}
                                                        subCategoryUP={props.subCategoryUP}
                                                        subCategoryDOWN={props.subCategoryDOWN}
                                                        delSubCategory={props.delSubCategory}
                                                        addSubCategory={props.addSubCategory}
                                                        clearCategories={props.clearCategories}
                                                        expenses={props.expenses}
                                                        updateExpense={props.updateExpense}
                                                        updateSubCategory={props.updateSubCategory}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Button
                                            size="small"
                                            color="secondary"
                                            variant="contained"
                                            onClick={ADDhandler}
                                        >
                                            ADD CATEGORY
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    );
}

export default withStyles(styles)(ConfigTableList);

ConfigTableList.propTypes = {
    categories: PropTypes.array.isRequired,
    categoryUP: PropTypes.func.isRequired,
    categoryDOWN: PropTypes.func.isRequired,
    delCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
}


