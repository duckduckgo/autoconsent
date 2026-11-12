import generateCMPTests from '../playwright/runner';

generateCMPTests('chatgpt', ['https://chatgpt.com/'], {
    skipRegions: ['US', 'AU', 'CA', 'JP'],
});
