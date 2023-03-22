import React from 'react';

type ButtonProps = {
	value: string;
	style: string;
};

function Button({ style, value }: ButtonProps) {
	return <button className={style}>{value}</button>;
}

export default Button;
