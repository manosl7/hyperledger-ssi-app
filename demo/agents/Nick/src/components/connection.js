import React from "react";
import {acceptInvitation} from "../server-sdk";

class Connection extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			connections: [],
			lastInvitation: {},
			acceptInvitationInput: ''
		}
	}

	createInvitation = async () => {
		const res = await this.props.createInvitation()
		// console.log(res)
		const s = this.state;
		this.setState({
			...s,
			lastInvitation: res.invitation
		})
	}

	acceptInvitation = async () => {
		const res = await this.props.acceptInvitation(this.state.acceptInvitationInput)
	}

	handleAcceptInvitationInput = (e) => {
		const s = this.state;
		this.setState({
			...s,
			acceptInvitationInput: e.target.value
		})
		console.log(e.target.value)
	}

	render() {
		const cons = Array.isArray(this.props.connections?.results) ?
			this.props.connections.results
				.filter((c) => c.state === 'active')
				.map((c, i) => {
					return (
						<div key={i}>
							<div>With : {c.their_label} </div>
							<div>DID: {c.their_did}</div>
							<div>ID: {c.connection_id}</div>
						</div>
					)
				})
			: ''
		return (
			<div>
				<div className="col s12 m4">
					<div className="icon-block">
						<h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
						<h5 className="center">Create connections</h5>
						<a className="waves-effect waves-light btn black" onClick={this.createInvitation}>invite</a>
					</div>
					<div>
						<pre>{JSON.stringify(this.state.lastInvitation, null, 2)}</pre>
					</div>
				</div>
				<div className="col s12 m4">
					<div className="icon-block">
						<h2 className="center light-blue-text"><i className="material-icons">face</i></h2>
						<h5 className="center">Accept connection</h5>
						<textarea name="invitation" cols="30" rows="10" onChange={this.handleAcceptInvitationInput}></textarea>
						<a className="waves-effect waves-light btn black" id="acceptInvitation" onClick={this.acceptInvitation}>accept</a>
					</div>
				</div>
				<div className="col s12 m4">
					<div className="icon-block">
						<h2 className="center light-blue-text"><i className="material-icons">chat</i></h2>
						<h5 className="center">Connections :</h5>
						{cons}
					</div>
				</div>
			</div>
		);
	}
}
export default Connection
