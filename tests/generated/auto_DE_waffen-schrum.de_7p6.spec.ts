import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_waffen-schrum.de_7p6', ['https://www.waffen-schrum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
