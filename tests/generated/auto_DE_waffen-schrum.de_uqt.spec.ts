import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_waffen-schrum.de_uqt', ['https://www.waffen-schrum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
