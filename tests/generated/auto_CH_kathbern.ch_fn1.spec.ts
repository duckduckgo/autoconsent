import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kathbern.ch_fn1', ['https://www.kathbern.ch/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
