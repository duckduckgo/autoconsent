import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.virginatlantic.com_my6', ['https://careers.virginatlantic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
