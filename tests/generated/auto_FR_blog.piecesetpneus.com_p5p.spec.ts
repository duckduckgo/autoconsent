import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.piecesetpneus.com_p5p', ['https://blog.piecesetpneus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
