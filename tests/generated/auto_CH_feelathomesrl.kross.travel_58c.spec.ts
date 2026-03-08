import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_feelathomesrl.kross.travel_58c', ['https://feelathomesrl.kross.travel/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
