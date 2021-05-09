pragma solidity ^0.4.17;

contract Lottery {
    
    address public manager;
    address[] public player;
    
    
    function Lottery() public {
        manager = msg.sender;
    }
    
    function enter() public payable{
        require(msg.value > .01 ether);
        
        
        player.push(msg.sender);
    }
    
}