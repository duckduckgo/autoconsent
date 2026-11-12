import generateCMPTests from '../playwright/runner';

generateCMPTests('onlineradiobox', ['https://onlineradiobox.com/', 'https://onlineradiobox.com/us/'], {
    onlyRegions: ['US', 'CA'],
});
