import generateCMPTests from "./runner";

generateCMPTests('otto.de', [
    'https://otto.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
