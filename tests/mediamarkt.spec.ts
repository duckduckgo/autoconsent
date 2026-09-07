import generateCMPTests from '../playwright/runner';

generateCMPTests('mediamarkt.de', ['https://mediamarkt.de', 'https://www.mediamarkt.nl/nl/'], {
    skipRegions: ['US', 'FR', 'GB'],
});
