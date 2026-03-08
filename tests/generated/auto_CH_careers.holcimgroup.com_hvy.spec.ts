import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careers.holcimgroup.com_hvy', ['https://careers.holcimgroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
