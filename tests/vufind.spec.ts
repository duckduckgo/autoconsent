import generateCMPTests from '../playwright/runner';

// The consent overlay is only served to mobile clients on these sites.
const urls = ['https://keski.finna.fi/', 'https://finna.fi/', 'https://helmet.finna.fi/', 'https://kavi.finna.fi/'];

// VuFind reloads the page as soon as consent is saved, which races the self test.
generateCMPTests('vufind', urls, { mobile: true, testSelfTest: false });
