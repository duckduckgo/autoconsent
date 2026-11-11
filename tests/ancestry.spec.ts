import generateCMPTests from '../playwright/runner';

// ancestry.com shows no banner in the US
generateCMPTests('ancestry', ['https://www.ancestry.co.uk/', 'https://www.ancestry.de/', 'https://www.ancestry.com/'], {
    skipRegions: ['US'],
});
