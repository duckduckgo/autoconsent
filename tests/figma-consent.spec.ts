import generateCMPTests from '../playwright/runner';

generateCMPTests('figma-consent', ['https://config.figma.com/'], {
    onlyRegions: ['DE', 'FR', 'GB', 'NL'],
});
