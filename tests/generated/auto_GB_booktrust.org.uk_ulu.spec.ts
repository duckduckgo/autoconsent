import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_booktrust.org.uk_ulu', ['https://www.booktrust.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
