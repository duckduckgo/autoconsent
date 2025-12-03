import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_starticket.ch_qv8', ['https://www.starticket.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
