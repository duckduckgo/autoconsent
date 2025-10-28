import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sapere.virgilio.it_oyu', ['https://sapere.virgilio.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
