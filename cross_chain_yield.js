const { Web3 } = require("web3");
const yargs = require("yargs");
const axios = require("axios");

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

// Step 1 - Fetch Supply Rate of USDC on Ethereum Sepolia
async function getSupplyRate() {}

// Step 2 - Approve Token Messenger Contract on Polygon Amoy
async function authoriseContract() {}

const web3 = new Web3();

// Step 3 - Enter Destination Address on Ethereum Sepolia
const destinationAddress = "REPLACE WITH WALLET ADDRESS ON ETHEREUM SEPOLIA";

const encoded_destinationAddress = web3.eth.abi.encodeParameter(
  "address",
  destinationAddress
);

// Step 4 - Burn USDC on Polygon Amoy
async function burnUSDC() {}

// Step 5 - Fetch Burn Attestation
async function fetchBurnAttestation() {}

// Step 6 - Mint USDC on Ethereum Sepolia
async function mintUSDC() {}

// Step 7 - Approve Aave V3 USDC Contract
async function approveAaveUSDC() {}

// Step 8 - Supply USDC to Aave V3
async function supplyUSDC() {}

yargs
  .scriptName("cross_chain_yield")
  .usage("$0 <cmd> [args]")

  .command(
    "fetch-supply-rate",
    "Fetch Supply Rate of USDC on Aave",
    () => {},
    (argv) => {
      getSupplyRate();
    }
  )

  .command(
    "approve-USDC",
    "Approve Token Messenger Contract on Polygon Amoy",
    () => {},
    (argv) => {
      authoriseContract();
    }
  )

  .command(
    "burn-USDC",
    "Burn USDC on Polygon Amoy",
    () => {},
    (argv) => {
      burnUSDC();
    }
  )

  .command(
    "fetch-burn-attestation",
    "Fetch Burn Attestation on Polygon Amoy",
    () => {},
    (argv) => {
      fetchBurnAttestation();
    }
  )

  .command(
    "mint-USDC",
    "Mint USDC on Ethereum Sepolia",
    () => {},
    (argv) => {
      mintUSDC();
    }
  )

  .command(
    "approve-aave-USDC",
    "Approve Aave USDC Contract",
    () => {},
    (argv) => {
      approveAaveUSDC();
    }
  )

  .command(
    "supply-USDC",
    "Supply USDC to Aave Lending Pool",
    () => {},
    (argv) => {
      supplyUSDC();
    }
  )

  .help().argv;
