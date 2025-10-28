import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lcegroup.co.uk_con', ['https://www.lcegroup.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
