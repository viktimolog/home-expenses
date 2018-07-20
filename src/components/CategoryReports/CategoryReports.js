import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import SubCategoryReports from 'components/SubCategoryReports/SubCategoryReports'

const CategoryReports = ({arrViewExpenses, category, sum}) => (
    <div>
        <Grid container>
            <GridItem xs={12} sm={12} md={6}>
                <Card>
                    <Typography
                        color="inherit"
                        gutterBottom variant="title"
                        component="h2"
                    >
                        {category.name}
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
        {
            (sum > 0)
                ? arrViewExpenses
                    .map(expense => {
                        return (
                            <SubCategoryReports
                                expense={expense}
                            />
                        )
                    })
                : null
        }
    </div>
)

CategoryReports.propTypes = {
    category: PropTypes.object.isRequired,
}

export default CategoryReports