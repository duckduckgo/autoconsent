import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_goodenergy.co.uk_0', ['https://www.goodenergy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
