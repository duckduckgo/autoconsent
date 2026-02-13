import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bergzeit.co.uk_d1r', ['https://www.bergzeit.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
