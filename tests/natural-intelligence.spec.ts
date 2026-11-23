import generateCMPTests from '../playwright/runner';

// top bar banner, shown in the UK and EEA only
generateCMPTests('natural-intelligence', ['https://www.top10.com/'], {
    skipRegions: ['US'],
});

// footer banner variant
generateCMPTests('natural-intelligence', ['https://www.dating-site-vergleich.de/', 'https://www.best-dating-sites-us.com/']);
