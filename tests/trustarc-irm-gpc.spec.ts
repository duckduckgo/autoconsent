import generateCMPTests from '../playwright/runner';

// The TrustArc IRM GPC banner only renders when the browser sends a Global
// Privacy Control signal (Sec-GPC: 1 / navigator.globalPrivacyControl). Test
// runners do not enable GPC, so the popup will not appear in CI. We register
// the rule with no test URLs to avoid flaky assertions.
generateCMPTests('trustarc-irm-gpc', []);
