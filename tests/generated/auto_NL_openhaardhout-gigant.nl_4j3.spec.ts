import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_openhaardhout-gigant.nl_4j3', ['https://www.openhaardhout-gigant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
