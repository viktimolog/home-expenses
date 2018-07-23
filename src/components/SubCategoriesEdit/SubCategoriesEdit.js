import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.jsx'
import {ArrowUpward, ArrowDownward, Close} from "@material-ui/icons";
import subCategory from "../SubCategory/SubCategory";


const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
}


const SubCategoriesEdit = ({category, delSubCategory, subCategory, subCategories, subCategoryUP, subCategoryDOWN, categories, updateCategory}) => {
    const UPhandler = () => {
        subCategoryUP(subCategory)
    }

    const DOWNhandler = () => {
        subCategoryDOWN(subCategory)
    }

    const delSubCategoryHandler = () => {

        const parentCat = categories.filter(cat => cat._id === subCategory.idCategory)[0];
        const childCat = categories.filter(cat => cat._id === subCategory.idParent)[0];

        // console.log('console.log parentCat = ', parentCat)//ok
        // console.log('console.log childCat = ', childCat)//ok
        // console.log('console.log subCategory._id = ', subCategory._id)//ok

        const getCategoryChangeChild = cat => {
            const categoryChangeChild = {
                name: cat.name,
                rating: cat.rating,
                parent: cat.parent,
                child: false
            }
            return categoryChangeChild;
        }

        const getCategoryChangeParent = category => {
            const categoryChangeParent = {
                name: category.name,
                rating: category.rating,
                parent: false,
                child: category.child
            }
            return categoryChangeParent;
        }

        const pushToDB = (childCat, parentCat, subCategory) => {

            updateCategory(childCat._id, getCategoryChangeChild(childCat));

            updateCategory(parentCat._id, getCategoryChangeParent(parentCat));

            delSubCategory(subCategory._id);
        }


        pushToDB(childCat, parentCat, subCategory)
        // delSubCategory(category, subCategory) //category need?
    }

    return (
        <Card style={Styles}>
            <CardContent>
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {categories.filter(cat => cat._id === subCategory.idParent)[0].name}
                </Typography>
            </CardContent>
            <div style={{display: 'flex'}}>
                <CardActions>
                    <Button
                        color="info"
                        onClick={UPhandler}
                    >
                        <ArrowUpward/>
                    </Button>
                </CardActions>
                <CardActions>
                    <Button
                        color="info"
                        onClick={DOWNhandler}
                    >
                        <ArrowDownward/>
                    </Button>
                </CardActions>
                <CardActions>
                    <Button
                        color="inherit"
                        onClick={delSubCategoryHandler}
                    >
                        <Close/>
                    </Button>
                </CardActions>
            </div>
        </Card>
    )
}

SubCategoriesEdit.propTypes = {
    category: PropTypes.object.isRequired,
}

export default SubCategoriesEdit