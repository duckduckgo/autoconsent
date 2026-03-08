import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_directory.hertfordshire.gov.uk_2xx', ['https://directory.hertfordshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
