import generateCMPTests from '../playwright/runner';

generateCMPTests('baden-wuerttemberg.de', ['https://baden-wuerttemberg.de', 'https://finanzamt-bw.fv-bwl.de/'], {
    skipRegions: ['US'],
});
