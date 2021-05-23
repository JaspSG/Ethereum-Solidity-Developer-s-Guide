import React, {Component} from 'react';
import factory from '../ethereum/factory';
import {Card} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import Layout from '../components/Layout';

import 'semantic-ui-css/semantic.min.css'

class CampaignIndex extends Component{
        //Data loading
        
        static async getInitialProps() {
            const campaigns = await factory.methods.getDeployedCampaigns().call();

            //CampaignIndex now has access to props of campaigns
            return {campaigns:campaigns};
        }
        
        //custom function but follow code format of semantic-ui
        renderCampaigns(){
            const items = this.props.campaigns.map(address => {
              return {
                  //semantic UI
                  header: address,
                  description: <a>View Campaign</a>,
                  fluid: true
              }  
            });

            return <Card.Group items = {items} />
        }
        
        render(){
            return(
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    {this.renderCampaigns()}
                    <Button content='Create Campaign' icon='add circle' primary />
                </div>
            </Layout> 
            );
        };
    
}

export default CampaignIndex;