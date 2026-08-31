import generateCMPTests from '../playwright/runner';

generateCMPTests('cads-cookie-banner', ['https://www.citizensadvice.org.uk/', 'https://www.adviceguide.org.uk/'], {
    skipRegions: ['US', 'FR', 'DE'],
});
