import generateCMPTests from '../playwright/runner';

generateCMPTests('tumblr-com', ['https://www.tumblr.com/'], {
    skipRegions: ['US', 'AU', 'JP'],
});
