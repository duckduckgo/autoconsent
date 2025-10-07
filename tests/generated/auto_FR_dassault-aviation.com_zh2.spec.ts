import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dassault-aviation.com_zh2', ['https://www.dassault-aviation.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
