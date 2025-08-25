import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vistaprint.de_xhj', ['https://www.vistaprint.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
