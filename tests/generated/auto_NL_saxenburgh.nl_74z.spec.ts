import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_saxenburgh.nl_74z', ['https://www.saxenburgh.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
