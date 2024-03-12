const yargs = require("yargs");
const {
  initiateDeveloperControlledWalletsClient,
} = require("@circle-fin/developer-controlled-wallets");

require("dotenv").config();

const circleDeveloperSDK = initiateDeveloperControlledWalletsClient({
  apiKey: process.env.API_KEY,
  entitySecret: process.env.ENTITY_SECRET,
});

// Step 4 - Create a Wallet Set
async function createNewWalletSet() {}

// Step 5 - Create Developer-Controlled Wallets
async function createWallets() {}

// Step 6 - Fetch Wallets
async function fetchWallets() {}

// Step 7 - Fetch Token Balance of Wallet
async function fetchWalletBalance() {}

// Step 8 - Execute Outbound Transfer
async function executeTransfer() {}

// Step 9 - Check Transaction Status
async function checkTransactionStatus() {}

yargs
  .scriptName("dev_wallet")
  .usage("$0 <cmd> [args]")

  .command(
    "create-wallet-set",
    "Create a new wallet set",
    () => {},
    (argv) => {
      createNewWalletSet();
    }
  )

  .command(
    "create-wallets",
    "Create wallets",
    () => {},
    (argv) => {
      createWallets();
    }
  )

  .command(
    "list-wallets",
    "List wallets under the wallet set",
    () => {},
    (argv) => {
      fetchWallets();
    }
  )

  .command(
    "get-token-balance",
    "Fetch token balance of a wallet",
    () => {},
    (argv) => {
      fetchWalletBalance();
    }
  )

  .command(
    "execute-transfer",
    "Execute outbound USDC transfer",
    () => {},
    (argv) => {
      executeTransfer();
    }
  )

  .command(
    "check-txn-status",
    "Check transaction status",
    () => {},
    (argv) => {
      checkTransactionStatus();
    }
  )

  .help().argv;
