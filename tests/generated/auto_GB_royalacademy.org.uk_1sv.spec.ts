import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_royalacademy.org.uk_1sv', ['https://www.royalacademy.org.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
