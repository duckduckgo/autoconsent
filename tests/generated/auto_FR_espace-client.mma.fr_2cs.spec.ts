import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_espace-client.mma.fr_2cs',
    [
        'https://espace-client.mma.fr/connexion/?code=2b147179a6fb0411398998d19b7b65c4&profile=accesec&origin=2&state=e30%3D&redirect_uri=https%3A%2F%2Fespace-client.mma.fr%2Fmes-contrats%2F&client_id=acces-ec-PROD',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
