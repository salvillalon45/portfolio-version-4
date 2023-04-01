import React, { ReactNode, useState } from 'react';

import Wrapper from '../Reusable/Wrapper';
import Header from './Header';
import Footer from './Footer';

import 'bootstrap-icons/font/bootstrap-icons.css';
import DividerLine from '../Reusable/DividerLine';

type LayoutProps = {
	children: ReactNode;
	id: string;
};

function Layout({ children, id }: LayoutProps): React.ReactElement {
	// let content = (
	// 	<>
	// 		{viewPort ? (
	// 			<HorizontalSidebar pageId={id} />
	// 		) : (
	// 			<Sidebar pageId={id} />
	// 		)}

	// 		<MainStyled id={id}> {children} </MainStyled>
	// 	</>
	// );

	// return viewPort ? (
	// 	<MobileGridWrapper className={darkMode.value ? darkTheme : ''}>
	// 		{content}
	// 	</MobileGridWrapper>
	// ) : (
	// 	<>
	// 		<GridWrapper className={darkMode.value ? darkTheme : ''}>
	// 			{content}
	// 		</GridWrapper>
	// 	</>
	// );

	function showMainContent() {
		let content = null;

		switch (id) {
			case 'homePageContainer':
				content = <main className='grid gap-4'>{children}</main>;
				break;
			default:
				content = <main>{children}</main>;
				break;
		}

		return content;
	}

	return (
		<Wrapper id={id}>
			<Header />

			{showMainContent()}

			<DividerLine style='mt-12 mb-4' />

			<Footer />
		</Wrapper>
	);
}

export default Layout;
