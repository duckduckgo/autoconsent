import generateCMPTests from '../playwright/runner';

generateCMPTests('tiktok.com', ['https://tiktok.com/', 'https://www.capcut.com/', 'https://seller-id.tokopedia.com/'], {
    skipRegions: ['US'],
});

generateCMPTests('tiktok.com', ['https://tiktok.com/', 'https://www.capcut.com/', 'https://seller-id.tokopedia.com/'], {
    skipRegions: ['US'],
    mobile: true,
});
