import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sparxscience.com_xyx', ['https://sparxscience.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
