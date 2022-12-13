import React from 'react';
import PropTypes from 'prop-types';
import Statis from './Statis';
import Stopwatch from './Stopwatch';

const Header = ({title}) => {
    return (
		<header>
			<Statis />
			<h1 className='title'>{title}</h1>
			<Stopwatch />
		</header>
    );
}

Header.propTypes = {
	title: PropTypes.string
}

Header.defaultProps = {  //给 props.title 一个default value 
	title: 'ScoreBoard'
}

export default Header;