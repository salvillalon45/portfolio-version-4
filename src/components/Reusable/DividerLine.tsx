import React from 'react';

type DividerLineProps = {
	style?: string;
};

function DividerLine({ style }: DividerLineProps) {
	return <hr className={style} />;
}

export default DividerLine;
