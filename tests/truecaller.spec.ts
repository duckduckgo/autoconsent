import generateCMPTests from '../playwright/runner';

// US visitors get consent applied automatically, without a banner
generateCMPTests('truecaller', ['https://www.truecaller.com/'], {
    skipRegions: ['US'],
});
