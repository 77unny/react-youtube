import React from 'react';
import PropTypes from 'prop-types';
import Details from '../components/Details';

Detail.propTypes = {
	match: PropTypes.object
};

function Detail({match}) {
	return (
		<div>
			<Details id={match.params.id}/>
		</div>
	);
}

export default Detail;