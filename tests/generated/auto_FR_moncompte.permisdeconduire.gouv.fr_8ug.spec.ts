import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_moncompte.permisdeconduire.gouv.fr_8ug',
    [
        'https://moncompte.permisdeconduire.gouv.fr/auth/realms/usager/protocol/openid-connect/auth?response_type=code&client_id=gndc-mes-points-permis&scope=openid&state=3Zn-NI0nQPinp6TmQ0V3NnVi43QmcmNU7yHO1ong8ac%3D&redirect_uri=https://mespoints.permisdeconduire.gouv.fr/login/oauth2/code/mes-points-permis&nonce=7fx5XnvqnHxWQzdmv_Ptz3yvoZGn5RN740EhKtikzlM',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
