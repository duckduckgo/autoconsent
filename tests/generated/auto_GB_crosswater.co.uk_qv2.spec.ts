import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crosswater.co.uk_qv2', ['https://www.crosswater.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
