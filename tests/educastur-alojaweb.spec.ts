import generateCMPTests from '../playwright/runner';

// site is not reachable from outside a few EU regions
generateCMPTests('educastur-alojaweb', ['https://alojaweb.educastur.es/'], {
    onlyRegions: ['DE', 'FR', 'NL', 'ES'],
});
