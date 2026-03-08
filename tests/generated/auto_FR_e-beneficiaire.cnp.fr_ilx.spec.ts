import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_e-beneficiaire.cnp.fr_ilx',
    ['https://e-beneficiaire.cnp.fr/prweb/CustomWebWBE/app/default/oq8aWy1fikLfEX596itUr2YAkA0gWMV6p3VGSgoLI8Y*/!STANDARD'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
