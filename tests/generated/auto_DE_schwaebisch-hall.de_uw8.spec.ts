import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwaebisch-hall.de_uw8', ['https://www.schwaebisch-hall.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
