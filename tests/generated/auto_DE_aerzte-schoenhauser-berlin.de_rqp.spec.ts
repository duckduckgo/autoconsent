import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aerzte-schoenhauser-berlin.de_rqp', ['https://aerzte-schoenhauser-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
