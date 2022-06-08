import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './materialize.css';
import './style.css';
import Header from "./components/header";
import {
  acceptInvitation,
  createInvitation,
  getConnections,
  getCredentialDefinitions,
  issueCredential
} from "./server-sdk";
import Connection from "./components/connection";
import Credential from "./components/Credential";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.port = 3021
    this.state = {
      connections: [],
      did: null,
      didInput: null,
      credentialDefinitions: null,
    }
  }

  createInvitation = async () => {
    return createInvitation(this.port);
  }

  acceptInvitation = async (data) => {
    return acceptInvitation(this.port, data);
  }

  issueCreds = async (data) => {
    return issueCredential(this.port, data)
  }

  setDid = () => {
    const s = this.state;
    localStorage.setItem('did_', s.didInput)
    this.setState({
      ...s,
      did: s.didInput
    })
  }

  handleDidInput = (e) => {
    const s = this.state;
    this.setState({
      ...s,
      didInput: e.target.value
    })
  }

  componentDidMount() {
    const did = localStorage.getItem('did_')
    if(did) {
      this.setState({
        did
      })
    }
    getConnections(this.port)
      .then(data => this.setState({ connections: data }))
      .then(() => { return getCredentialDefinitions(this.port)})
      .then((res) => {
        const s = this.state;
        this.setState({
          ...s,
          credentialDefinitions: res
        })
      });
  }

  render() {

    if (!this.state.did) {
      return (
        <div className="row">
          <div className="col s4 m4 offset-m4">
          <label htmlFor="">set DID</label>
          <input type="text" onChange={this.handleDidInput}/>
          <button onClick={this.setDid}>save</button>
        </div>
        </div>
      )
    }

    return (
      <div>
        <Header DID={this.state.did}/>
        <div className="App">
          <div className="row">
            <Connection
              createInvitation={this.createInvitation}
              acceptInvitation={this.acceptInvitation}
              connections={this.state.connections}
            />
          </div>
          <div className="row">
            <Credential
              credentialDefinitions={this.state.credentialDefinitions}
              issueCreds={this.issueCreds}
            />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
