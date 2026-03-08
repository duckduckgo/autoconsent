import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_blog.lenovocdrt.com_e6t', ['https://blog.lenovocdrt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
