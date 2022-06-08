import generateCMPTests from "./runner";

generateCMPTests('waitrose.com', [
    'https://waitrose.com'], {
        skipRegions: ["US","FR","DE"]
    }
);
