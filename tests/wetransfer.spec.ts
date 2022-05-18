import generateCMPTests from "./runner";

generateCMPTests('wetransfer.com', [
    'https://wetransfer.com'], {
        skipRegions: ["US", "FR", "DE"]
    }
);
