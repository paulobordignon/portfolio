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

  error OnlyMe();

  modifier onlyMe {
    if (msg.sender != 0x6585d1ba166aeBF1e6A88f816e3024BF324D21ad) {
      revert OnlyMe();
    }
    _;
  }

  function addProject(
    string memory _image,
    string memory _title,
    string memory _about,
    string[] memory _keywords,
    string memory _github,
    string memory _website
  ) external onlyMe {

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

  function getAllProjects() public view returns (Project[] memory) {
    return myProjects;
  }
}
