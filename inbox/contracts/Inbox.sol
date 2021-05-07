pragma solidity ^0.4.17;

contract Inbox{
    string public message;

    function Inbox(string initialMessage) public { //Constructor
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}