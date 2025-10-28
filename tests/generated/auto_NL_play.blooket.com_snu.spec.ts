import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_play.blooket.com_snu', ['https://play.blooket.com/play'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
