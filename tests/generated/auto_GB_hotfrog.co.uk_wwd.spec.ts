import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hotfrog.co.uk_wwd', ['https://www.hotfrog.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
