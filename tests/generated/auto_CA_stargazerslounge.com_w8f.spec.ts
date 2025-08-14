import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_stargazerslounge.com_w8f',
    [
        'https://stargazerslounge.com/index.php?app=core&module=system&controller=cookies&do=cookieConsentToggle&ref=aHR0cHM6Ly9zdGFyZ2F6ZXJzbG91bmdlLmNvbS8=&csrfKey=c9d772f69b5ea4243f58ba4438bdf494',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
