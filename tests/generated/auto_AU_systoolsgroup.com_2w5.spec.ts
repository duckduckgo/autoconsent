import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_systoolsgroup.com_2w5', ['https://www.systoolsgroup.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
