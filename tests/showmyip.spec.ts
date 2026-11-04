import generateCMPTests from '../playwright/runner';

generateCMPTests('showmyip.com', ['https://www.showmyip.com/'], {
    skipRegions: ['US'],
});
