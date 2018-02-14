import React,{Component} from 'react';
import AuthForm from './AuthForm';
import LoginMutation from '../mutations/Login'
import {graphql} from 'react-apollo';
import {hashHistory} from 'react-router';

import query from '../queries/CurrentUser';

class LoginForm extends Component{

constructor(props)
{
    super(props);
    this.state={errors:[]};
}

componentWillUpdate(nextProps){

    //this.props //the old current set of props
    //nextProps
if(!this.props.data.user && nextProps.data.user){//redirect to dashbpard
    hashHistory.push('/dashboard');
}

console.log(this.props,nextProps);
}

onSubmit({email,password}){
    console.log(email,password);
                            this.props.mutate({
                            variables:{ email,password },
                            refetchQueries:[{query}]
                            }).catch(res=>{
                                const errors=res.graphQLErrors.map(error=>error.message);
                        this.setState({errors});    
                        });
                           }

    render(){
        return(
            <div>
                <AuthForm
                onSubmit={this.onSubmit.bind(this)}
                errors={this.state.errors}
                />  
            </div>

        );
    }
}

90
export default graphql(query)(
  graphql (LoginMutation) (LoginForm)
);