import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ideenreise-blog.de_nym', ['https://ideenreise-blog.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
