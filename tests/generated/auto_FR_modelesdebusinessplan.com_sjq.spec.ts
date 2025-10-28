import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_modelesdebusinessplan.com_sjq', ['https://modelesdebusinessplan.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
