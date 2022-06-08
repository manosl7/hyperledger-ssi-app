import React from "react";
import {acceptInvitation} from "../server-sdk";

class Proof extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			connections: [],
			lastInvitation: {},
			issueProofInput: ''
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

	issueProof = async () => {
		const res = await this.props.issueProof(this.state.issueProofInput)
	}

	handleIssueProof = (e) => {
		const s = this.state;
		this.setState({
			...s,
			issueProofInput: e.target.value
		})
		// console.log(e.target.value)
	}

	verify = (id) => {
		this.props.verifyPresentation(id);
}

	render() {
		// console.log(this.props.proofs)

		const proofs = Array.isArray(this.props.proofs?.results) ?
			this.props.proofs.results
				// .filter((c) => c.state === 'active')
				.map((c, i) => {
					return (
						<div key={i}>
							<div>Name : {c.presentation_request.name} </div>
							<div className={c.state === 'verified' && 'green' || 'red'}>{ c.state === 'verified' ? `Status: ${c.state}`: `Status: failed`}</div>
							<div>WITH: {c.connection_id}</div>
							{c.state === 's' && <div>
								<button onClick={() => { this.verify(c.presentation_exchange_id)}}>Verify</button>
							</div>}
						</div>
					)
				})
			: ''
		return (
			<div>
				<div className="col s4 ">
				</div>
				<div className="col s4 m">
					<div className="icon-block">
						<h2 className="center light-blue-text"><i className="material-icons">input</i></h2>
						<h5 className="center">Issue Proof</h5>
						<textarea name="invitation" cols="30" rows="10" onChange={this.handleIssueProof}></textarea>
						<a className="waves-effect waves-light btn black" id="acceptInvitation" onClick={this.issueProof}>send</a>
					</div>
				</div>
				<div className="col s12">
					<div className="icon-block">
						<h2 className="center light-blue-text"><i className="material-icons">verified_user</i></h2>
						<h5 className="center">Proofs :</h5>
						{proofs}
					</div>
				</div>
			</div>
		);
	}
}
export default Proof
