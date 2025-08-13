import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fondationbeyeler.ch_o13', ['https://www.fondationbeyeler.ch/startseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
