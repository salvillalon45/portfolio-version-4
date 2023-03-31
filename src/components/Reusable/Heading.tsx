import React from 'react';

type HeadingProps = {
	value: string;
	type: string;
	style: string;
};

function Heading({ value, type, style }: HeadingProps) {
	let content = null;
	let resultStyle = `${style}`;

	switch (type) {
		case 'h1':
			content = <h1 className={`h1-heading ${resultStyle}`}>{value}</h1>;
			break;
		case 'h2':
			content = <h2 className={`h2-heading ${resultStyle}`}>{value}</h2>;
			break;
		case 'h3':
			content = <h3 className={`h3-heading ${resultStyle}`}>{value}</h3>;
			break;
	}

	return content;
}

export default Heading;
