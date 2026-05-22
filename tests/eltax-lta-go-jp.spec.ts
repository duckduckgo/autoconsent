import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'eltax-lta-go-jp',
    ['https://portal.payment.eltax.lta.go.jp/efp/xnd/index', 'https://portal.payment.eltax.lta.go.jp/efp/xnd/inputkey'],
    {
        testSelfTest: false,
    },
);
