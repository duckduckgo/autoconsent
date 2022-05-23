import generateCMPTests from "../playwright/runner";

generateCMPTests('johnlewis.com', [
    'https://johnlewis.com'], {
        skipRegions: ["US", "DE", "GB"]
    }
);
