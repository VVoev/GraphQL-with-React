import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
class SongCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Create a new song</h3>
                <form
                    onSubmit={this.handleSubmitForm}
                >
                    <label>Song Title</label>
                    <input
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title:String) {
        addSong(title: $title) {
          id
          title
        }
      }
`;

export default graphql(mutation)(SongCreate);