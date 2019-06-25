// ./src/components/ToDo.js

import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import UserWrapper from './UserWrapper';


const User = (user : {login: string}) => <UserWrapper><Link to={`/${user.login}/repos`}> <ListGroup.Item>{user.login}</ListGroup.Item></Link></UserWrapper>;


export default User;