import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ProfileScreen from './pages/profileScreen';

function App() {
	return (
		<>
			<Navbar />
			<ProfileScreen
				profileImage={
					' https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
				}
				userName={'billy roy'}
				occupation={'software engineer'}
				country={'nigeria'}
				bio={'my name is billy roy'}
			/>
		</>
	);
}

export default App;
