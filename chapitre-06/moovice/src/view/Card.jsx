import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <button>

                    <img src={`https://image.tmdb.org/t/p/w300${this.props.poster_path}`} alt="" />

                </button>

                <h2>{this.props.title}</h2>

                <h3>{this.props.release_date}</h3>

                <p>{this.props.overview}</p>
            </div>
        );
    }
}

export default Card;