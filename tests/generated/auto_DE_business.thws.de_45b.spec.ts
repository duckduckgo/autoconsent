import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_business.thws.de_45b', ['https://business.thws.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
