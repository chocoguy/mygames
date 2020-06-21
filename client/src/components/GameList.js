import React, { Component } from 'react';
import { Container, } from 'reactstrap';
import { connect } from 'react-redux'; 
import { getGames, deleteGame } from '../actions/gameActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {


    componentDidMount() {
        this.props.getGames();
    }

    onDeleteClick = (id) => {
        this.props.deleteGame(id);
    };

 

    render() {
        const { games } = this.props.game; 
        console.log(games)

        if(games === undefined){
            console.log("not loaded")
        }

        return(
            <Container>
                <div className="body">
                    <div className="lib">
                    {games.map(({ _id, name, players, rating, year, platform, desc, link }) => (
                                <div className="library-container">
                                <img src={link} alt="game" width="370" height="656" />
                                <div className="desc">
                                <h2>{name}</h2>
                                <h3>Players: {players}</h3>
                                <h3>Rating: {rating}</h3>
                                <h3>Year Released: {year}</h3>
                                <h3>Platform/s: {platform}</h3>
                                <p>Desciption: {desc}</p>
                                <button
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >Delete game</button>
                                </div>
                                </div>
                    ))}
                    </div>
                    </div>
            </Container>
        );
    }
}


const mapStateToProps = (state) => ({
    game: state.game
})

export default connect(mapStateToProps, {  getGames, deleteGame })(ShoppingList);



