import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zonecouture.fr_vdh', ['https://www.zonecouture.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
