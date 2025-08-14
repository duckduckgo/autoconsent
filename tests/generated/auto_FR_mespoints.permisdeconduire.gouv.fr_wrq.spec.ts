import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_mespoints.permisdeconduire.gouv.fr_wrq',
    [
        'https://moncompte.permisdeconduire.gouv.fr/auth/realms/usager/protocol/openid-connect/auth?response_type=code&client_id=gndc-mes-points-permis&scope=openid&state=_66OMwQpXjUp5uxP1t2kzEunYl-U3I26KDGXpetxlUA%3D&redirect_uri=https://mespoints.permisdeconduire.gouv.fr/login/oauth2/code/mes-points-permis&nonce=FUgnf6TBWxaGmx9YzMC07R7KZTm6neGwt5VcV1QUj3w',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
