import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

List.propTypes = {
	items: PropTypes.array.isRequired
};

function List({items}) {
	console.log(items)
	return (
		<ItemList>
			{items.map((item) => {
				const {id, snippet} = item;
				const {title, thumbnails} = snippet;
				return (
					<Item key={id}>
						<Link href={`/Detail/${id}`}>
							<Thumbnail><img src={thumbnails.standard.url} alt={title}/></Thumbnail>
							<Title>{title}</Title>
						</Link>
					</Item>
				)
			})}
		</ItemList>
	);
}

export default List;

const ItemList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-left: -10px;
`
const Item = styled.li`
	width: 25%;
	padding-left: 10px;
`
const Link = styled.a`
	display:block;
`
const Thumbnail = styled.div`
	img {
		max-width: 100%
	}
`
const Title = styled.div`
	font-size: 1.2rem;
`