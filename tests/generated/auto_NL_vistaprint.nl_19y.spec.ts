import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vistaprint.nl_19y', ['https://www.vistaprint.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
