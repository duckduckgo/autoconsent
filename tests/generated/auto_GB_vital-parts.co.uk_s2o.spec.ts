import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vital-parts.co.uk_s2o', ['https://www.vital-parts.co.uk/index.asp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
