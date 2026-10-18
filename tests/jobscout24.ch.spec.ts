import generateCMPTests from '../playwright/runner';

// outside Switzerland the site shows a consent dialog; in CH it shows a notice-only banner handled by the heuristic
generateCMPTests('jobscout24.ch', ['https://www.jobscout24.ch/'], {
    skipRegions: ['CH'],
    // the desktop site reloads after saving consent, before the self test can run
    testSelfTest: false,
});

generateCMPTests('jobscout24.ch', ['https://www.jobscout24.ch/'], {
    skipRegions: ['CH'],
    mobile: true,
});
