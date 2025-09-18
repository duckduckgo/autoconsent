import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_eandt.theiet.org_6zf',
    [
        'https://eandt.theiet.org/noindex/rscc/verification-failed?destination=/2022/11/21/rights-campaigner-sues-meta-over-advertising-practices',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
