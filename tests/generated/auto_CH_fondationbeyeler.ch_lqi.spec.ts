import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fondationbeyeler.ch_lqi', ['https://www.fondationbeyeler.ch/startseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
