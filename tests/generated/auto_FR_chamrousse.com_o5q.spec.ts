import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chamrousse.com_o5q', ['https://www.chamrousse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
