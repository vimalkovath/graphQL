import React ,{Component} from 'react';
import {graphql} from 'react-apollo'
import currentUser from '../queries/CurrentUser'
import {hashHistory} from 'react-router';

export default (WrappedComponent)=>{
class RequireAuth extends Component {
    componentWillUpdate(){
                console.log(!this.props.data.loading && !this.props.data.user);
if(!this.props.data.loading && !this.props.data.user)
    {

hashHistory.push('/login');
    }  
  }

  render(){
      return<WrappedComponent {...this.props}/>;
  }

}

return graphql(currentUser)(RequireAuth);
}