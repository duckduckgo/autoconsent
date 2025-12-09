import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cheques-emploi.ch_4wy', ['https://cheques-emploi.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
