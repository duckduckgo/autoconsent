import generateCMPTests from '../playwright/runner';

// The banner only appears once the site's geolocation prompt is answered
generateCMPTests('tntsupermarket', ['https://www.tntsupermarket.com/'], { onlyRegions: ['CA'], testSelfTest: false });
