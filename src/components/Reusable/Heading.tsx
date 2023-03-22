import React from 'react';

type HeadingProps = {
	value: string;
	type: string;
	style: string;
};

function Heading({ value, type, style }: HeadingProps) {
	let content = null;

	switch (type) {
		case 'h1':
			content = <h1 className={style}>{value}</h1>;
			break;
		case 'h2':
			content = <h2 className={style}>{value}</h2>;
			break;
		case 'h3':
			content = <h3 className={style}>{value}</h3>;
			break;
	}

	return content;
}

export default Heading;
