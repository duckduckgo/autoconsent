import generateCMPTests from '../playwright/runner';

generateCMPTests('chase-com', ['https://www.chase.com/personal/events/experiences', 'https://creditcards.chase.com/'], {
    onlyRegions: ['US'],
});
