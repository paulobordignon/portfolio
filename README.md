<p align="center">
  <img alt="paulobordignon-logo" alt="Paulo Bordignon Logo" src="public/logo.png" width="15" height="15"/>
  <span>Paulo Bordignon's Portfolio</span>
</p>

The purpose of this project is to create a personal website to introduce myself and show my projects to all people.

<br />

<strong> Architecture and decisions </strong>

The main objective was to create a portfolio using a different backend to manage the projects' list. I chose the Ethereum blockchain which offers us a decentralized, low-price, and transparent solution with data always available.

The [smart contract](https://zkevm.polygonscan.com/address/0x74f1E9980D91E516994E24BA0ed03F42b81b8F16) was built using Hardhat, Mocha, and Alchemy. It has functions to add projects, remove projects, and list projects. Inside this smart contract, there is a projects' array that can be manipulated only by the owner(contract deployer). The images of projects also are decentralized hosting using IPFS.

In the front-end is used the [atomic design methodology](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97) for creating the components, this improves a vision of how the interface and elements are connected promoving scalability.

Using React's Context API was built a global notification (inside each page) to always display the alert messages in the same place and always have only one alert displayed each time [[1]](#1).

If a non-owner of the contract tries to access the admin page, the [Next.js middleware](https://nextjs.org/docs/pages/building-your-application/routing/middleware) redirects the user to the home page (without flashing content). The admin user is verified through his connected wallet address.

For users to connect their wallet was used [Rainbowkit](https://www.rainbowkit.com/docs/introduction) a modern and open-source project. To always have the smart contract content and wallet connect available was used a private provider through Alchemy.

The private provider has costs because of this was implemented the [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) data fetching method to get the content only one time per day indifferent of quantity access. The ISR also optimizes the SEO of the website displaying all content in the first render.

<br />

<strong> Technologies </strong>

Next.js, Typescript, Solidity, Hardhat, Ethers, Alchemy, Rainbowkit, Mocha, Pinata, Ethereum, Framer Motion, IPFS, and others.

<br />

<strong> Requirements </strong>

1 - Run `yarn` to install the dependencies;

2 - Deploy the smart contract using Hardhat and Alchemy, see more information by accessing the contracts folder;

3 - Fill out environment variables;

4 - Run: `yarn dev`.

<br />

<strong> Next features </strong>

Create also a decentralized domain and use the most possible decentralized resources, like Fleek to host the website and others.

<br />

<strong> References </strong>

<a id="1">[1]</a>
de Carvalho, D. M. (2020).
[Handling global notifications with React's Context API.](https://sericaia.me/blog/2020-01-13/handling-global-notifications-with-react-s-context-api)
