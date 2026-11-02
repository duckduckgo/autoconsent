import generateCMPTests from '../playwright/runner';

// the banner is only shown in the EU and UK
generateCMPTests('flexclip.com', ['https://www.flexclip.com/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
