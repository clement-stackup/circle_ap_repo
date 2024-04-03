const { Web3 } = require("web3");
const yargs = require("yargs");
const axios = require("axios");

const {
  initiateDeveloperControlledWalletsClient,
} = require("@circle-fin/developer-controlled-wallets");

require("dotenv").config();

const circleDeveloperSDK = initiateDeveloperControlledWalletsClient({
  apiKey: process.env.API_KEY,
  entitySecret: process.env.ENTITY_SECRET,
});

//Step 1 - Create Developer-Controlled Wallet on Polygon Amoy
async function createNewWallet() {}

// Step 2 - Authorise USDC Contract on Ethereum Sepolia
async function authoriseContract() {}

const web3 = new Web3();

// Step 3 - Enter Destination Wallet Address on Polygon Amoy
const destinationAddress = "REPLACE WITH YOUR WALLET ADDRESS ON POLYGON AMOY";

const encoded_destinationAddress = web3.eth.abi.encodeParameter(
  "address",
  destinationAddress
);

// Step 4 - Burn USDC on Ethereum Sepolia
async function burnUSDC() {}

// Step 5 - Fetch Burn Attestation
async function fetchBurnAttestation() {}

// Step 6 - Mint USDC on Polygon Amoy
async function mintUSDC() {}

// Step 7 - Fetch Mint Transaction
async function fetchMintTxn() {
  let response = await circleDeveloperSDK.getTransaction({
    id: "REPLACE WITH TRANSACTION ID OF MINT TRANSACTION",
  });

  console.log(response.data);
}

yargs
  .scriptName("smart_contract")
  .usage("$0 <cmd> [args]")

  .command(
    "create-wallet-polygon",
    "Create SCA Wallet on Polygon Mumbai",
    () => {},
    (argv) => {
      createNewWallet();
    }
  )

  .command(
    "approve-USDC",
    "Appove Token Messenger Contract",
    () => {},
    (argv) => {
      authoriseContract();
    }
  )

  .command(
    "burn-USDC",
    "Burn USDC on Ethereum Sepolia",
    () => {},
    (argv) => {
      burnUSDC();
    }
  )

  .command(
    "fetch-burn-attestation",
    "Fetch Burn Attestation",
    () => {},
    (argv) => {
      fetchBurnAttestation();
    }
  )

  .command(
    "mint-USDC",
    "Mint USDC on Destination",
    () => {},
    (argv) => {
      mintUSDC();
    }
  )

  .command(
    "fetch-mint-txn",
    "Fetch Mint Transaction",
    () => {},
    (argv) => {
      fetchMintTxn();
    }
  )

  .help().argv;
