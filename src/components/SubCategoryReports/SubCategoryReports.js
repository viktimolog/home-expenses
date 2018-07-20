import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';


const Styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
}


const SubCategoryReports = ({expense}) => {

    return (
        <Card style={Styles}>
            <CardContent>
                <TableCell component="th" scope="row">
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {expense.category}
                </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                <Typography
                    color="inherit"
                    gutterBottom variant="title"
                    component="h2"
                >
                    {expense.expense}
                </Typography>
                </TableCell>
            </CardContent>
        </Card>
    )
}

SubCategoryReports.propTypes = {
    category: PropTypes.object.isRequired,
}

export default SubCategoryReports