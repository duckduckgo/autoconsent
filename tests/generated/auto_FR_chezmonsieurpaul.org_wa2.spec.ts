import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chezmonsieurpaul.org_wa2', ['https://chezmonsieurpaul.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
