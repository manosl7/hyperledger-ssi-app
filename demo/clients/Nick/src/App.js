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
  getCredentialDefinitions, getCredentials,
  issueCredential
} from "./server-sdk";
import Connection from "./components/connection";
import Credential from "./components/Credential";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.port = 3031
    this.state = {
      connections: [],
      did: null,
      didInput: null,
      credentials: null,
    }
  }

  createInvitation = async () => {
    return createInvitation(this.port);
  }

  acceptInvitation = async (data) => {
    return acceptInvitation(this.port, data);
  }

  // issueCreds = async (data) => {
  //   return issueCredential(this.port, data)
  // }

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
      .then(() => { return getCredentials(this.port)})
      .then((res) => {
        const s = this.state;
        this.setState({
          ...s,
          credentials: res
        })
      });
  }

  render() {

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
              credentials={this.state.credentials}
            />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
