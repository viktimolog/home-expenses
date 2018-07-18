import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.jsx'
import {ArrowUpward, ArrowDownward, Close} from "@material-ui/icons";


const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
}


const SubCategoriesEdit = ({category, delSubCategory, subCategory, subCategories, subCategoryUP, subCategoryDOWN}) => {

    const UPhandler = () => {
        subCategoryUP(subCategory)
    }

    const DOWNhandler = () => {
        subCategoryDOWN(subCategory)
    }

    const delSubCategoryHandler = () => {
        delSubCategory(category, subCategory)
    }

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
    )
}

SubCategoriesEdit.propTypes = {
    category: PropTypes.object.isRequired,
}

export default SubCategoriesEdit