import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanbeekart.nl_ew9', ['https://www.vanbeekart.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
