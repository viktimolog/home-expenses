import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {Link} from 'react-router-dom'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function EmailVerification(props) {
  const { classes } = props;
    return (
        <div>
            <Grid container>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Email verification to finish registration with Home Expense App</h4>
                            <p className={classes.cardCategoryWhite}>Please, confirm email address</p>
                        </CardHeader>
                        <CardBody>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Email address"
                                        id="email-address"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>
                            <Grid container>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="VerificationCode"
                                        id="verificationcode"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </Grid>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">VERIFY EMAIL</Button>
                        </CardFooter>
                        <Link style={{marginLeft: '16px'}} to='/signin'>already have an account? sign-in</Link>
                    </Card>
                </GridItem>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(EmailVerification);
