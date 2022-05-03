import generateCMPTests from "./runner";

generateCMPTests('national-lottery.co.uk', [
    'https://national-lottery.co.uk'], {
        skipRegions: ["US", "FR", "DE"]
    }
);
