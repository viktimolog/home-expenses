import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.jsx';
import {ArrowUpward, ArrowDownward, Close} from '@material-ui/icons';

const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
};


const SubCategoriesEdit = ({UPhandlerSubCat, DOWNhandlerSubCat, category, delSubCategory, subCategory, subCategories, subCategoryUP, subCategoryDOWN, categories, updateCategory}) => {
    const UPhandler = () => {
        UPhandlerSubCat(subCategory);
    };

    const DOWNhandler = () => {
        DOWNhandlerSubCat(subCategory);
    };

    //todo //category // subCategory
    const delSubCategoryHandler = () => {

        const arrNextSubCats = categories
            .filter(cat => cat.idParent === subCategory.idParent)
            .filter(cat => cat.rating > subCategory.rating);

        if(arrNextSubCats.length)
        arrNextSubCats.map(subCat => {
            const newNextCategory = {
                name: subCat.name,
                rating: subCat.rating-1,
                isParent: subCat.isParent,
                isChild: subCat.isChild,
                idParent: subCat.idParent
            };
            updateCategory(subCat._id, newNextCategory);
        });

        const countSubCatsCategory = categories.filter(cat => cat.idParent === subCategory.idParent).length;

        if (countSubCatsCategory === 1) {
            const newCategory = {
                name: category.name,
                idParent: category.idParent,
                isParent: false,
                isChild: category.isChild,
                rating: category.rating
            };
            updateCategory(category._id, newCategory);
        }

        const maxRating = categories
            .filter(cat => cat.idParent === '0')
            .sort((a, b) => a.rating < b.rating)[0].rating;

        const newSubCat = {
            name: subCategory.name,
            idParent: '0',
            isParent: subCategory.isParent,
            isChild: false,
            rating: maxRating + 1
        };

        updateCategory(subCategory._id, newSubCat);
    };

    return (
        <Card style={Styles}>
            <CardContent>
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {subCategory.name}
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
    );
};

SubCategoriesEdit.propTypes = {
    category: PropTypes.object.isRequired,
};

export default SubCategoriesEdit;
