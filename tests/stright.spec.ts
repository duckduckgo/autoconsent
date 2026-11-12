import generateCMPTests from '../playwright/runner';

generateCMPTests('stright', [
    // 'https://www.kadokawa.co.jp/', // does not serve the banner to CI egress IPs, only reproducible via a regional proxy
    'https://www.toei-anim.co.jp/',
    'https://www.makita.co.jp/',
    'https://www.yamada-denki.jp/',
]);

// settings dialog with category toggles and no reject-all button; mapfan.com is only reachable from Japan
generateCMPTests('stright', ['https://mapfan.com/'], {
    onlyRegions: ['JP'],
});

// no accept-all button in the first layer
generateCMPTests('stright', ['https://www.subaru.jp/'], {
    onlyRegions: ['JP'],
    testOptIn: false,
});
