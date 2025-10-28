import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bijdeles.online_a6n', ['https://www.bijdeles.online/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
