import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auto-motor-oel.de_oyu', ['https://www.auto-motor-oel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
