import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {TextConstants} from "../../constants/TextConstants";

import ModalDialogEditCategoryName from 'components/ModalDialogEditCategoryName/ModalDialogEditCategoryName'

const Styles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
}

//TODO create subCategories

const Category = ({category, categories, categoryUP, categoryDOWN, delCategory, updateCategoryName}) => {

    const UPhandler = () => {
        categoryUP(categories, category.rating)
    }

    const DOWNhandler = () => {
        categoryDOWN(categories, category.rating)
    }

    const DELhandler = () => {
        delCategory(category)
    }

    return(
        <Card style={Styles}>
            <CardContent>
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {/*{category.name}*/}
                    <ModalDialogEditCategoryName
                        category={category}
                        updateCategoryName={updateCategoryName}
                    />
                </Typography>
            </CardContent>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginLeft: '100px'}}>
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
                    <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                        onClick={DELhandler}
                    >
                        Del
                    </Button>
                </CardActions>
                <CardActions>
                    <Button
                        size="small"
                        color="inherit"
                        variant="contained"
                        // onClick={goBack}
                    >
                        Edit
                    </Button>
                </CardActions>
            </div>
        </Card>
    )
}

//TODO Edit - Modal Window

Category.propTypes = {
    category: PropTypes.object.isRequired,
}

export default Category