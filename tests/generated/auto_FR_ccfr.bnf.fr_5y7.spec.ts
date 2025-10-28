import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_ccfr.bnf.fr_5y7',
    [
        'https://ccfr.bnf.fr/portailccfr/jsp/public/index.jsp?success=%2Fjsp%2Fpublic%2Findex.jsp&failure=%2Fjsp%2Fpublic%2Ffailure.jsp&profile=public',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
