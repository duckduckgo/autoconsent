import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gb.linkedin.com_qq9', ['https://gb.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
