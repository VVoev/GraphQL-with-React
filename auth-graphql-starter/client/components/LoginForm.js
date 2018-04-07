import React, { Component } from 'react';
import AuthForm from './AuthForm';

import Loginmutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }
    }

    handleSubmitForm({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        })
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.handleSubmitForm.bind(this)} />
            </div>
        );
    }
}

export default graphql(Loginmutation)(LoginForm);