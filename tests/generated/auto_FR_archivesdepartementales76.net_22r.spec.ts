import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archivesdepartementales76.net_22r', ['https://www.archivesdepartementales76.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
