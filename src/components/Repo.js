// ./src/components/ToDo.js

import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Repo = ({ url }) => <ListGroup.Item>{url}</ListGroup.Item>;

Repo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Repo;