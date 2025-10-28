import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_communityclothing.co.uk_yrk', ['https://communityclothing.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
