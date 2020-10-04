import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

Layout.propTypes = {
	children: PropTypes.object.isRequired
};

function Layout({children}) {
	return (
		<Container>{children}</Container>
	);
}

export default Layout;

const Container = styled.div`
	padding: 5px 5%;
`