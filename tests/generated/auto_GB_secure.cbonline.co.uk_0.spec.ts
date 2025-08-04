import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_secure.cbonline.co.uk_0', ['https://secure.cbonline.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
