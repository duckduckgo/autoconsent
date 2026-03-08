import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_catalogus.killgerm.nl_2oc', ['https://catalogus.killgerm.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
