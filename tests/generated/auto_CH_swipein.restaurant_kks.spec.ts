import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swipein.restaurant_kks', ['https://www.swipein.restaurant/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
