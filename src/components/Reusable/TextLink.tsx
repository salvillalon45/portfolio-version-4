import React, { ReactNode } from 'react';

type TextLinkProps = {
	children: ReactNode;
	style?: string;
	href: string;
	isTargetBlank?: boolean;
};

function TextLink({
	style,
	children,
	href,
	isTargetBlank = true
}: TextLinkProps) {
	return (
		<a
			href={href}
			target={isTargetBlank ? '_blank' : ''}
			className={`font-poppins ${style}`}
		>
			{children}
		</a>
	);
}

export default TextLink;
