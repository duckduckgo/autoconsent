import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_equalitytrust.org.uk_3du', ['https://equalitytrust.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
