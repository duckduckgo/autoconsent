import generateCMPTests from "./runner";

generateCMPTests('dunelm.com', [
    'https://dunelm.com'], {
        skipRegions: ["US", "FR", "DE"]
    }
);
