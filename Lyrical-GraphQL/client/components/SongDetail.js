import React, { Component } from 'react';
import { Link } from 'react-router';

import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;
        const { id } = this.props.params;

        if (!song) { return <div>Loading...</div> }

        return (
            <div>
                <Link to="/" className="btn blue">Go Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics}></LyricList>
                <LyricCreate songId={id}></LyricCreate>
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);