import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_virginatlantic.com_3ws', ['https://www.virginatlantic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
