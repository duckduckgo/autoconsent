import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livebox-news.com_ys8', ['https://livebox-news.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
