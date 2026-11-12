import generateCMPTests from '../playwright/runner';

generateCMPTests('canva', ['https://www.canva.com/'], {
    skipRegions: ['US', 'AU'],
});
