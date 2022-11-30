<p align="center">
  <img alt="paulobordignon-logo" alt="Paulo Bordignon Logo" src="public/logo.png" width="15" height="15"/>
  <span>Paulo Bordignon's Portfolio</span>
</p>

The purpose of this project is to create a personal website to introduce myself and show my projects to all people.

<br />

<strong> Architecture and decisions </strong>

The main objective was to create a portfolio using a different backend to manage the projects' list. I chose the Ethereum blockchain that offers us a decentralized, free, and transparent solution with data always available.

The [smart contract](https://goerli.etherscan.io/address/0xF37c5dFe3c7700F25EAaAdcD1debB5308a0F350e) was built using Hardhat, Jest, and Alchemy. It has functions to add projects, remove projects, and list projects. Inside of smart contract, there is an array of projects that allow us to manipulate the data, and also only the owner can manipulate the data (contract deployer). The images of projects also are decentralized hosting using IPFS.

In the front-end is used atomic design methodology is for creating the components, this improves a vision of how the interface and elements are connected.

Using React's Context API was built a global notification (inside each page) to always display the alert messages in the same place and always have only one alert displayed each time [[1]](#1).

Because of an admin page to manage the smart contract, it was used a route guard provider to redirect the user to the home page (without flashing content) if it isn't an admin user [[2]](#2). Admin user is verified through his wallet address.

For users to connect their wallet was used [Rainbowkit](https://www.rainbowkit.com/docs/introduction) a modern and open-source project. To always have the smart contract content and wallet connect available was used a private provider through Alchemy.

The private provider has costs because of this was implemented the [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) data fetching method to get the content only one time per day indifferent of quantity access. The ISR also optimizes the SEO of the website displaying all content in the first render.

<br />

<strong> Technologies </strong>

Next.js, Typescript, Solidity, Hardhat, Ethers, Alchemy, Rainbowkit, Jest, Pinata, Ethereum, Framer Motion, IPFS, and others.

<br />

<strong> Requirements </strong>

1 - Run: `yarn`;

2 - Deploy the smart contract using Hardhat and Alchemy;

3 - Fill out environment variables;

4 - Run: `yarn dev`.

<br />

<strong> Next features </strong>

Create also a decentralized domain and use the most possible decentralized resources, like fleek to host the website and others.

<br />

<strong> References </strong>

<a id="1">[1]</a>
de Carvalho, D. M. (2020).
[Handling global notifications with React's Context API.](https://sericaia.me/blog/2020-01-13/handling-global-notifications-with-react-s-context-api)

<a id="2">[2]</a>
Clarence, T. (2021).
[Next.js Redirect Without Flashing Content.](https://theodorusclarence.com/blog/nextjs-redirect-no-flashing)
