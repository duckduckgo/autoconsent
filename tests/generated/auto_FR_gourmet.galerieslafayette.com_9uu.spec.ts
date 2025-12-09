import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gourmet.galerieslafayette.com_9uu', ['https://gourmet.galerieslafayette.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
