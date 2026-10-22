import generateCMPTests from '../playwright/runner';

generateCMPTests('impress-co-jp', [
    'https://www.watch.impress.co.jp/',
    'https://pc.watch.impress.co.jp/',
    'https://forest.watch.impress.co.jp/',
    'https://book.impress.co.jp/',
]);
