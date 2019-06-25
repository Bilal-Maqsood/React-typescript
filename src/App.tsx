import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ReposContainer from './containers/Repos/ReposContainer';
import UsersContainer from './containers/Users/UsersContainer';

import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

  
  const App = () => {
      return (
        <Container>
          <Row className="row">
            <Col xs={12}>
              <h1>My Nomisma Task</h1>
              <Navigation />
              <Route exact path="/" component={UsersContainer} />
              <Route exact path="/:username/repos" component={ReposContainer} />
            </Col>
          </Row>
        </Container>
      );
  }
  export default App;