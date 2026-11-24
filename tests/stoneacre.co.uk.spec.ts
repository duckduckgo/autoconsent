import generateCMPTests from '../playwright/runner';

// no banner shown in the US
generateCMPTests('stoneacre.co.uk', ['https://www.stoneacre.co.uk/'], {
    skipRegions: ['US'],
});
