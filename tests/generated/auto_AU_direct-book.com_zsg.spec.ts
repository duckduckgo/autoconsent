import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_direct-book.com_zsg',
    [
        'https://direct-book.com/properties/vanbrughhousehotel?locale=en&amp;checkInDate=2026-01-18&amp;checkOutDate=2026-01-19&amp;items%5B0%5D%5Badults%5D=1&amp;items%5B0%5D%5Bchildren%5D=0&amp;items%5B0%5D%5Binfants%5D=0&amp;currency=GBP&amp;trackPage=no',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
