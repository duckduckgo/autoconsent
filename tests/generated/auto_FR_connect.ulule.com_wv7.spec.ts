import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_connect.ulule.com_wv7',
    ['https://connect.ulule.com/home?post_login_redirect=https%3A%2F%2Fconnect.ulule.com%2F'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
