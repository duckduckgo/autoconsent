import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_live.deutsche-boerse.com_cht', ['https://live.deutsche-boerse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
