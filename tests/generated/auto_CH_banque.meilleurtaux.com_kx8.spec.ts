import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_banque.meilleurtaux.com_kx8', ['https://banque.meilleurtaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
