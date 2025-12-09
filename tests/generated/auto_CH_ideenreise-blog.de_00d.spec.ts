import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ideenreise-blog.de_00d', ['https://ideenreise-blog.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
