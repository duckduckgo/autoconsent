import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepbrabant.nl_apn', ['https://www.omroepbrabant.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
