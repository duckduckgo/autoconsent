import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_3mfrance.fr_ofm',
    ['https://www.3mfrance.fr/3M/fr_FR/notre-societe-fr/?utm_medium=redirect&utm_source=vanity-url&utm_campaign=www.3mfrance.fr'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
