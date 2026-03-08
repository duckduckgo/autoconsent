import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britishnotes.co.uk_fvu', ['https://britishnotes.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
