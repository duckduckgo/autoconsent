import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tomorrowland.com_k12', ['https://www.tomorrowland.com/home/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
