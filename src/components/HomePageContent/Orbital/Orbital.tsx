import React from 'react';

function Orbital() {
	return (
		<div className='orbit'>
			<div className='center-image'>
				<img src='assets/woman.png' alt='' />
				<img src='assets/man.png' alt='' />
			</div>
			<ul>
				<li>
					<div>
						<img src='assets/analytics.svg' alt='' />
					</div>
					<p>Analytics & Reporting</p>
				</li>
				<li>
					<div>
						<img src='assets/calendar.svg' alt='' />
					</div>
					<p>Time & Attendance</p>
				</li>
				<li>
					<div>
						<img src='assets/person.svg' alt='' />
					</div>
					<p>Onboarding</p>
				</li>
				<li>
					<div>
						<img src='assets/finger-print.svg' alt='' />
					</div>
					<p>HR Information System</p>
				</li>
				<li>
					<div>
						<img src='assets/coconut.svg' alt='' />
					</div>
					<p>Leaves & Holidays</p>
				</li>
				<li>
					<div>
						<img src='assets/logout.svg' alt='' />
					</div>
					<p>Exit & Off-boarding</p>
				</li>
				<li>
					<div>
						<img src='assets/plane-1.svg' alt='' />
					</div>
					<p>Travel & Requisitions</p>
				</li>
				<li>
					<div>
						<img src='assets/law.svg' alt='' />
					</div>
					<p>Disciplinary</p>
				</li>
			</ul>
		</div>
	);
}
