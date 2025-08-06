import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_stargazerslounge.com_0',
    [
        'https://stargazerslounge.com/index.php?app=core&module=system&controller=cookies&do=cookieConsentToggle&ref=aHR0cHM6Ly9zdGFyZ2F6ZXJzbG91bmdlLmNvbS8=&csrfKey=0026cda7b332b9baea9668fde370a250',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
