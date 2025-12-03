import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_frostbrowntodd.com_j2w',
    [
        'https://frostbrowntodd.com/decoding-the-american-privacy-rights-act-of-2024-what-your-business-needs-to-know-about-the-proposed-privacy-framework/',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
