import React, { Component } from 'react';
import AuthForm from './AuthForm';

import Loginmutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser'

class LoginForm extends Component {

    handleSubmitForm({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        });
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm onSubmit={this.handleSubmitForm.bind(this)} />
            </div>
        );
    }
}

export default graphql(Loginmutation)(LoginForm);