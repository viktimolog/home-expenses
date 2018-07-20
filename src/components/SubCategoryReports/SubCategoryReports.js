import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";

const SubCategoryReports = ({expense}) =>
    (
        <Grid container>
            <GridItem xs={12} sm={12} md={2}>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <Card>
                    <Typography
                        color="inherit"
                        gutterBottom variant="title"
                        component="h2"
                    >
                        {expense.category}
                    </Typography>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <Card>
                    <Typography
                        color="inherit"
                        gutterBottom variant="title"
                        component="h2"
                    >
                        {expense.expense}
                    </Typography>
                </Card>
            </GridItem>
        </Grid>
    )

SubCategoryReports.propTypes = {
    category: PropTypes.object.isRequired,
}

export default SubCategoryReports