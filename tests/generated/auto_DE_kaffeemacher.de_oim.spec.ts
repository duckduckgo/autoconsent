import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kaffeemacher.de_oim', ['https://kaffeemacher.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
