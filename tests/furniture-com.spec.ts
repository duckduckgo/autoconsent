import generateCMPTests from '../playwright/runner';

// the site is only reachable from the US
generateCMPTests('furniture.com', ['https://www.furniture.com/'], {
    onlyRegions: ['US'],
});
