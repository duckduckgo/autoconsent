import generateCMPTests from '../playwright/runner';

generateCMPTests('prestigeflowers', ['https://www.prestigeflowers.co.uk/'], {
    onlyRegions: ['US', 'GB', 'DE'],
});
