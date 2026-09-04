import generateCMPTests from '../playwright/runner';

// The Warner Bros. Discovery "Legal Terms and Privacy" gate is only served in US/CCPA regions;
// EEA/UK visitors get the regular OneTrust banner instead, which the Onetrust rule handles.
// The gate itself only offers "Agree", so optOut rejects through the OneTrust preference centre
// that the site links from its footer, and only then acknowledges the gate.
generateCMPTests('wbd-userconsent', ['https://www.cnn.com/', 'https://www.adultswim.com/'], {
    onlyRegions: ['US'],
    testOptIn: false,
});
