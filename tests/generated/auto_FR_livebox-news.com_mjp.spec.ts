import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livebox-news.com_mjp', ['https://livebox-news.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
