import generateCMPTests from "../playwright/runner";

generateCMPTests('com_wordpressgdpr', [
    'https://www.yourpension.gov.uk/',
], {
    testOptOut: false,
    testOptIn: false,
    testSelfTest: false,
});