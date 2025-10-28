import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ie.linkedin.com_6a6', ['https://ie.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
