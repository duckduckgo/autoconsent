import generateCMPTests from '../playwright/runner';

generateCMPTests('mega.io', ['https://mega.nz/', 'https://mega.io/pricing'], { skipRegions: ['US'] });
