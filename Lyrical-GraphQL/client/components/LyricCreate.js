import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {

    constructor(props) {
        super(props);
        this.state = { content: '' };

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        }).then(() => this.setState({ content: '' }));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} >
                    <label>Add a lyric</label>
                    <input value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                    <button className="btn" >Create lyric</button>
                </form>
            </div>
        );
    }
}
const mutation = gql`
    mutation AddLyricToSong($content:String,$songId:ID){
        addLyricToSong(content:$content,songId:$songId){
          id
          lyrics{
            id
            content
            likes
          }
        }
      }
`;
export default graphql(mutation)(LyricCreate);