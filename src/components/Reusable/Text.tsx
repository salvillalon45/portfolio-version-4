import React from 'react';

type TextProps = {
	value: string;
};

function Text({ value }: TextProps) {
	return <p className='font-poppins'>{value}</p>;
}

export default Text;
