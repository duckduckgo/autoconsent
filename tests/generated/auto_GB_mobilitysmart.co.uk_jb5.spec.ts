import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mobilitysmart.co.uk_jb5', ['https://www.mobilitysmart.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
