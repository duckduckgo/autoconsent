import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_baerskintactical.com_m1y',
    [
        'https://baerskintactical.com/?utm_source=direct&utm_medium=direct&dodo=qw8aqNzzDzPF5gJuMlaPg&vb=01K8K1WTXAKJ2DJYHJS9H387GP&ga=GA1.1.2608466796.1761576119&exp=171355e4-3a71-474e-aeb0-195ea11d5861&gtm=1761576119218_4783663623636&country=GB',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
