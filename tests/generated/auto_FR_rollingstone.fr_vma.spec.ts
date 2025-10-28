import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rollingstone.fr_vma', ['https://www.rollingstone.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
