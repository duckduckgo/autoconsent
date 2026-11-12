import generateCMPTests from '../playwright/runner';

generateCMPTests('bing.com-notice', ['https://www.bing.com/'], {
    mobile: true,
    onlyRegions: ['CA'],
});
