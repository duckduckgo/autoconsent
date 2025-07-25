import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_auth.monzo.com_sc0',
    [
        'https://auth.monzo.com/?client_id=oauth2client_00009XXTN0biZ3vgvysb21&redirect_uri=https://web.monzo.com/callback&response_type=code&state=ebc663d4-e558-4f6d-9f8e-5d34634b55f5',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
