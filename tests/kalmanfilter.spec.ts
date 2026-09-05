import generateCMPTests from '../playwright/runner';

// The banner is only served in the EEA, the UK, and California.
generateCMPTests('kalmanfilter', ['https://www.kalmanfilter.net/default.aspx'], {
    skipRegions: ['US'],
});
