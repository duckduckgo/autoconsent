import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_auth.monzo.com_j6q',
    [
        'https://auth.monzo.com/?client_id=oauth2client_00009XXTN0biZ3vgvysb21&redirect_uri=https://web.monzo.com/callback&response_type=code&state=88404da5-b99e-4e98-8f62-f8a1665d7dfd',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
