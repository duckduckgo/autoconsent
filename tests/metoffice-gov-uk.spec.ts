import generateCMPTests from "./runner";

generateCMPTests('metoffice.gov.uk', [
    'https://metoffice.gov.uk'], {
        skipRegions: ["US", "DE", "GB"]
    }
);
