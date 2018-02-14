import React ,{Component} from 'react'
import AuthForm from './AuthForm';
import SignupMutation from '../mutations/signup';
import {graphql} from 'react-apollo'
import query from '../queries/CurrentUser';
import {hashHistory} from 'react-router';

class SignupForm extends Component{

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
        return (<div><h3>Sign up</h3>
            <AuthForm
               errors={this.state.errors}
            onSubmit={this.onSubmit.bind(this)}
            />
        </div>);
    }
}

export default graphql(query)(graphql(SignupMutation) (SignupForm));