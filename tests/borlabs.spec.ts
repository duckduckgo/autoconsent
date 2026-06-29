import generateCMPTests from '../playwright/runner';

generateCMPTests('borlabs', ['https://www.kesselheld.de/'], {
    skipRegions: ['US'],
});

// Borlabs Cookie 3.x with the Vue-based dialog (Cookie Box / Cookie Widget)
generateCMPTests('borlabs', ['https://dialog.hochbahn.de/']);
