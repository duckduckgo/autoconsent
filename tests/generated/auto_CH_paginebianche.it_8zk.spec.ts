import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_paginebianche.it_8zk', ['https://www.paginebianche.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
