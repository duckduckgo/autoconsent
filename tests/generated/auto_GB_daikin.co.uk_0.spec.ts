import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_daikin.co.uk_0', ['https://www.daikin.co.uk/en_gb/residential.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
