import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bht-berlin.de_6g5', ['https://www.bht-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
