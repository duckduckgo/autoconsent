import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_archives-etat-ge.ch_d6l', ['https://archives-etat-ge.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
