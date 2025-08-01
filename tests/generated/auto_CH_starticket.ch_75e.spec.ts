import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_starticket.ch_75e', ['https://www.starticket.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
