import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jongbloed-fiscaaljuristen.nl_c7a', ['https://www.jongbloed-fiscaaljuristen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
