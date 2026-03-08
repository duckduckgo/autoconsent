import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_epargnants.epargnesalariale.labanquepostale.fr_hj4',
    ['https://epargnant.epargne-salariale.labanquepostale.fr/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
