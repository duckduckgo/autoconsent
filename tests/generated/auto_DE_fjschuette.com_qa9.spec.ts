import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fjschuette.com_qa9', ['https://fjschuette.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
