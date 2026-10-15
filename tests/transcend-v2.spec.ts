import generateCMPTests from '../playwright/runner';

generateCMPTests('transcend-v2', ['https://www.peco.com/'], {
    gpc: true,
});

generateCMPTests('transcend-v2', ['https://www.airtable.com/'], {
    gpc: true,
    onlyRegions: ['US', 'NA'],
});
