import React from "react";

class Credential extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			issueCredInput: '',
		}
	}
	//
	// createInvitation = async () => {
	// 	const res = await this.props.createInvitation()
	// 	console.log(res)
	// 	const s = this.state;
	// 	this.setState({
	// 		...s,
	// 		lastInvitation: res.invitation
	// 	})
	// }
	//
	issueCreds = async () => {
		const res = await this.props.issueCreds(this.state.issueCredInput)
	}
	//
	handleIssueCredInput = (e) => {
		const s = this.state;
		this.setState({
			...s,
			issueCredInput: e.target.value
		})
		// console.log(e.target.value)
	}

	render() {
		return (
			<div>
				
				<div className="col s4">
				</div>
				<div className="col s4">
					<div className="icon-block">
						<h2 className="center light-blue-text"><i className="material-icons">credit_card</i></h2>
						<h5 className="center">Issue Credentials</h5>
						<textarea name="" id="" cols="30" rows="10" onChange={this.handleIssueCredInput}></textarea>
						<a className="waves-effect waves-light btn black" onClick={this.issueCreds}>send</a>

					</div>
				</div>
				<div className="col s12 ">
					<div className="row center">
						<h5>Credential definitions : {this.props.credentialDefinitions?.credential_definition_ids.map(c => c)}</h5>
					</div>
				</div>

			</div>
		)
	}
	// 		}
}
export default Credential


