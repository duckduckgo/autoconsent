import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hervecuisine.com_ybr', ['https://www.hervecuisine.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
