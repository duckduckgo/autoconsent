import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vie-publique.fr_urs', ['https://www.vie-publique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
