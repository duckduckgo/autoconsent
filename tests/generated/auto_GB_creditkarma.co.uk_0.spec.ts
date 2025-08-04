import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_creditkarma.co.uk_0', ['https://www.creditkarma.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
