import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_healthcentral.com_gqk', ['https://www.healthcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
