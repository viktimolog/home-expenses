import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

// @material-ui/core components
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from 'components/Grid/GridItem.jsx';

const CategoryReports = ({name, sum}) => (
    <Grid container>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {name}
                </Typography>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {sum.toFixed(2)}
                </Typography>
            </Card>
        </GridItem>
    </Grid>
);

CategoryReports.propTypes = {
    name: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
};

export default CategoryReports;
