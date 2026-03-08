import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_floodassist.co.uk_nol', ['https://floodassist.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
