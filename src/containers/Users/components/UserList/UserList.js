import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import User from '../User/User';
import UserListWrapper from './UserListWrapper';

const UserList = ({users}) => (
  <UserListWrapper>
    <Jumbotron>
      <ListGroup>
        {users.map((user,index) => (
        <User key={index} {...user} />
        ))}
      </ListGroup>
    </Jumbotron>
  </UserListWrapper>
);

export default UserList;