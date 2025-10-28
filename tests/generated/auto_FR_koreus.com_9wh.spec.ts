import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_koreus.com_9wh', ['https://www.koreus.com/modules/news/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
