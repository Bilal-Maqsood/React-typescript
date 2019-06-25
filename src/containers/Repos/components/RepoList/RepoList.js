import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Repo from '../Repo/Repo';
import RepoListWrapper from './RepoListWrapper';

const RepoList = ({repos}) => (
  <RepoListWrapper>
    <Jumbotron>
      <ListGroup>
        {repos.map((repo, index) => (
          <Repo key={index} {...repo} />
        ))}
      </ListGroup>
    </Jumbotron>
  </RepoListWrapper>
);


export default RepoList;