import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
	items: PropTypes.array.isRequired
};

function List({items}) {
	console.log(items)
	return (
		<ul>
			{items.map((item) => {
				const {id, snippet} = item;
				const {title, description, thumbnails} = snippet;
				return (
					<li key={id}>
						<dl>
							<dt><img src={thumbnails.medium.url} alt={description}/></dt>
							<dd>{title}</dd>
							<dd>{description}</dd>
						</dl>
					</li>
				)
			})}
		</ul>
	);
}

export default List;