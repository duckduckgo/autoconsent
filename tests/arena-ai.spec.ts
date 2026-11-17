import generateCMPTests from '../playwright/runner';

generateCMPTests('arena.ai', ['https://arena.ai/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
