import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vistaprint.nl_6pc', ['https://www.vistaprint.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
