import generateCMPTests from '../playwright/runner';

generateCMPTests('facebook-mobile', ['https://m.facebook.com/'], {
    mobile: true,
    skipRegions: ['US'],
});
