import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_secure.ybonline.co.uk_0', ['https://secure.ybonline.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
