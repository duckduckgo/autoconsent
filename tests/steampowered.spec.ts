import generateCMPTests from "./runner";

generateCMPTests('steampowered.com', [
    'https://store.steampowered.com'], {
        skipRegions: ["US"]
    }
);
