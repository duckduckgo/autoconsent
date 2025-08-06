import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gardenoasis.co.uk_0vv', ['https://www.gardenoasis.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
