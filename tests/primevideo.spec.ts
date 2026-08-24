import generateCMPTests from '../playwright/runner';

generateCMPTests('primevideo.com', ['https://www.primevideo.com/'], {
    skipRegions: ['US'],
});
