import React, { ReactNode } from 'react';

type WrapperProps = {
	children: ReactNode;
	id: string;
};

function Wrapper({ id, children }: WrapperProps) {
	return (
		<div id={id} className='grid gap-4'>
			{children}
		</div>
	);
}

export default Wrapper;
