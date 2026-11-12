import generateCMPTests from '../playwright/runner';

generateCMPTests('bringatrailer', ['https://bringatrailer.com/'], {
    onlyRegions: ['US'],
});
