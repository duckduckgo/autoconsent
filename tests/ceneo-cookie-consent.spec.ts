import generateCMPTests from '../playwright/runner';

generateCMPTests('ceneo-cookie-consent', ['https://www.ceneo.pl/']);

// these sites are only reachable from Poland
generateCMPTests('ceneo-cookie-consent', ['https://taniomania.pl/', 'https://www.dzidziusiowo.pl/'], {
    onlyRegions: ['PL'],
});
