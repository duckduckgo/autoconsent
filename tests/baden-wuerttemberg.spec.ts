import generateCMPTests from "./runner";

generateCMPTests('baden-wuerttemberg.de', [
    'https://baden-wuerttemberg.de'], {
        skipRegions: ["US"]
    }
);
