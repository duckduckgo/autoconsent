import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stromrechner.com_6v7', ['https://stromrechner.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
