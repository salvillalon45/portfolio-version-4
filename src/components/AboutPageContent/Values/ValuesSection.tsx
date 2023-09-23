import React from 'react';
import Heading from '../../Reusable/Heading';
import DividerLine from '../../Reusable/DividerLine';
import YouCanLearnAnything from './YouCanLearnAnything/YouCanLearnAnything';
import CannotDoEverything from './CannotDoEverything/CannotDoEverything';

function ValuesSection() {
	return (
		<>
			<Heading
				type='h2'
				style='font-libre font-semibold leading-none mb-9'
			>
				Here are some of the values I live by
			</Heading>

			<YouCanLearnAnything />
			<DividerLine style='mb-12 mt-12' />

			<CannotDoEverything />
		</>
	);
}

export default ValuesSection;
