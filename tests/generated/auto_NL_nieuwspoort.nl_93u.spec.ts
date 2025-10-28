import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nieuwspoort.nl_93u', ['https://www.nieuwspoort.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
