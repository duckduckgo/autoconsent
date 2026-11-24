import generateCMPTests from '../playwright/runner';

generateCMPTests('facebook', ['https://facebook.com/', 'https://www.facebook.com/friends'], {
    skipRegions: ['US'],
});

generateCMPTests('facebook', ['https://facebook.com/'], {
    mobile: true,
    skipRegions: ['US'],
});
