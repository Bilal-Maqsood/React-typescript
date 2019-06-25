import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import User from './User';

const UserList = ({ users }) => (
  <Jumbotron>
    <ListGroup>
      {users.map((toDo, index) => (
       <User key={index} {...toDo} />
      ))}
    </ListGroup>
  </Jumbotron>
);

export default UserList;