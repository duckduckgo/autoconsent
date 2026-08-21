import generateCMPTests from '../playwright/runner';

generateCMPTests('twitter', ['https://x.com/'], {
    skipRegions: ['US'],
});

generateCMPTests('twitter', ['https://x.com/'], {
    skipRegions: ['US'],
    mobile: true,
});
