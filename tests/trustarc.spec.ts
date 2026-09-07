import generateCMPTests from '../playwright/runner';

generateCMPTests('TrustArc-top', ['https://www.samsung.com/uk/smartphones/all-smartphones/'], {
    testOptOut: true,
    testSelfTest: false,
    skipRegions: ['US'],
});

generateCMPTests('TrustArc-top', ['https://www.garmin.com/de-DE/'], {
    testOptOut: true,
    testSelfTest: false,
    skipRegions: ['US'],
});

// Under CCPA-style implied consent the banner has no reject button, so opting out goes
// through the preference manager that opens from "cookie settings".
generateCMPTests('TrustArc-top', ['https://www.remax.com/', 'https://www.thermofisher.com/', 'https://www.republicservices.com/'], {
    testOptOut: true,
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
