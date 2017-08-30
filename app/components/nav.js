import React from 'react';

const Nav = () => (
	<div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="#brand">Foenix</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav flex-row">
					<li className="nav-item active">
						<a className="nav-link" href="#home">Home<span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#draft">Draft</a>
					</li>
				</ul>
				<ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
					<li className="nav-item">
						<a className="nav-link" href="#settings" data-toggle="modal" data-target="#settingsModal">
							<span className="oi oi-cog" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
);

export default Nav;