import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_altersgerechtes-wohnen-wollishofen.ch_wy5', ['https://altersgerechtes-wohnen-wollishofen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
