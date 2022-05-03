import generateCMPTests from "./runner";

generateCMPTests('gov.uk', [
    'https://gov.uk'], {
        skipRegions: ["US", "FR", "DE"]
    }
);
