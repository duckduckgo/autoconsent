import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_web.monzo.com_scl',
    [
        'https://auth.monzo.com/?client_id=oauth2client_00009XXTN0biZ3vgvysb21&redirect_uri=https://web.monzo.com/callback&response_type=code&state=186fd781-1722-4d49-9c35-9c6351e31084',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
