import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klm.com_65w', ['https://www.klm.ch/en?showredirectnotice=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
