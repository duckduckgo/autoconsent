import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_canva.com_6vh', ['https://www.canva.com/ai-art-generator/global-trends/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
