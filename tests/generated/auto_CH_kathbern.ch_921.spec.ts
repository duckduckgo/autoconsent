import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kathbern.ch_921', ['https://www.kathbern.ch/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
