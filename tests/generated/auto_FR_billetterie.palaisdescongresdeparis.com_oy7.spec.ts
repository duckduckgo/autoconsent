import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_billetterie.palaisdescongresdeparis.com_oy7', ['https://billetterie.palaisdescongresdeparis.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
