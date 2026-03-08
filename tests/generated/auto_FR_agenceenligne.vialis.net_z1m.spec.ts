import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_agenceenligne.vialis.net_z1m', ['https://agenceenligne.vialis.net/application/jsp/arc/habilitation/login.jsp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
