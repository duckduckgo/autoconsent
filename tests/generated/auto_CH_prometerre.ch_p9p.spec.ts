import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_prometerre.ch_p9p', ['https://www.prometerre.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
