import React from 'react';
import List from '../components/List';
import useStorage from '../hooks/useStorage';

function Home() {
	const data = useStorage('popular_data', 24)
	return (
		<div>
			{data && <List items={data.items}/>}
		</div>
	);
}

export default Home;