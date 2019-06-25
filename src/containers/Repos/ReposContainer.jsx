import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RepoList from './components/RepoList/RepoList';
import { fetchRepos } from './actions';
import { makeSelectRepos } from './selectors';
import { createStructuredSelector } from 'reselect';
import ReposContainerWrapper from './ReposContainerWrapper';

const ReposContainer = (props) => {
  const { fetchRepos } = props;
  const username = props.location.pathname.split('/')[1];
    useEffect(() => {
      fetchRepos(username);
  }, [fetchRepos]);
    return(
      <ReposContainerWrapper>
        <RepoList repos={props.repos}/>
      </ReposContainerWrapper>
    )
  
} 

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
});

const mapDispatchToProps = dispatch => {
  return { 
    fetchRepos: (username) => dispatch(fetchRepos(username)) 
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ReposContainer);
