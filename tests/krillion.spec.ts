import generateCMPTests from '../playwright/runner';

// no banner shown in the US
generateCMPTests('krillion.to', ['http://krillion.to/', 'https://krillion.to/da'], {
    skipRegions: ['US'],
});
