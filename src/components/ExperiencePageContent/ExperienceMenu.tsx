// import { Fragment } from 'react';
// import { Popover, Transition } from '@headlessui/react';
// import {
// 	ChevronDownIcon,
// 	PhoneIcon,
// 	PlayCircleIcon
// } from '@heroicons/react/20/solid';
// import {
// 	ArrowPathIcon,
// 	ChartPieIcon,
// 	CursorArrowRaysIcon,
// 	FingerPrintIcon,
// 	SquaresPlusIcon
// } from '@heroicons/react/24/outline';
// import React from 'react';

// const solutions = [
// 	{
// 		name: 'Currently Doing',
// 		description: 'Get a better understanding of your traffic',
// 		href: '#',
// 		icon: ChartPieIcon,
// 		key: 'currently_doing'
// 	},
// 	{
// 		name: 'Full - Time Experience',
// 		description: 'Speak directly to your customers',
// 		href: '#',
// 		icon: CursorArrowRaysIcon,
// 		key: 'full_time'
// 	},
// 	{
// 		name: 'Internships',
// 		description: "Your customers' data will be safe and secure",
// 		href: '#',
// 		icon: FingerPrintIcon,
// 		key: 'internship'
// 	},
// 	{
// 		name: 'Teaching',
// 		description: 'Connect with third-party tools',
// 		href: '#',
// 		icon: SquaresPlusIcon,
// 		key: 'teaching'
// 	},
// 	{
// 		name: 'Education',
// 		description: 'Build strategic funnels that will convert',
// 		href: '#',
// 		icon: ArrowPathIcon,
// 		key: 'education'
// 	}
// ];
// const callsToAction = [
// 	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
// 	{ name: 'Contact sales', href: '#', icon: PhoneIcon }
// ];

// type ExperienceMenuProps = {
// 	currentContent: string;
// 	setCurrentContent: (string) => void;
// };

// export default function ExperienceMenu(props: ExperienceMenuProps) {
// 	return (
// 		<Popover className='block'>
// 			<Popover.Button className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
// 				<span>Explore My Experience</span>
// 				<ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
// 			</Popover.Button>

// 			<Transition
// 				as={Fragment}
// 				enter='transition ease-out duration-200'
// 				enterFrom='opacity-0 '
// 				enterTo='opacity-100 '
// 				leave='transition ease-in duration-150'
// 				leaveFrom='opacity-100'
// 				leaveTo='opacity-0 '
// 			>
// 				<Popover.Panel className='left-1/2 z-10 mt-5 flex w-screen max-w-max px-4'>
// 					<div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5'>
// 						<div className='p-4'>
// 							{solutions.map((item) => (
// 								<div
// 									key={item.name}
// 									className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50'
// 								>
// 									<div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
// 										<item.icon
// 											className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
// 											aria-hidden='true'
// 										/>
// 									</div>
// 									<div>
// 										<Popover.Button>
// 											<a
// 												href={item.href}
// 												className='font-semibold text-gray-900'
// 												onClick={() =>
// 													props.setCurrentContent(
// 														item.key
// 													)
// 												}
// 											>
// 												{item.name}
// 												<span className='absolute inset-0' />
// 											</a>
// 											<p className='mt-1 text-gray-600'>
// 												{item.description}
// 											</p>
// 										</Popover.Button>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 						<div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
// 							{callsToAction.map((item) => (
// 								<a
// 									key={item.name}
// 									href={item.href}
// 									className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'
// 								>
// 									<item.icon
// 										className='h-5 w-5 flex-none text-gray-400'
// 										aria-hidden='true'
// 									/>
// 									{item.name}
// 								</a>
// 							))}
// 						</div>
// 					</div>
// 				</Popover.Panel>
// 			</Transition>
// 		</Popover>
// 	);
// }
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

// const people = [
// 	{
// 		id: 1,
// 		name: 'Currently Doing'
// 	},
// 	{
// 		id: 2,
// 		name: 'Full-Time Experience'
// 	},
// 	{
// 		id: 3,
// 		name: 'Internship Experience'
// 	},
// 	{
// 		id: 4,
// 		name: 'Teaching'
// 	},
// 	{
// 		id: 5,
// 		name: 'Education'
// 	}
// ];

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

type ExperienceMenuProps = {
	currentContent: { name: string };
	setCurrentContent: ({ string }) => void;
};

const people = [
	{ name: 'Currently Doing' },
	{ name: 'Full - Time Experience' },
	{ name: 'Internships' },
	{ name: 'Teaching' },
	{ name: 'Education' }
];

// type ExperienceMenuProps = {
// 	currentContent: string;
// 	setCurrentContent: (string) => void;
// };

export default function ExperienceMenu(props: ExperienceMenuProps) {
	// const a = { name: 'currently_doing' };
	console.log(people[0]);
	console.log(props.currentContent);
	const [selected, setSelected] = useState(people[0]);
	// const [selectedPers, setSelectedPers] = useState(props.currentContent);
	const { currentContent } = props;

	return (
		<div className='fixed top-16 w-72'>
			<Listbox value={selected} onChange={setSelected}>
				<div className='relative mt-1'>
					<Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
						<span className='block truncate'>ello`</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<ChevronUpDownIcon
								className='h-5 w-5 text-gray-400'
								aria-hidden='true'
							/>
						</span>
					</Listbox.Button>

					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
							{people.map((person, personIdx) => (
								<Listbox.Option
									key={personIdx}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active
												? 'bg-amber-100 text-amber-900'
												: 'text-gray-900'
										}`
									}
									value={person}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? 'font-medium'
														: 'font-normal'
												}`}
											>
												{person.name}
											</span>
											{selected ? (
												<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
													<CheckIcon
														className='h-5 w-5'
														aria-hidden='true'
													/>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
