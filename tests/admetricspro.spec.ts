import generateCMPTests from '../playwright/runner';

// US state privacy law flavor with consent toggles
generateCMPTests('admetricspro', ['https://biblehub.com/', 'https://tangorin.com/'], {
    onlyRegions: ['US'],
});

// TCF flavor with a second "Reject All and Exit" layer
generateCMPTests('admetricspro', ['https://tangorin.com/', 'https://www.allfreecrochet.com/'], {
    onlyRegions: ['GB', 'DE'],
});
