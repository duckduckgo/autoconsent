import generateCMPTests from '../playwright/runner';

generateCMPTests('enzuzo', ['https://www.veluwe.nl/', 'https://florea.cz/', 'https://www.miltek.fr/', 'https://ar.nl/']);

// no banner shown in the US
generateCMPTests('enzuzo', ['https://www.yeticycles.com/', 'https://www.prageru.com/'], {
    skipRegions: ['US'],
});
