import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baederland.de_x1v', ['https://www.baederland.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
