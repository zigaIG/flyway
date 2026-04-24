(function () {
    var stored = localStorage.getItem('cookieConsent');
    window.cookieConsent = stored;

    if (stored === null) {
        document.addEventListener('DOMContentLoaded', function () {
            var banner = document.getElementById('cookie-banner');
            if (banner) banner.removeAttribute('hidden');
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var banner  = document.getElementById('cookie-banner');
        var accept  = document.getElementById('cookie-accept');
        var decline = document.getElementById('cookie-decline');

        if (accept) {
            accept.addEventListener('click', function () {
                localStorage.setItem('cookieConsent', 'accepted');
                window.cookieConsent = 'accepted';
                if (banner) banner.setAttribute('hidden', '');
            });
        }

        if (decline) {
            decline.addEventListener('click', function () {
                localStorage.setItem('cookieConsent', 'declined');
                window.cookieConsent = 'declined';
                if (banner) banner.setAttribute('hidden', '');
            });
        }
    });
})();
