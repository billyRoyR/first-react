import React from 'react';

const ProfileScreen = ({
	profileImage,
	userName,
	occupation,
	country,
	bio,
}) => {
	const jobHistory = [
		{
			title: 'Microsoft',
			descriptions:
				'worked has a software engineer for 2 years, redesigning UIs and implement APIs',
			historyImage:
				'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
		},
		{
			title: 'FaceBook',
			descriptions:
				'worked has a software engineer for 2 years, redesigning UIs and implement APIs',
			historyImage:
				'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
		},
		{
			title: 'Microsoft',
			descriptions:
				'worked has a software engineer for 2 years, redesigning UIs and implement APIs',
			historyImage:
				'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
		},
		{
			title: 'Microsoft',
			descriptions:
				'worked has a software engineer for 2 years, redesigning UIs and implement APIs',
			historyImage:
				'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
		},
		{
			title: 'Microsoft',
			descriptions:
				'worked has a software engineer for 2 years, redesigning UIs and implement APIs',
			historyImage:
				'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
		},
	];
	return (
		<div className='profileContainer'>
			<div className='profileWrapper'>
				<div className='coverImage'>
					<div className='profileView'>
						<img src={profileImage} alt='profile' className='profileImage' />
						<div className='nameContainer'>
							<span
								style={{
									fontWeight: '600',
									color: 'white',
									textTransform: 'capitalize',
								}}
							>
								{userName}
							</span>
							<span className='onlineIndicator'></span>
						</div>
						<div className='occupationCountry'>
							<span> {occupation} </span>|<span> {country} </span>
						</div>
					</div>
				</div>
			</div>
			<div className='BioProfileView'>
				<span style={{ fontWeight: '600' }}>Bio</span>
				<span className='bioContent'>{bio}</span>
			</div>
			<div className='hrLine'></div>
			<div className='profileView'>
				<span style={{ fontWeight: '600' }}>Job History</span>
				<div className='boxFlex'>
					{jobHistory.map((item, index) => (
						<div
							key={index}
							className='overViews'
							style={{
								backgroundImage: `linear-gradient(#0000003e, #0000003e),url(${item.historyImage})`,
							}}
						>
							<span className='title'>{item.title}</span>
							<span className='descriptions'>{item.descriptions}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
