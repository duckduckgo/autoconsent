import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kingarthurbaking.com_xtb', ['https://www.kingarthurbaking.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
