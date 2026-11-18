import generateCMPTests from '../playwright/runner';

generateCMPTests('funding-choices-us', ['https://www.ynet.co.il/', 'https://www.theday.com/'], {
    onlyRegions: ['US'],
    testSelfTest: false,
});
