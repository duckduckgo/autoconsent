import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cloudairy.com_5vw', ['https://cloudairy.com/ai/ai-mindmap-generator'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
