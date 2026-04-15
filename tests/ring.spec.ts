import generateCMPTests from '../playwright/runner';

generateCMPTests('ring', ['https://ring.com/', 'https://en-uk.ring.com/'], {
    skipRegions: ['US'],
    testOptIn: false,
});
