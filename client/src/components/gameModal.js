import React, { Component } from 'react';
import { 
    Button,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addGame } from '../actions/gameActions';


class GameModal extends Component {
    state = {
        modal: false,
        name: '',
        players: '',
        rating: '',
        year: '',
        platform: [],
        desc: '',
        link: ''
    }

    toggle = () => {
        this.setState({
         modal: !this.state.modal
    });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newGame = {
            name: this.state.name,
            players: this.state.players,
            rating: this.state.rating,
            year: this.state.year,
            platform: this.state.platform,
            desc: this.state.desc,
            link: this.state.link
        }

        this.props.addGame(newGame);

        this.toggle();
    }

    render() {
        return(
            <div>
            <div className="header">
            <h1>DecaHex</h1>
            <h1>My games</h1>
            <Link to="/"><h1>Go back</h1></Link>
            </div>
                <Button
                    className="specialbtn"
                    onClick={this.toggle}

                >Add a game</Button>
                <div className="mygamesregister">
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <div className="formgrid">
                                <div className="formgrid-01">
                                <Label for="game" className="label">Name</Label>
                                <br />
                                <Input 
                                    type="text"
                                    name="name"
                                    id="game"
                                    required
                                    placeholder="Add title"
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="formgrid-02">
                                <Label for="players" className="label">Players</Label>
                                <br />
                                 <Input 
                                    type="text"
                                    name="players"
                                    id="players"
                                    required
                                    placeholder="Add players"
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="formgrid-03">
                                <Label for="rating" className="label">Rating</Label>
                                <br />
                                 <Input 
                                    type="text"
                                    name="rating"
                                    id="rating"
                                    required
                                    placeholder="Add rating"
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="formgrid-04">
                                <Label for="platform" className="label">Platform/s</Label>
                                <br />
                                 <Input 
                                    type="text"
                                    name="platform"
                                    id="platform"
                                    required
                                    placeholder="please use commas to sperate"
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="formgrid-05">
                                 <Label for="year" className="label">Year Released</Label>
                                 <br />
                                 <Input 
                                    type="text"
                                    name="year"
                                    id="year"
                                    required
                                    placeholder="Add year"
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="formgrid-06">
                                <Label for="link" className="label">Image Link</Label>
                                <br />
                                 <Input 
                                    type="text"
                                    name="link"
                                    id="link"
                                    required
                                    placeholder="Add link"
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="formgrid-07">
                                   <Label for="desc" className="label">Description</Label>
                                   <br />
                                 <Input 
                                    type="text"
                                    name="desc"
                                    id="desc"
                                    required
                                    placeholder="Add desc"
                                    onChange={this.onChange}
                                />
                                </div>
                                <div className="formgrid-08">
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >
                                    Add game
                                </Button>
                                </div>
                                </div>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    game: state.game
})

export default connect(mapStateToProps, { addGame })(GameModal);