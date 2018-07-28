import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.jsx'
import {ArrowUpward, ArrowDownward} from "@material-ui/icons";


const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
}


const subCategory = ({UPhandlerSubCat, DOWNhandlerSubCat, subCategory, subCategories, subCategoryUP, subCategoryDOWN, categories}) => {

    const UPhandler = () => {
        UPhandlerSubCat(subCategory)
    }

    const DOWNhandler = () => {
        DOWNhandlerSubCat(subCategory)
    }

    return (
        <Card style={Styles}>
            <CardContent>
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {/*{categories.filter(cat => cat._id === subCategory.idParent)[0].name}*/}
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
            </div>
        </Card>
    )
}

subCategory.propTypes = {
    category: PropTypes.object.isRequired,
}

export default subCategory
