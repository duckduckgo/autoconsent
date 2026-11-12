import generateCMPTests from '../playwright/runner';

// Non-PL traffic often gets a bot check page in front of the site
generateCMPTests('erli-pl', ['https://erli.pl/'], { onlyRegions: ['PL'] });
