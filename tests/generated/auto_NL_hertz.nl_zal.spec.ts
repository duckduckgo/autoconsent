import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hertz.nl_zal', ['https://www.hertz.nl/rentacar/reservation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
