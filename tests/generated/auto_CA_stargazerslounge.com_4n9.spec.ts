import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_stargazerslounge.com_4n9',
    [
        'https://stargazerslounge.com/index.php?app=core&module=system&controller=cookies&do=cookieConsentToggle&ref=aHR0cHM6Ly9zdGFyZ2F6ZXJzbG91bmdlLmNvbS8=&csrfKey=4b555e80ae42f7157a9803c45b598675',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
