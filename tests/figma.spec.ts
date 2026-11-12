import generateCMPTests from '../playwright/runner';

generateCMPTests('figma', ['https://www.figma.com/', 'https://config.figma.com/'], {
    skipRegions: ['US'],
});
