import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mixedbread.ai_tge', ['https://www.mixedbread.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
