import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_betterhelp.com_0', ['https://www.betterhelp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
