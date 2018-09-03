import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import currentUser from '../queries/CurrentUser';


export default(WrappedComponent) => {
  
  class RequireAuth extends Component {
    componentDidUpdate() {
      if (!this.props.data.user && !this.props.data.loading) {
        hashHistory.push('/login')
      }

    }
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }


  return graphql(currentUser)(RequireAuth);
}
