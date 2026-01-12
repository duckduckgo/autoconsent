import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vindtandarts.nl_ecu', ['https://vindtandarts.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
