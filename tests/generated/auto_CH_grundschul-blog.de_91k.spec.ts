import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_grundschul-blog.de_91k', ['https://grundschul-blog.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
