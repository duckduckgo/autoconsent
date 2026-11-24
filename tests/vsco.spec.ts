import generateCMPTests from '../playwright/runner';

// shown only where OneTrust does not serve its TCF banner
generateCMPTests('vsco', ['https://vsco.co/'], {
    testOptIn: false,
    onlyRegions: ['US'],
});
