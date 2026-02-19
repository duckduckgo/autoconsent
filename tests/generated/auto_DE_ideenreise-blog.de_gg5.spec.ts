import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ideenreise-blog.de_gg5', ['https://ideenreise-blog.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
