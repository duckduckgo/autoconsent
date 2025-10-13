import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bet365.bet.br_kkx', ['https://www.bet365.bet.br/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
