import generateCMPTests from '../playwright/runner';

generateCMPTests('hubspot', ['https://blog.hubspot.com/', 'https://www.hubspot.de/', 'https://www.aafp.org/']);

// notice-only flavor without a decline button
generateCMPTests('hubspot', ['https://www.hancockwhitney.com/'], {
    onlyRegions: ['US'],
});
