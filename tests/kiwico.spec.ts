import generateCMPTests from '../playwright/runner';

// The banner is only shown to EEA/UK visitors.
generateCMPTests('kiwico', ['https://www.kiwico.com/0-5', 'https://www.kiwico.com/'], {
    skipRegions: ['US', 'NA', 'NO'],
});
