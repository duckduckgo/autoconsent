import generateCMPTests from "./runner";

generateCMPTests('johnlewis.com', [
    'https://johnlewis.com'], {
        skipRegions: ["US", "DE", "GB"]
    }
);
