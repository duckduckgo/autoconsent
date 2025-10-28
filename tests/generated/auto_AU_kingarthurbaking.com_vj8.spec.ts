import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kingarthurbaking.com_vj8', ['https://www.kingarthurbaking.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
