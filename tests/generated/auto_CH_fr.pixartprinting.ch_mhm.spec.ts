import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.pixartprinting.ch_mhm', ['https://fr.pixartprinting.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
