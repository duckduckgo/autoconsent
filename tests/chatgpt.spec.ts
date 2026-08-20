import generateCMPTests from '../playwright/runner';

// The cookie dialog is only served in the EEA; other regions get no banner at all.
generateCMPTests('chatgpt', ['https://chatgpt.com/'], {
    onlyRegions: ['DE', 'FR', 'NL', 'IT', 'PL'],
});
