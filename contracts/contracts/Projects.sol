// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Projects {

  struct Project {
    uint id;
    address owner;
    string image;
    string title;
    string about;
    string[] keywords;
    string github;
    string website;
  }

  Project[] myProjects;

  uint private projectId;

  address payable private ownerAddress;

  constructor ()  {
    ownerAddress = payable(msg.sender);
  }

  error OnlyOwner();

  modifier onlyOwner {
    if (payable(msg.sender) != ownerAddress) {
      revert OnlyOwner();
    }
    _;
  }

  function selfDestruct()
    external
    onlyOwner
  {
    selfdestruct(ownerAddress);
  }

  function addProject(
    string memory _image,
    string memory _title,
    string memory _about,
    string[] memory _keywords,
    string memory _github,
    string memory _website
  ) external onlyOwner {

    uint _id = projectId++;

    myProjects.push(Project(
      _id,
      msg.sender,
      _image,
      _title,
      _about,
      _keywords,
      _github,
      _website
    ));
  }

  function removeProject(
    uint _index
  ) external onlyOwner {
    // In Solidity when you delete an element from an array, the array length is the same as before.
    // To avoid it, we move the element to the last position and then remove it
    for(uint i = _index; i < myProjects.length-1; i++){
      myProjects[i] = myProjects[i+1];      
    }
    myProjects.pop();
  }

  function getAllProjects() public view returns (Project[] memory) {
    return myProjects;
  }
}
