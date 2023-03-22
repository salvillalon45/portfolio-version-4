import React from 'react';

import AboutPageContent from '../components/AboutPageContent';
import Layout from '../components/Layout';

function AboutPage() {
	return (
		<Layout id={'aboutPageContainer'}>
			{/* <LayoutSection> */}
			<AboutPageContent />
			{/* </LayoutSection> */}
		</Layout>
	);
}

export default AboutPage;
