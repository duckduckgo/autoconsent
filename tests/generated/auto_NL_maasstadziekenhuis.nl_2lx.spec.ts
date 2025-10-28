import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_maasstadziekenhuis.nl_2lx', ['https://www.maasstadziekenhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
