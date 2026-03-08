import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buli-tipphilfe.de_qyj', ['https://buli-tipphilfe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
