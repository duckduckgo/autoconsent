import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kathbern.ch_2uw', ['https://www.kathbern.ch/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
