import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_handbook.fca.org.uk_0', ['https://www.handbook.fca.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
