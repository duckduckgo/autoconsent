import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maxicoffee.com_1jg', ['https://www.maxicoffee.com/index.php?reloaded=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
