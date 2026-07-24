import generateCMPTests from '../playwright/runner';

generateCMPTests('TrustArc-newcm', ['https://www.gwr.com/', 'https://www.wish.com/', 'https://www.usa.philips.com/'], {
    testOptOut: true,
    testOptIn: false,
    testSelfTest: false,
});
