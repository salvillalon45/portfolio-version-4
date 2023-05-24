import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'gatsby';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'About', href: '/about/', current: false },
	{ name: 'Experience', href: '/experience/', current: false }
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	return (
		<Disclosure as='nav'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>

							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-between'>
								{/* Logo Container */}
								<div className='logo-container flex flex-shrink-0 items-center'>
									<p className='font-libre font-semibold text-xl'>
										Salvador Villalon Jr
									</p>
								</div>

								{/* Display Navigation Items (Desktop View) */}
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex items-center space-x-4 font-poppins'>
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												activeClassName='bg-gray-700 text-white rounded-md font-medium px-3 py-2'
												// activeStyle={{
												// 	color: 'blue',
												// 	fontWeight: 700
												// }}
												// className={classNames(
												// 	item.current
												// 		? 'bg-gray-900 text-white'
												// 		: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												// 	'rounded-md px-3 py-2 text-sm font-medium'
												// )}
												aria-current={
													item.current
														? 'page'
														: undefined
												}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block rounded-md px-3 py-2 text-sm font-medium'
									)}
									aria-current={
										item.current ? 'page' : undefined
									}
								>
									{item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
