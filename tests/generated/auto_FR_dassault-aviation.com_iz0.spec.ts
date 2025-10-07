import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dassault-aviation.com_iz0', ['https://www.dassault-aviation.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
