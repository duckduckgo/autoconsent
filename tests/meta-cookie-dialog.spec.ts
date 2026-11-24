import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'meta-cookie-dialog',
    ['https://www.messenger.com/', 'https://developers.facebook.com/', 'https://business.facebook.com/'],
    {
        skipRegions: ['US'],
    },
);

generateCMPTests('meta-cookie-dialog', ['https://www.messenger.com/'], {
    mobile: true,
    skipRegions: ['US'],
});
