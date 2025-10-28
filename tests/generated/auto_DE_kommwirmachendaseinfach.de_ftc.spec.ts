import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kommwirmachendaseinfach.de_ftc', ['https://kommwirmachendaseinfach.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
