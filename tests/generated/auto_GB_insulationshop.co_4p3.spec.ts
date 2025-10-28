import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_insulationshop.co_4p3', ['https://www.insulationshop.co/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
