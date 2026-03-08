import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_alfreddunner.com_kc6', ['https://alfreddunner.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
