import generateCMPTests from "./runner";

generateCMPTests('motor-talk.de', [
    'https://motor-talk.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
