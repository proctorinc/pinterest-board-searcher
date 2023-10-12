import get_auth_code from "./pinterest_api/user_auth.js";
import { Board } from "./pinterest_api/board.js";
import { Scope } from "./pinterest_api/oath_scope.js";
import { ApiConfig } from "./pinterest_api/api_config.js";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("Opening pinterest auth...");
  const read_scopes = [Scope.READ_USERS, Scope.READ_PINS];
  const api_config = new ApiConfig({ verbosity: 3 });
  const auth_code = await get_auth_code(api_config, {
    scopes: read_scopes,
    refreshable: true,
  });
}

await main();
