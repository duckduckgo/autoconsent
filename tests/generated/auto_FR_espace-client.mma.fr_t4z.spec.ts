import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_espace-client.mma.fr_t4z',
    [
        'https://espace-client.mma.fr/connexion/?code=204e3c0af5a224d4ba6f0949a653f4a0&profile=accesec&origin=2&state=e30%3D&redirect_uri=https%3A%2F%2Fespace-client.mma.fr%2Fmes-contrats%2F&client_id=acces-ec-PROD',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
