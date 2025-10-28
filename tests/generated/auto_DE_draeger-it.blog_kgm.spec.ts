import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_draeger-it.blog_kgm', ['https://draeger-it.blog/en/homepage/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
