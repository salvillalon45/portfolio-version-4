import React from 'react';

type TextProps = {
	value: string;
	style?: string;
};

function Text({ style, value }: TextProps) {
	return <p className={`font-poppins ${style}`}>{value}</p>;
}

export default Text;
