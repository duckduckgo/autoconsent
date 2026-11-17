import generateCMPTests from '../playwright/runner';

generateCMPTests('meta-cookie-dialog-v2', ['https://www.meta.com/'], {
    skipRegions: ['US'],
});

generateCMPTests('meta-cookie-dialog-v2', ['https://www.meta.com/'], {
    mobile: true,
    skipRegions: ['US'],
});
