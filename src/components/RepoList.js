import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Repo from './Repo';

const RepoList = ({ repos }) => (
  <Jumbotron>
    <ListGroup>
      {repos.map((repo, index) => (
        <Repo key={index} {...repo} />
      ))}
    </ListGroup>
  </Jumbotron>
);


export default RepoList;