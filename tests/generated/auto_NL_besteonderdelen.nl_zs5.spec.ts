import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_besteonderdelen.nl_zs5', ['https://www.besteonderdelen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
