import * as React from 'react';

import HomePageContent from '../components/HomePageContent';
import Layout from '../components/Layout';

function IndexPage() {
	return (
		<Layout id={'homePageContainer'}>
			<HomePageContent />
		</Layout>
	);
}

export default IndexPage;
