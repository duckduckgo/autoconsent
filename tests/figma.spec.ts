import generateCMPTests from '../playwright/runner';

generateCMPTests('figma', ['https://config.figma.com/'], {
    skipRegions: ['US', 'CA', 'NA', 'AU'],
});

generateCMPTests('figma', ['https://config.figma.com/'], {
    onlyRegions: ['AU'],
    testOptIn: false,
});
