import generateCMPTests from '../playwright/runner';

// US visitors are not shown a consent notice, only the accessibility launcher.
generateCMPTests('clym', ['https://www.westword.com/', 'https://www.dallasobserver.com/', 'https://www.miaminewtimes.com/'], {
    skipRegions: ['US'],
});
