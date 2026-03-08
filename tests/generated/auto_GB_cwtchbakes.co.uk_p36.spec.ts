import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cwtchbakes.co.uk_p36', ['https://cwtchbakes.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
