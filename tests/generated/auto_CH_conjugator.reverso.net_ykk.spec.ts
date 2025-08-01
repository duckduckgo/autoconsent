import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_conjugator.reverso.net_ykk', ['https://conjugator.reverso.net/conjugation-english.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
