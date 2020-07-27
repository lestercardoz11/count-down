import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            deadline: 'January 1, 2025',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return(
            <div className="App container">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock 
                   deadline = {this.state.deadline}
                />
                <div className="row justify-content-md-center space">
                <Form inline>
                    <FormControl 
                    className="deadlineInput"
                    placeholder='Change Date'
                    onChange={event => this.setState({newDeadline:event.target.value})}
                    />
                    <Button className="button1" onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
                </div>
            </div>
        )
    }
}

export default App;
