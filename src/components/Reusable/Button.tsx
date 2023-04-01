import React, { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	style?: string;
};

function Button({ style, children }: ButtonProps) {
	return (
		<button
			className={`font-poppins font-semibold w-32 p-4 text-black bg-white rounded-xl ${style}`}
		>
			{children}
		</button>
	);
}

export default Button;
