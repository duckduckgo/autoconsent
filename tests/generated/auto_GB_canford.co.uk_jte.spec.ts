import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_canford.co.uk_jte', ['https://www.canford.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
