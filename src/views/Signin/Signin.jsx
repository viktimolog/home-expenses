import React from 'react';
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

class Signin extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleSignin = () => {
        const user = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
        };
        this.props.signin(user);
    };

    stringHandler = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Sign into Home Expense App</h4>
                                <p className={classes.cardCategoryWhite}>Please, enter your email and password</p>
                            </CardHeader>
                            <CardBody>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Email address"
                                            id="email-address"
                                            formControlProps={{fullWidth: true}}
                                            inputProps={
                                                {
                                                    value: this.state.email,
                                                    onChange: this.stringHandler('email'),
                                                }
                                            }
                                        />
                                    </GridItem>
                                </Grid>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Password"
                                            id="password"
                                            formControlProps={{fullWidth: true}}
                                            inputProps={
                                                {
                                                    type: "password",
                                                    value: this.state.password,
                                                    onChange: this.stringHandler('password'),
                                                }
                                            }
                                        />
                                    </GridItem>
                                </Grid>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    onClick={this.handleSignin}
                                    color="primary">SIGN IN</Button>
                            </CardFooter>
                            <Link style={{marginLeft: '16px'}} to='/signup'>first time user? sign-up</Link>
                        </Card>
                    </GridItem>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Signin);
