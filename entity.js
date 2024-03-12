const yargs = require("yargs");
const {
  initiateDeveloperControlledWalletsClient,
} = require("@circle-fin/developer-controlled-wallets");

require("dotenv").config();
const forge = require("node-forge");

// Step 1 - Generate Entity Secret
function createEntity() {}

const circleDeveloperSDK = initiateDeveloperControlledWalletsClient({
  apiKey: process.env.API_KEY,
  entitySecret: process.env.ENTITY_SECRET,
});

// Step 2 - Fetch Public Key
async function fetchPublicKey() {}

// Step 3 - Generate Entity Secret Ciphertext
async function createEntitySecretCipher() {}

yargs
  .scriptName("entity_secret")
  .usage("$0 <cmd> [args]")

  .command(
    "create-entity",
    "Create Entity Secret",
    () => {},
    (argv) => {
      createEntity();
    }
  )

  .command(
    "fetch-public-key",
    "Fetch Entity Public Key",
    () => {},
    (argv) => {
      fetchPublicKey();
    }
  )

  .command(
    "create-entity-secret-cipher",
    "Create Entity Secret Ciphertext",
    () => {},
    (argv) => {
      createEntitySecretCipher();
    }
  )

  .help().argv;
