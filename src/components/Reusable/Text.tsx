import React, { ReactNode } from 'react';

type TextProps = {
	children: ReactNode;
	style?: string;
};

function Text({ style, children }: TextProps) {
	return <p className={`font-poppins ${style}`}>{children}</p>;
}

export default Text;
