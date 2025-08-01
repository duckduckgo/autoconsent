import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sportwaffen-triebel.de_ofv', ['https://sportwaffen-triebel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
