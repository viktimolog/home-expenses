import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
import SubCategoryReports from 'components/SubCategoryReports/SubCategoryReports'

const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
}


const CategoryReports = ({
                        arrViewExpenses,
                        category,
                        sum,
                        // expense
                  }) => {

    return (
        <div>
            <Card style={Styles}>
                <CardContent>
                    <TableCell component="th" scope="row">
                    <Typography
                        color="inherit"
                        gutterBottom variant="title"
                        component="h2"
                    >
                        {category.name}
                    </Typography>
                    </TableCell>
                        <TableCell component="th" scope="row">
                    <Typography
                        color="inherit"
                        gutterBottom variant="title"
                        component="h2"
                    >
                        {sum.toFixed(2)}
                    </Typography>
                        </TableCell>
                </CardContent>
            </Card>


            <Grid container>
                <GridItem xs={12} sm={12} md={10}>
                    <Card>
                        <CardBody>
                            <Table>
                                <TableBody>
                                    {
                                        (sum > 0)
                                        ? arrViewExpenses
                                        .map(expense => {
                                            return (
                                                <TableRow key={category.id}>
                                                    {/*<TableCell component="th" scope="row">*/}
                                                        <SubCategoryReports
                                                            expense={expense}
                                                        />
                                                    {/*</TableCell>*/}
                                                </TableRow>
                                            );
                                        })
                                         : null
                                    }
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </div>
    )
}


CategoryReports.propTypes = {
    category: PropTypes.object.isRequired,
}

export default CategoryReports