import generateCMPTests from '../playwright/runner';

generateCMPTests('fanatics', ['https://www.fanatics.co.uk/', 'https://www.fanatics.de/', 'https://www.fanatics.fr/'], {
    skipRegions: ['US'],
});
