import generateCMPTests from "./runner";

generateCMPTests('uswitch.com', [
    'https://uswitch.com'], {
        skipRegions: ["US", "FR", "DE"]
    }
);
