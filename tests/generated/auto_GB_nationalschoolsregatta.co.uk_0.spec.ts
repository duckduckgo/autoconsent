import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationalschoolsregatta.co.uk_0', ['https://www.nationalschoolsregatta.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
