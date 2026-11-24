import generateCMPTests from '../playwright/runner';

// the banner is only shown in regions that require consent
generateCMPTests('disturbia', ['https://www.disturbia.co.uk/'], {
    skipRegions: ['US'],
});
