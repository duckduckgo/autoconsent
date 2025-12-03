import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_account.ubisoft.com_93p', ['https://account.ubisoft.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
