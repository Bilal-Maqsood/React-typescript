// ./src/components/ToDo.js

import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import RepoWrapper from './RepoWrapper'

const Repo = (repo : {html_url: string}) => <RepoWrapper><a href={repo.html_url} target='blank'><ListGroup.Item>{repo.html_url}</ListGroup.Item></a></RepoWrapper>;

Repo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Repo;