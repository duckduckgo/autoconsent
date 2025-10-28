import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bonneval-sur-arc.com_vfj', ['https://www.bonneval-sur-arc.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
