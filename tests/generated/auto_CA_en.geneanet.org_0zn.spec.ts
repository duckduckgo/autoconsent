import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_en.geneanet.org_0zn',
    ['https://en.geneanet.org/connexion/?url=https://en.geneanet.org/mon_compte/arbre_show.php'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] },
);
