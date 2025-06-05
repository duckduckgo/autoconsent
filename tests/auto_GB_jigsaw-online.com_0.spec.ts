import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_jigsaw-online.com_0', ['https://www.jigsaw-online.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
