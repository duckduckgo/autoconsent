import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nieuwspoort.nl_yfb', ['https://www.nieuwspoort.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
