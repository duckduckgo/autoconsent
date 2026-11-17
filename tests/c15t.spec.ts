import generateCMPTests from '../playwright/runner';

generateCMPTests('c15t', [
    'https://www.barefootandmore.nl/',
    'https://adca.st/',
    'https://waffles.ch/',
    'https://geekflare.com/',
    'https://cakewalk.com/',
    'https://www.matsmart.se/',
    'https://baptist.nl/',
    'https://catalyst-demo.site/',
    'https://expo.dev/',
]);

// these sites show the banner only in GDPR regions
generateCMPTests('c15t', ['https://www.mintlify.com/', 'https://www.unkey.com/', 'https://www.consent.io/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
