import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pixartprinting.ch_rnn', ['https://fr.pixartprinting.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
