import generateCMPTests from '../playwright/runner';

generateCMPTests('tiktok.com', ['https://tiktok.com/', 'https://www.capcut.com/'], {
    skipRegions: ['US'],
});

generateCMPTests('tiktok.com', ['https://tiktok.com/', 'https://www.capcut.com/'], {
    skipRegions: ['US'],
    mobile: true,
});
