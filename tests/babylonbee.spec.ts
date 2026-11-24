import generateCMPTests from '../playwright/runner';

// the dismiss-only notice is shown outside GDPR regions; those get a banner with "Reject all", handled by the heuristic
generateCMPTests('babylonbee', ['https://babylonbee.com/', 'https://notthebee.com/'], {
    onlyRegions: ['US', 'CA', 'AU', 'JP'],
});
