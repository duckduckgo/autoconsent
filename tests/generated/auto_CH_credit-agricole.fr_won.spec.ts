import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_credit-agricole.fr_won', ['https://www.credit-agricole.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
