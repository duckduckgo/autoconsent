import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crossidiomas.com_6hp', ['https://crossidiomas.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
