import generateCMPTests from '../playwright/runner';

generateCMPTests('localpartner', ['https://www.118712.fr/', 'https://toulouse.localpartner.fr/', 'https://rennes.localpartner.fr/'], {
    skipRegions: ['US'],
});
