try {
    const gpcNavigator = navigator as Navigator & { globalPrivacyControl?: boolean };

    if (!gpcNavigator.globalPrivacyControl) {
        Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', {
            get: () => true,
            configurable: true,
            enumerable: true,
        });
    }
} catch {
    // Ignore conflicts with browsers or other extensions that define the signal.
}
