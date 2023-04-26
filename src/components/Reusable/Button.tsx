import React, { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	style?: string;
	buttonAction: (value?: any) => void;
	// onClick: () =>
	// 	| React.MouseEventHandler<HTMLButtonElement>
	// 	| undefined
	// 	| Promise<void>;
};

function Button({ style, children, buttonAction }: ButtonProps) {
	return (
		<button
			onClick={() => buttonAction()}
			className={`font-poppins font-semibold w-32 p-4 text-black bg-white rounded-xl ${style}`}
		>
			{children}
		</button>
	);
}

export default Button;
