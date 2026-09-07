import generateCMPTests from '../playwright/runner';

// The Guardian shows a Sourcepoint "consent or pay" wall in the EU/EEA and UK,
// where the only reject option requires a paid subscription. A cosmetic rule
// dismisses it by hiding the Sourcepoint container and removing the scroll lock.
// Other regions keep a free-reject Sourcepoint popup handled by Sourcepoint-frame.
generateCMPTests('theguardian.com', ['https://www.theguardian.com/'], {
    onlyRegions: ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'PL', 'SE', 'NO', 'DK', 'CH'],
    testOptIn: false,
    testSelfTest: false,
});
