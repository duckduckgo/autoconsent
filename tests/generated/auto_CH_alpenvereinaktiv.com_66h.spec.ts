import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alpenvereinaktiv.com_66h', ['https://www.alpenvereinaktiv.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
