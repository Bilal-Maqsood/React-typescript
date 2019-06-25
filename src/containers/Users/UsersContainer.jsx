import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserList from './components/UserList/UserList';
import { fetchUsers } from './actions';
import { makeSelectUsers } from './selectors';
import  UserContainerWrapper  from './UserContainerWrapper';  


const UsersContainer = (props) => {
  const { fetchUsers } = props;
    useEffect(() => {
      fetchUsers();
  }, [fetchUsers]);
    return(
      <UserContainerWrapper>
        <UserList users={props.users}/>
      </UserContainerWrapper>
    )  
} 

const mapStateToProps = createStructuredSelector({
   users: makeSelectUsers(),
});

const mapDispatchToProps = (dispatch) => {
  return { 
    fetchUsers: () => dispatch(fetchUsers()) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);