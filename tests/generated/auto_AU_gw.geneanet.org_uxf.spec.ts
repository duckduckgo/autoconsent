import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_gw.geneanet.org_uxf',
    ['https://en.geneanet.org/connexion/?url=https://en.geneanet.org/mon_compte/arbre_show.php'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
