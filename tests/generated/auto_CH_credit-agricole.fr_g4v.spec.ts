import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_credit-agricole.fr_g4v', ['https://www.credit-agricole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
