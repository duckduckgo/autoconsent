import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_beefeater.co.uk_5vc', ['https://www.beefeater.co.uk/en-gb'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
