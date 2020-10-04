import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Details from '../components/Details';

Detail.propTypes = {
	match: PropTypes.object
};

function Detail({match}) {
	const [popularItems, setPopularItems] = useState()
	useEffect(()=>{
		const getStorageData = JSON.parse(localStorage.getItem('popular_data'))
		setPopularItems(getStorageData.items)
	},[])
	return (
		<div>
			{popularItems && <Details id={match.params.id} popularItems={popularItems}/>}
		</div>
	);
}

export default Detail;