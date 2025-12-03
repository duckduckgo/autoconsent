import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pflanzenhof-online.de_au2', ['https://www.pflanzenhof-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
