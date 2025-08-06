import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livebox-news.com_ey1', ['https://livebox-news.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
