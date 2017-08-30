import React from 'react';

class Modal extends React.Component {
	constructor(props) {
		super(props);

    this.submitForm = this.submitForm.bind(this);
	}

	submitForm(e) {
		e.preventDefault();

		debugger;
	}

	render() {
		return (
			<div className="modal fade" id="settingsModal" tabIndex="-1" role="dialog" aria-labelledby="settingsModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="settingsModalLabel">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<form name="fileForm">
							<div className="modal-body">
								<label htmlFor="file" className="custom-file">
									<input type="file" id="file" className="custom-file-input" />
									<span className="custom-file-control" />
								</label>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary" onClick={this.submitForm}>Save changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;