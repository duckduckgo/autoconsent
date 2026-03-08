import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_en.consultation.altotrain.ca_lx0',
    ['https://en.consultation.altotrain.ca/shaping-the-canada-of-tomorrow-with-high-speed-rail'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
