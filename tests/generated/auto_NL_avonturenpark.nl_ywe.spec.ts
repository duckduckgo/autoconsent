import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_avonturenpark.nl_ywe', ['https://www.avonturenpark.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
