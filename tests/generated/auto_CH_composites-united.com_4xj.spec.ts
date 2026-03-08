import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_composites-united.com_4xj', ['https://composites-united.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
