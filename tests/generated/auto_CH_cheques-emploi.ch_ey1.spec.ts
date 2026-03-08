import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cheques-emploi.ch_ey1', ['https://cheques-emploi.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
