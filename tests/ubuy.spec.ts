import generateCMPTests from '../playwright/runner';

generateCMPTests('ubuy', ['https://www.u-buy.co.uk/', 'https://www.ubuy.co.nl/', 'https://www.u-buy.com.au/'], {
    skipRegions: ['US'],
});
