const yargs = require("yargs");
const {
  initiateSmartContractPlatformClient,
} = require("@circle-fin/smart-contract-platform");
const {
  initiateDeveloperControlledWalletsClient,
} = require("@circle-fin/developer-controlled-wallets");

require("dotenv").config();

const circleContractSDK = initiateSmartContractPlatformClient({
  apiKey: process.env.API_KEY,
  entitySecret: process.env.ENTITY_SECRET,
});

const circleDeveloperSDK = initiateDeveloperControlledWalletsClient({
  apiKey: process.env.API_KEY,
  entitySecret: process.env.ENTITY_SECRET,
});

//Step 1 - Deploy Counter Contract
async function deployCounterContract() {}

//Step 2 - Retrieve Count Value
async function getCount() {}

//Step 3 - Increment Count Value
async function increment() {}

//Step 4 - Check Transaction Status
async function checkTransactionStatus() {}

//Step 5 - Deploy NFT Contract
async function deployNFTContract() {}

// Step 6 - Mint NFT
async function mintNFT() {}

yargs
  .scriptName("smart_contract")
  .usage("$0 <cmd> [args]")

  .command(
    "deploy-contract",
    "Deploy Smart Contract",
    () => {},
    (argv) => {
      deployCounterContract();
    }
  )

  .command(
    "get-count",
    "Get current count of contract",
    () => {},
    (argv) => {
      getCount();
    }
  )

  .command(
    "increment-count",
    "Increment count in smart contract",
    () => {},
    (argv) => {
      increment();
    }
  )

  .command(
    "get-txn-status",
    "Get status of transaction",
    () => {},
    (argv) => {
      checkTransactionStatus();
    }
  )

  .command(
    "deploy-nft-contract",
    "Deploy NFT Template Contract",
    () => {},
    (argv) => {
      deployNFTContract();
    }
  )

  .command(
    "mint-nft",
    "Mint NFT to Wallet",
    () => {},
    (argv) => {
      mintNFT();
    }
  )

  .help().argv;
