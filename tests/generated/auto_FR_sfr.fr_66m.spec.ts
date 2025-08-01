import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_FR_sfr.fr_66m',
    ['https://www.sfr.fr/cas/login?service=https%3A%2F%2Fwebmail.sfr.fr%2Faccueil%2Fj_spring_cas_security_check'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] },
);
