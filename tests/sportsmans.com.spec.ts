import generateCMPTests from '../playwright/runner';

// the site blocks visitors outside the US and CA
generateCMPTests('sportsmans.com', ['https://www.sportsmans.com/'], {
    onlyRegions: ['US', 'CA'],
    testSelfTest: false,
});
