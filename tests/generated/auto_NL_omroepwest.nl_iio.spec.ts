import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_omroepwest.nl_iio', ['https://www.omroepwest.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
