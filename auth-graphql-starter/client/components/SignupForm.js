import React, { Component } from 'react';
import AuthForm from './AuthForm';

import { graphql } from 'react-apollo';
import Signupmuttation from '../mutations/Signup'

class SignupForm extends Component {
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm />
            </div>
        );
    }
}

export default graphql(Signupmuttation)(SignupForm);