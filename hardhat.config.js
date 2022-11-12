// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "OmK7iiAfilAOyf3NpomapMW2zmw52cXY";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "";

module.exports = {
  // ...rest of your config...
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/OmK7iiAfilAOyf3NpomapMW2zmw52cXY`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};