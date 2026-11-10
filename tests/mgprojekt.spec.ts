import generateCMPTests from '../playwright/runner';

generateCMPTests('mgprojekt', ['https://www.mgprojekt.com.pl/'], {
    skipRegions: ['US', 'CA'],
});
