pragma solidity ^0.4.17;

contract CampaignFactory{
    
     address[] public deployedCampaigns;
       
    
    function createCampaign(uint minimum) public {
       
    address newCampaign = new Campaign(minimum, msg.sender); //Send the person calling address, else the default would be the factory address
    deployedCampaigns.push(newCampaign);
        
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
    
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        
        mapping(address=>bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers; //map wallet address to a boolean
    uint public approversCount; //number of contributors to the Campaign
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor (uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
        
    }
    
    function contribute() public payable{
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true; 
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted{
        
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
        
    }
    
    function approveRequest(uint index) public {
        
        Request storage request = requests[index];
        
        require(approvers[msg.sender]); //check if person has donated
        require(!request.approvals[msg.sender]); //check if person has not voted
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!requests[index].complete); //ensure request is not completed. require true to move on from line. if true will flip to false and code fails.
        request.recipient.transfer(request.value);
        
        requests[index].complete = true;
            
    }

    function getSummary() public view returns (uint, uint, uint, uint, address) {
        return(
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint){
        return requests.length;
    }


    
    
}