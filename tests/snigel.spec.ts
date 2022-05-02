import generateCMPTests from "./runner";

generateCMPTests('snigel', [
    'https://w3schools.com'], {
        skipRegions: ["US"]
    }
);
