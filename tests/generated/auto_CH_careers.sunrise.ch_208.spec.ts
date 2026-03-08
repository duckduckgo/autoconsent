import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careers.sunrise.ch_208', ['https://careers.sunrise.ch/de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
