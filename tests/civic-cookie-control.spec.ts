import generateCMPTests from '../playwright/runner';

generateCMPTests('civic-cookie-control', ['https://www.birmingham.gov.uk/', 'https://planning.org.uk/'], {
    skipRegions: ['US', 'DE'],
});
