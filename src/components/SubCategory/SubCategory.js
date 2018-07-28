import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.jsx';
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';


const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
};


const SubCategory = ({
                         UPhandlerSubCat,
                         DOWNhandlerSubCat,
                         subCategory
                     }) => {

    const UPhandler = () => {
        UPhandlerSubCat(subCategory);
    };

    const DOWNhandler = () => {
        DOWNhandlerSubCat(subCategory);
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
            </div>
        </Card>
    );
};

SubCategory.propTypes = {
    subCategory: PropTypes.object.isRequired,
    UPhandlerSubCat: PropTypes.func.isRequired,
    DOWNhandlerSubCat: PropTypes.func.isRequired,
};

export default SubCategory;
