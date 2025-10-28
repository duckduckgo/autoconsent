import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_it.spankbang.com_dx3', ['https://it.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
