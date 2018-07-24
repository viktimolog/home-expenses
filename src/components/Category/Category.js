import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
import ModalDialogEditCategoryName from 'components/ModalDialogEditCategoryName/ModalDialogEditCategoryName'
import ModalDialogYesNo from 'components/ModalDialogYesNo/ModalDialogYesNo'
import ModalDialogEditSubCategories from 'components/ModalDialogEditSubCategories/ModalDialogEditSubCategories'
import SubCategory from 'components/SubCategory/SubCategory'
import subCategory from "../SubCategory/SubCategory";

const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
}


const Category = ({
                      token,
                      updateExpense,
                      expenses,
                      subCategories,
                      category,
                      categories,
                      categoryUP,
                      categoryDOWN,
                      delCategory,
                      updateCategoryName,
                      subCategoryUP,
                      subCategoryDOWN,
                      delSubCategory,
                      addSubCategory,
                      clearCategories,
                      updateCategory,
                      updateSubCategory
                  }) => {

        const UPhandler = () => {
        if (categories.length === 1) return;

        const minRating = categories.sort((a, b) => a.rating > b.rating)[0].rating;
        if (category.rating === minRating) return;

        const ratingDOWNcategory = categories.find(cat => cat.rating === category.rating - 1);

        const newUPcategory = {
            name: category.name,
            rating: category.rating - 1,
            parent: category.parent,
            child: category.child
        }

        updateCategory(category._id, newUPcategory);

        const newDOWNcategory = {
            name: ratingDOWNcategory.name,
            rating: ratingDOWNcategory.rating + 1,
            parent: ratingDOWNcategory.parent,
            child: ratingDOWNcategory.child
        }
        updateCategory(ratingDOWNcategory._id, newDOWNcategory);
    }

    const DOWNhandler = () => {
        if (categories.length === 1) return;
        const maxRating = categories.sort((a, b) => a.rating < b.rating)[0].rating;

        if (category.rating === maxRating) return;

        const ratingUPcategory = categories.find(cat => cat.rating === category.rating + 1);

        const newUPcategory = {
            name: ratingUPcategory.name,
            rating: ratingUPcategory.rating - 1,
            parent: ratingUPcategory.parent,
            child: ratingUPcategory.child
        }
        updateCategory(ratingUPcategory._id, newUPcategory);

        const newDOWNcategory = {
            name: category.name,
            rating: category.rating + 1,
            parent: category.parent,
            child: category.child
        }
        updateCategory(category._id, newDOWNcategory);
    }

    const UPhandlerSubCat = subCategory => {
        const curSubCategories = subCategories
            .filter(subCat => subCat.idCategory === subCategory.idCategory)

        if (curSubCategories.length === 1) return;

        const minRating = curSubCategories.sort((a, b) => a.rating > b.rating)[0].rating;
        if (subCategory.rating === minRating) return;


        const ratingDOWNcategory = curSubCategories
            .find(subCat => subCat.rating === subCategory.rating - 1);

        const newUPcategory = {
            idCategory: subCategory.idCategory,
            rating: subCategory.rating - 1,
            idParent: subCategory.idParent
        }
        updateSubCategory(subCategory._id, newUPcategory)

        const newDOWNcategory = {
            idCategory: ratingDOWNcategory.idCategory,
            rating: ratingDOWNcategory.rating + 1,
            idParent: ratingDOWNcategory.idParent
        }
        updateSubCategory(ratingDOWNcategory._id, newDOWNcategory)
    }

    const DOWNhandlerSubCat = subCategory => {
        const curSubCategories = subCategories
            .filter(subCat => subCat.idCategory === subCategory.idCategory)

        if (curSubCategories.length === 1) return;

        const maxRating = curSubCategories.sort((a, b) => a.rating < b.rating)[0].rating;

        if (subCategory.rating === maxRating) return;


        const ratingUPcategory = curSubCategories
            .find(subCat => subCat.rating === subCategory.rating + 1);

        const newUPcategory = {
            idCategory: ratingUPcategory.idCategory,
            rating: ratingUPcategory.rating - 1,
            idParent: ratingUPcategory.idParent
        }
        updateSubCategory(ratingUPcategory._id, newUPcategory)

        const newDOWNcategory = {
            idCategory: subCategory.idCategory,
            rating: subCategory.rating + 1,
            idParent: subCategory.idParent
        }
        updateSubCategory(subCategory._id, newDOWNcategory)
    }

    return (
        <div>
            <Card style={Styles}>
                <CardContent>
                    <Typography
                        color="inherit"
                        gutterBottom variant="title"
                        component="h2"
                    >
                        <ModalDialogEditCategoryName
                            category={category}
                            updateCategory={updateCategory}
                        />
                    </Typography>
                </CardContent>
                <div style={{display: 'flex'}}>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={UPhandler}
                        >
                            Up
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={DOWNhandler}
                        >
                            Down
                        </Button>
                    </CardActions>
                    <CardActions>
                        <ModalDialogYesNo
                            categories={categories}
                            category={category}
                            delCategory={delCategory}
                            updateCategory={updateCategory}
                            subCategories={subCategories}
                            delSubCategory={delSubCategory}
                            expenses={expenses}
                            updateExpense={updateExpense}
                            token={token}
                        />
                    </CardActions>
                    <CardActions>
                        <ModalDialogEditSubCategories
                            category={category}
                            subCategories={subCategories}
                            subCategoryUP={subCategoryUP}
                            subCategoryDOWN={subCategoryDOWN}
                            delSubCategory={delSubCategory}
                            addSubCategory={addSubCategory}
                            clearCategories={clearCategories}
                            updateCategory={updateCategory}
                            categories={categories}
                            UPhandlerSubCat={UPhandlerSubCat}
                            DOWNhandlerSubCat={DOWNhandlerSubCat}
                        />
                    </CardActions>
                </div>
            </Card>


            <Grid container>
                <GridItem xs={12} sm={12} md={10}>
                    <Card>
                        <CardBody>
                            <Table>
                                <TableBody>
                                    {subCategories
                                        .filter(subCategory => subCategory.idCategory === category._id)
                                        .sort((a, b) => a.rating > b.rating)
                                        .map(subCategory => {
                                            return (
                                                <TableRow key={category._id}>
                                                    <TableCell component="th" scope="row">
                                                        <SubCategory
                                                            subCategories={subCategories}
                                                            subCategory={subCategory}
                                                            subCategoryUP={subCategoryUP}
                                                            subCategoryDOWN={subCategoryDOWN}
                                                            categories={categories}
                                                            // updateSubCategory={updateSubCategory}
                                                            DOWNhandlerSubCat={DOWNhandlerSubCat}
                                                            UPhandlerSubCat={UPhandlerSubCat}
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
    )
}


Category.propTypes = {
    category: PropTypes.object.isRequired,
    updateExpense: PropTypes.func.isRequired
}

export default Category