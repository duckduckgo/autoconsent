import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lawscot.org.uk_4zr', ['https://www.lawscot.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
