import generateCMPTests from "./runner";

generateCMPTests('nhs.uk', [
    'https://nhs.uk'], {
        skipRegions: ["US", "DE", "GB"]
    }
);
