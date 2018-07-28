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
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import ModalDialogEditCategoryName from 'components/ModalDialogEditCategoryName/ModalDialogEditCategoryName';
import ModalDialogYesNo from 'components/ModalDialogYesNo/ModalDialogYesNo';
import ModalDialogEditSubCategories from 'components/ModalDialogEditSubCategories/ModalDialogEditSubCategories';
import SubCategory from 'components/SubCategory/SubCategory';

const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
};


const Category = ({
                      updateExpense,
                      expenses,
                      category,
                      categories,
                      categoryUP,
                      categoryDOWN,
                      delCategory,
                      clearCategories,
                      updateCategory,
                  }) => {

    const UPhandler = () => {
        if (categories.length === 1) {
            return;
        }

        const minRating = categories
            .filter(cat => cat.idParent === category.idParent)
            .sort((a, b) => a.rating > b.rating)[0].rating;

        if (category.rating === minRating) {
            return;
        }

        const ratingDOWNcategory = categories
            .filter(cat => cat.idParent === category.idParent)
            .find(cat => cat.rating === category.rating - 1);

        const newUPcategory = {
            name: category.name,
            rating: category.rating - 1,
            isParent: category.isParent,
            isChild: category.isChild,
            idParent: category.idParent
        };

        updateCategory(category._id, newUPcategory);

        const newDOWNcategory = {
            name: ratingDOWNcategory.name,
            rating: ratingDOWNcategory.rating + 1,
            isParent: ratingDOWNcategory.isParent,
            isChild: ratingDOWNcategory.isChild,
            idParent: ratingDOWNcategory.idParent
        };

        updateCategory(ratingDOWNcategory._id, newDOWNcategory);
    };

    const DOWNhandler = () => {
        if (categories.length === 1) {
            return;
        }
        const maxRating = categories
            .filter(cat => cat.idParent === category.idParent)
            .sort((a, b) => a.rating < b.rating)[0].rating;

        if (category.rating === maxRating) {
            return;
        }

        const ratingUPcategory = categories
            .filter(cat => cat.idParent === category.idParent)
            .find(cat => cat.rating === category.rating + 1);

        const newUPcategory = {
            name: ratingUPcategory.name,
            rating: ratingUPcategory.rating - 1,
            isParent: ratingUPcategory.isParent,
            isChild: ratingUPcategory.isChild,
            idParent: ratingUPcategory.idParent
        };
        updateCategory(ratingUPcategory._id, newUPcategory);

        const newDOWNcategory = {
            name: category.name,
            rating: category.rating + 1,
            isParent: category.isParent,
            isChild: category.isChild,
            idParent: category.idParent
        };
        updateCategory(category._id, newDOWNcategory);
    };

    const UPhandlerSubCat = subCategory => {
        const curSubCategories = categories
            .filter(cat => cat.idParent === subCategory.idParent);

        if (curSubCategories.length === 1) {
            return;
        }

        const minRating = curSubCategories.sort((a, b) => a.rating > b.rating)[0].rating;
        if (subCategory.rating === minRating) {
            return;
        }

        const ratingDOWNcategory = curSubCategories
            .find(subCat => subCat.rating === subCategory.rating - 1);

        const newUPcategory = {
            name: subCategory.name,
            rating: subCategory.rating - 1,
            isParent: subCategory.isParent,
            isChild: subCategory.isChild,
            idParent: subCategory.idParent
        };

        updateCategory(subCategory._id, newUPcategory);

        const newDOWNcategory = {
            name: ratingDOWNcategory.name,
            rating: ratingDOWNcategory.rating + 1,
            isParent: ratingDOWNcategory.isParent,
            isChild: ratingDOWNcategory.isChild,
            idParent: ratingDOWNcategory.idParent
        };

        updateCategory(ratingDOWNcategory._id, newDOWNcategory);
    };

    const DOWNhandlerSubCat = subCategory => {
        const curSubCategories = categories
            .filter(cat => cat.idParent === subCategory.idParent);


        if (curSubCategories.length === 1) {
            return;
        }

        const maxRating = curSubCategories.sort((a, b) => a.rating < b.rating)[0].rating;

        if (subCategory.rating === maxRating) {
            return;
        }

        const ratingUPcategory = curSubCategories
            .find(subCat => subCat.rating === subCategory.rating + 1);

        const newUPcategory = {
            name: ratingUPcategory.name,
            rating: ratingUPcategory.rating - 1,
            isParent: ratingUPcategory.isParent,
            isChild: ratingUPcategory.isChild,
            idParent: ratingUPcategory.idParent
        };
        updateCategory(ratingUPcategory._id, newUPcategory);

        const newDOWNcategory = {
            name: subCategory.name,
            rating: subCategory.rating + 1,
            isParent: subCategory.isParent,
            isChild: subCategory.isChild,
            idParent: subCategory.idParent
        };
        updateCategory(subCategory._id, newDOWNcategory);
    };

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
                            subCategories={categories.filter(subCategory => subCategory.idParent === category._id)}
                            expenses={expenses}
                            updateExpense={updateExpense}
                        />
                    </CardActions>
                    <CardActions>
                        <ModalDialogEditSubCategories
                            category={category}
                            subCategories={categories.filter(subCategory => subCategory.idParent === category._id)}
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
                                    {
                                        categories.filter(subCategory => subCategory.idParent === category._id)
                                            .sort((a, b) => a.rating > b.rating)
                                            .map(subCategory => {
                                                return (
                                                    <TableRow key={category._id}>
                                                        <TableCell component="th" scope="row">
                                                            <SubCategory
                                                                subCategories={
                                                                    categories
                                                                        .filter(subCategory => subCategory.idParent === category._id)
                                                                }
                                                                subCategory={subCategory}
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
    );
};


Category.propTypes = {
    category: PropTypes.object.isRequired,
    updateExpense: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    clearCategories: PropTypes.array.isRequired,
    expenses: PropTypes.array.isRequired,
    categoryUP: PropTypes.func.isRequired,
    categoryDOWN: PropTypes.func.isRequired,
    delCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
};

export default Category;
