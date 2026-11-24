import generateCMPTests from '../playwright/runner';

// The cookie settings modal is shown to EU/UK visitors without the GPC signal.
// Confirming the settings reloads the page, so the self-test cannot run.
generateCMPTests('overdrive', ['https://voebb.overdrive.com/', 'https://nypl.overdrive.com/'], {
    onlyRegions: ['DE', 'GB', 'FR'],
    testSelfTest: false,
});

// Browsers that send the GPC signal get a notice banner instead, in all regions.
generateCMPTests('overdrive', ['https://lapl.overdrive.com/'], { gpc: true });
