import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog.editions-baudelaire.com_vnl', ['https://blog.editions-baudelaire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
