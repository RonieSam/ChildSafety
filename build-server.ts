// This script bundles server.ts into dist-server/server.js for production
import { execSync } from "child_process";
import { mkdirSync } from "fs";

mkdirSync("dist-server", { recursive: true });

execSync(
  `npx esbuild server.ts --bundle --platform=node --target=node18 --outfile=dist-server/server.js --external:better-sqlite3 --external:bcryptjs --external:express --external:jsonwebtoken --external:multer --external:cors --external:@google/genai`,
  { stdio: "inherit" }
);

console.log("Server bundled to dist-server/server.js");
