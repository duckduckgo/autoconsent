import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jadlamracingmodels.com_ogz', ['https://www.jadlamracingmodels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
