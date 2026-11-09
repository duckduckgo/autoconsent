import generateCMPTests from '../playwright/runner';

generateCMPTests('ccm19', [
    'https://www.ofen.de/',
    'https://www.hm.edu/',
    'https://www.e-fellows.net/',
    'https://www.trauer.de/',
    'https://www.wiener-staatsoper.at/',
    'https://www.computerwissen.de/',
    'https://www.wohnnet.at/',
]);

generateCMPTests(
    'ccm19',
    [
        'https://solarspeicher24.de/',
        'https://www.alltours.de/',
        'https://www.buerklin.com/en/',
        'https://www.elektro-wandelt.de/',
        'https://www.mhplus-krankenkasse.de/privatkunden',
    ],
    {
        onlyRegions: ['DE'],
    },
);

generateCMPTests('ccm19', ['https://ch.rotho.com/', 'https://www.haushaltstipps.com/', 'https://www.reclam.de/'], {
    onlyRegions: ['CH'],
});
