import generateCMPTests from '../playwright/runner';

generateCMPTests('outdooractive', ['https://www.alpenvereinaktiv.com/de/', 'https://www.altenberg.de/en/']);

generateCMPTests(
    'outdooractive',
    [
        'https://www.maps.engadin.ch/en/',
        'https://www.maps.viamala.ch/de/reisefuehrer/schweiz/viamala/1607085/',
        'https://outdoor.glarnerland.ch/en/',
    ],
    { onlyRegions: ['CH'] },
);

generateCMPTests('outdooractive', ['https://www.tourenplaner-rheinland-pfalz.de/en/'], { onlyRegions: ['DE'] });
