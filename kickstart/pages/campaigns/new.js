import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Input, Message} from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3'; //get accounts
import { Router } from '../../routes';

class CampaignNew extends Component{
    //Event handling
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({loading: true, errorMessage: ''});

        const accounts = await web3.eth.getAccounts();

        try {
            await factory.methods.createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });
        
        Router.pushRoute('/');

        } catch (error) {
            this.setState({errorMessage: error.message});
        }

        

        this.setState({loading: false});

    };
    
    render(){
        return(
            <Layout>
            <h1>New Campaign</h1>

            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}> {/*empty string is falsy hence error = false, !! turns bool value of string to false */}
                <Form.Field>
                    <label>Minimum Contribution</label>
                    
                    <Input
                    label={'Wei'}
                    labelPosition='right'
                    value = {this.state.minimumContribution}
                    //Event Handler
                    onChange={(event) => this.setState({minimumContribution: event.target.value})}
  />
                </Form.Field>

                <Message error header = "oops!" content = {this.state.errorMessage}/>
                <Button loading={this.state.loading} type='primary'>Create!</Button>
            </Form>

            </Layout>
        )
    }
}

export default CampaignNew;