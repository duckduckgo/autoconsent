import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_breville.co.uk_7my', ['https://www.breville.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
