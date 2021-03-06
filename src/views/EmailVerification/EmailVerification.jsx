import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import {Link} from 'react-router-dom';

import {
    verify
} from 'actions/actionCreator';
import {connect} from 'react-redux';

const styles = {
    cardCategoryWhite: {
        color: 'rgba(255,255,255,.62)',
        margin: '0',
        fontSize: '14px',
        marginTop: '0',
        marginBottom: '0'
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
        marginBottom: '3px',
        textDecoration: 'none'
    }
};

class EmailVerification extends React.Component {
    componentDidMount() {
        this.setState({
            email: this.props.match.params.email,
            verifyKey: this.props.match.params.verifyKey
        });
    }

    state = {
        email: '',
        verifyKey: ''
    };

    handleVerify = () => {
        const user = {
            email: this.state.email,
            verifyKey: this.state.verifyKey
        };
        this.props.verify(user);
    };


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Email verification to finish registration with
                                    Home Expense App</h4>
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
                                            inputProps={
                                                {
                                                    disabled: true,
                                                    value: this.state.email
                                                }
                                            }
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
                                            inputProps={
                                                {
                                                    type: 'hidden',
                                                    disabled: true,
                                                    value: this.state.verifyKey
                                                }
                                            }
                                        />
                                    </GridItem>
                                </Grid>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    onClick={this.handleVerify}
                                    color="primary">VERIFY EMAIL</Button>
                            </CardFooter>
                            <Link style={{marginLeft: '16px'}} to='/signin'>already have an account? sign-in</Link>
                        </Card>
                    </GridItem>
                </Grid>
            </div>
        );
    }
}

EmailVerification.propTypes = {
    verify: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    verify
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(EmailVerification));
