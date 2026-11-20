import generateCMPTests from '../playwright/runner';

// The site is geo-blocked in the US and GB
generateCMPTests('crocobet', ['https://crocobet.com/'], {
    skipRegions: ['US', 'GB'],
});

generateCMPTests('crocobet', ['https://crocobet.com/'], {
    skipRegions: ['US', 'GB'],
    mobile: true,
});
