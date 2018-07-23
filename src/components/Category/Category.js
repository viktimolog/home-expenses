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

const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
}


const Category = ({
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
                      updateCategory
                  }) => {

    const UPhandler = () => {
        categoryUP(categories, category.rating)
    }

    const DOWNhandler = () => {
        categoryDOWN(categories, category.rating)
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