import generateCMPTests from '../playwright/runner';

generateCMPTests('TrustArc-newcm', ['https://www.gwr.com/'], {
    testOptOut: true,
    testOptIn: false,
    testSelfTest: false,
});
