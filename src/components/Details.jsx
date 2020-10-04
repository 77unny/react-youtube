import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from './List';

Details.propTypes = {
	id          : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	popularItems: PropTypes.array.isRequired
};

function Details({id, popularItems}) {
	return (
		<Container>
			<Contents>
				<Video>
					<iframe id="ytplayer" type="text/html" width="720" height="405"
					        src={`https://www.youtube.com/embed/${id}`}
					        title="youtube player"
					        frameBorder="0" allowFullScreen/>
				</Video>
			</Contents>
			<SidePanel>
				<List items={popularItems} type={'sidepanel'}/>
			</SidePanel>
		</Container>
	);
}

export default Details;

const Container = styled.div`
	display: flex;
`
const Contents = styled.div`
	width: 70%;
	padding-right: 20px;
`
const SidePanel = styled.div`
	width: 30%;
`
const Video = styled.div`
	position: relative;;
	padding-top:56.25%;
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`