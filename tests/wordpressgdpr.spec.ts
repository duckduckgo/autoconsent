import generateCMPTests from "./runner";

generateCMPTests('com_wordpressgdpr', [
    'https://www.yourpension.gov.uk/',
], {
    testOptOut: false,
    testSelfTest: false,
});