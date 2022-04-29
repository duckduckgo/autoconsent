import generateCMPTests from "./runner";

generateCMPTests('hl.co.uk', [
    'https://hl.co.uk'], {
        skipRegions: ["US", "DE", "GB"]
    }
);
