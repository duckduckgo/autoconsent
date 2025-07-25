import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_moncompte.permisdeconduire.gouv.fr_u7x',
    [
        'https://moncompte.permisdeconduire.gouv.fr/auth/realms/usager/protocol/openid-connect/auth?response_type=code&client_id=gndc-mes-points-permis&scope=openid&state=aD4VmWJS93QKN37da4KNK0y3DQ9kKYCvS1k9I6LlqJo%3D&redirect_uri=https://mespoints.permisdeconduire.gouv.fr/login/oauth2/code/mes-points-permis&nonce=XF-dUzmIpX6xvTRckQSmZt2GKQ6bS1L_XiRFmFnHdTo',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
