import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-business-tipp.de_9dk', ['https://der-business-tipp.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
