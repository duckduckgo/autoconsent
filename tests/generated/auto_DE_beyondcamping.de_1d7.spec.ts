import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beyondcamping.de_1d7', ['https://www.beyondcamping.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
