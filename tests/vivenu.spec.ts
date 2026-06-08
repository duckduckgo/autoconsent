import generateCMPTests from '../playwright/runner';

generateCMPTests('vivenu', ['https://tickets.schalke04.de/events/monster-jam-rj197m', 'https://tickets.worldofvalue.ch/'], {
    skipRegions: ['US'],
});
