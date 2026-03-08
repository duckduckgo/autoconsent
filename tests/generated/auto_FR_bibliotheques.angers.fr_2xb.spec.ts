import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bibliotheques.angers.fr_2xb', ['https://bibliotheques.angers.fr/iguana/www.main.cls?surl=angers'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
