import React, { ReactNode } from 'react';

type HeadingProps = {
	children: ReactNode;
	type: string;
	style: string;
};

function Heading({ children, type, style }: HeadingProps) {
	let content = null;
	let resultStyle = `${style}`;

	switch (type) {
		case 'h1':
			content = (
				<h1 className={`h1-heading ${resultStyle}`}>{children}</h1>
			);
			break;
		case 'h2':
			content = (
				<h2 className={`h2-heading ${resultStyle}`}>{children}</h2>
			);
			break;
		case 'h3':
			content = (
				<h3 className={`h3-heading ${resultStyle}`}>{children}</h3>
			);
			break;
	}

	return content;
}

export default Heading;
