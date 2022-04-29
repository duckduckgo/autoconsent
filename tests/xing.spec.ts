import generateCMPTests from "./runner";

generateCMPTests('xing.com', [
    'https://www.xing.com/start/signup'], {
        skipRegions: ["US", "FR", "DE"],
        testSelfTest: false
    }
);
