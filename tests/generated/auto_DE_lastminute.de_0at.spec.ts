import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lastminute.de_0at', ['https://www.lastminute.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
