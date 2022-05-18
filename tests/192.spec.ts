import generateCMPTests from "./runner";

generateCMPTests('192.com', [
    'https://192.com'], {
        skipRegions: ["US", "FR", "DE"]
    }
);
