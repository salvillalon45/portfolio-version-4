import React, { ReactNode } from 'react';

type WrapperProps = {
	children: ReactNode;
	id: string;
};

function Wrapper({ id, children }: WrapperProps) {
	return (
		<div id={id} className='page-container-wrapper grid gap-4 w-95 mx-auto'>
			{children}
		</div>
	);
}

export default Wrapper;
