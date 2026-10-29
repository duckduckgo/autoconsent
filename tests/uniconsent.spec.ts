import generateCMPTests from '../playwright/runner';

generateCMPTests('Uniconsent', ['https://www.hardwareinside.de/']);

generateCMPTests('Uniconsent', ['https://www.officialcharts.com/'], {
    skipRegions: ['AU', 'CA', 'JP'],
});

generateCMPTests('Uniconsent', ['https://road.cc/'], {
    skipRegions: ['US', 'AU', 'CA', 'JP'],
});

// popup rendered in the light DOM instead of a shadow root
generateCMPTests('Uniconsent', ['https://www.offen.net/'], {
    onlyRegions: ['DE'],
});
