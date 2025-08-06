import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rapidonline.com_0', ['https://www.rapidonline.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
