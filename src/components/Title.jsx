const Title = ({ text }) => {
	return (
		<div className='grid grid-cols-1 place-items-start'>
			<h1 className='text-3xl lg:text-6xl font-bold text-black text-center flex justify-center gap-x-6'>
				<span className='w-6 lg:w-10 h-6 lg:h-10 lg:self-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='41'
						fill='none'
						viewBox='0 0 40 41'
					>
						<path
							fill='#AD28EB'
							d='M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z'
						/>
					</svg>
				</span>
				{text}
			</h1>
		</div>
	);
};

export default Title;
