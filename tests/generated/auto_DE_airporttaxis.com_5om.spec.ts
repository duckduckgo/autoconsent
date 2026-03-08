import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airporttaxis.com_5om', ['https://airporttaxis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
