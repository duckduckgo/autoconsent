import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiesinfo-closecookies', ['https://spmzoz-slupsk.pl/', 'https://aktywator.witaj-swiecie.pl/', 'https://poldan.pl/']);

// only reachable from Polish IPs
generateCMPTests('cookiesinfo-closecookies', ['https://edu.gdansk.pl/'], {
    onlyRegions: ['PL'],
});
