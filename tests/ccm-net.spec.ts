import generateCMPTests from '../playwright/runner';

generateCMPTests('ccm-net', ['https://es.ccm.net/', 'https://de.ccm.net/', 'https://it.ccm.net/'], {
    testOptIn: false,
    testSelfTest: false,
    skipRegions: ['US'],
});
