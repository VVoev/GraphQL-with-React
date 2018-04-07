import React, { Component } from 'react';
import { hashHistory } from 'react-router';
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

    componentWillUpdate(nextProps) {
        // this.props //old props
        // nextProps // the next set of props that will in place
        // when the component rerenders
        if (!this.props.data.user && nextProps.data.user) {
            //redirect to dashboard
            hashHistory.push('/dashboard');
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

export default graphql(query)(
    graphql(Loginmutation)(LoginForm)
);