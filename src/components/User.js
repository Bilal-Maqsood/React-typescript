// ./src/components/ToDo.js

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';


const User = ({ login }) =><Link to={`/${login}/repos`}> <ListGroup.Item>{login}</ListGroup.Item></Link>;

User.propTypes = {
  login: PropTypes.string.isRequired
};

export default User;