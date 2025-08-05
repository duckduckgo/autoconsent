import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klm.ch_7l1', ['https://www.klm.ch/en?showredirectnotice=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
