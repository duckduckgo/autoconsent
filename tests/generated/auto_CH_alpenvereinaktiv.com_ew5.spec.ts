import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alpenvereinaktiv.com_ew5', ['https://www.alpenvereinaktiv.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
