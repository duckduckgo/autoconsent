import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fondsenwerving.blog_wo9', ['https://fondsenwerving.blog/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
