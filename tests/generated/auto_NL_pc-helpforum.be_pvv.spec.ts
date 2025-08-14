import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pc-helpforum.be_pvv', ['https://www.pc-helpforum.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
