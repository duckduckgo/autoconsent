import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_blog-nouvelles-technologies.fr_ct2', ['https://www.blog-nouvelles-technologies.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
