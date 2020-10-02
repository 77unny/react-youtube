import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoSvg from './LogoSvg';
import SearchSvg from './SearchSvg';

Header.propTypes = {};

function Header(props) {
	return (
		<Container>
			<LogoSvg color="#fff"/>
			<Form>
				<Input type="text"/>
				<Button><SearchSvg/></Button>
			</Form>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 5%;
	background: #000;
`
const Form = styled.form`
	display: flex;
	width: 100%;
	padding-left: 20px;
`
const Input = styled.input`
	width: calc(100% - 50px);
	font-size:2rem;
`
const Button = styled.button`
	width: 50px;
	height: 50px;
	outline: none;
	border: none;
	border-radius: 0 10px 10px 0;
	cursor: pointer;
	background: #333;
`