import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cybersaveyourself.nl_o40', ['https://cybersaveyourself.nl/en/stay-secure-with-cybersave-yourself/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
