import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_espace-client.mma.fr_mc3',
    [
        'https://espace-client.mma.fr/connexion/?code=2d9e0b34e285b499d8de18ccd3996f30&profile=accesec&origin=2&state=e30%3D&redirect_uri=https%3A%2F%2Fespace-client.mma.fr%2Fmes-contrats%2F&client_id=acces-ec-PROD',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
