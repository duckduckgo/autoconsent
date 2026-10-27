import generateCMPTests from '../playwright/runner';

// legitimate-interest-only notice has no consent button
generateCMPTests('utileapp', ['https://www.utileapp.com/'], {
    onlyRegions: ['GB', 'FR', 'CH'],
    testOptIn: false,
});
