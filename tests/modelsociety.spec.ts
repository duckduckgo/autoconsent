import generateCMPTests from '../playwright/runner';

// the cookie banner is only shown to visitors from the EU/UK
generateCMPTests('modelsociety', ['https://modelsociety.com/'], {
    onlyRegions: ['GB', 'DE'],
});
