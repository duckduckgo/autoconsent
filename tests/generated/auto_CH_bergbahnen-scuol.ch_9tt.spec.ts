import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bergbahnen-scuol.ch_9tt', ['https://www.bergbahnen-scuol.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
