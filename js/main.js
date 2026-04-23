// ===========================
// Translations
// ===========================
const translations = {
    hr: {
        nav_letovi:            'Letovi',
        nav_paragliding:       'Tandem Paragliding',
        nav_airplane:          'Panoramski Letovi',
        nav_locations:         'Lokacije',
        nav_gallery:           'Galerija',
        nav_about:             'O Nama',
        nav_contact:           'Kontakt',
        hero_headline:         'Doživite slobodu leta',
        hero_sub:              'Nezaboravna avantura s iskusnim licenciranim tandem pilotima',
        hero_cta:              'Rezervirajte let',
        services_title:        'Letovi',
        para_title:            'Tandem Paragliding',
        para_desc:             'Doživite uzbuđenje leta padobranom s iskusnim tandem pilotom. Ne trebate prethodno iskustvo — mi se pobrinemo za sve!',
        detail_attire:         'Duga odjeća i planinarke obvezne',
        detail_equipment:      'Sva oprema osigurana od kluba',
        detail_video:          'Mogućnost snimanja akcijskom kamerom',
        detail_minors:         'Maloljetnici uz suglasnost roditelja',
        air_title:             'Panoramski Letovi Avionom',
        air_desc:              'Uživajte u spektakularnim pogledima iz zraka uz prilagođene rute. Grupe do tri putnika, polijetanje s Varaždinskog ili Lučkog aerodroma.',
        air_detail1:           'Prilagođene rute po vašoj želji',
        air_detail2:           'Grupe do 3 putnika',
        air_detail3:           'Varaždin & Lučko aerodrom',
        locations_title:       'Lokacije',
        locations_para_heading:'Mjesta polijetanja — Paragliding',
        locations_air_heading: 'Polijetanje — Avion',
        loc_varazdin:          'Varaždin Aerodrom',
        loc_lucko:             'Lučko Aerodrom',
        gallery_title:         'Galerija',
        gallery_placeholder:   'Dodajte fotografiju',
        about_title:           'O Nama',
        about_desc:            'Aeroklub FlyWay je registrirani sportski klub sa sjedištem u Zagrebu, posvećen pružanju sigurnih i nezaboravnih iskustava letenja svima. Naši licencirani piloti brinu se o vašoj sigurnosti dok vi uživate u nezaboravnom pogledu na Hrvatsku iz zraka.',
        team_airplane_pilot:   'Pilot aviona',
        team_para_pilot:       'Pilot paraglidera',
        contact_title:         'Kontakt',
        contact_desc:          'Za rezervacije i upite, kontaktirajte nas direktno ili ispunite Google obrazac.',
        contact_address_label: 'Adresa',
        contact_phone_label:   'Telefon',
        contact_book_btn:      'Rezerviraj let',
        footer_rights:         'Sva prava pridržana.'
    },
    en: {
        nav_letovi:            'Flights',
        nav_paragliding:       'Tandem Paragliding',
        nav_airplane:          'Panoramic Flights',
        nav_locations:         'Locations',
        nav_gallery:           'Gallery',
        nav_about:             'About',
        nav_contact:           'Contact',
        hero_headline:         'Experience the Freedom of Flight',
        hero_sub:              'Unforgettable adventures with experienced licensed tandem pilots',
        hero_cta:              'Book a Flight',
        services_title:        'Flights',
        para_title:            'Tandem Paragliding',
        para_desc:             'Experience the thrill of paragliding with an experienced tandem pilot. No prior experience needed — we take care of everything!',
        detail_attire:         'Long sleeves, long pants and hiking boots required',
        detail_equipment:      'All equipment provided by the club',
        detail_video:          'Flights can be recorded with action cameras',
        detail_minors:         'Minors allowed with written parental consent',
        air_title:             'Panoramic Airplane Tours',
        air_desc:              'Enjoy spectacular aerial views on customizable routes. Groups of up to three passengers, departing from Varaždin or Lučko aerodrome.',
        air_detail1:           'Customizable routes of your choice',
        air_detail2:           'Groups of up to 3 passengers',
        air_detail3:           'Varaždin & Lučko aerodrome',
        locations_title:       'Locations',
        locations_para_heading:'Paragliding Launch Sites',
        locations_air_heading: 'Airplane Departure Points',
        loc_varazdin:          'Varaždin Aerodrome',
        loc_lucko:             'Lučko Aerodrome',
        gallery_title:         'Gallery',
        gallery_placeholder:   'Add photo',
        about_title:           'About Us',
        about_desc:            'FlyWay Aeroclub is a registered sports club based in Zagreb, dedicated to providing safe and unforgettable flying experiences for everyone. Our licensed pilots ensure your safety while you enjoy breathtaking views of Croatia from the sky.',
        team_airplane_pilot:   'Airplane Pilot',
        team_para_pilot:       'Paragliding Pilot',
        contact_title:         'Contact',
        contact_desc:          'For bookings and inquiries, contact us directly or fill out our Google Form.',
        contact_address_label: 'Address',
        contact_phone_label:   'Phone',
        contact_book_btn:      'Book a Flight',
        footer_rights:         'All rights reserved.'
    }
};

// ===========================
// Language Toggle
// ===========================
let currentLang = localStorage.getItem('fw_lang') || 'hr';

function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('fw_lang', lang);

    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'hr' ? 'EN' : 'HR';

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
}

document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'hr' ? 'en' : 'hr');
});

// ===========================
// Mobile Nav
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ===========================
// Footer Year
// ===========================
document.getElementById('year').textContent = new Date().getFullYear();

// ===========================
// Init
// ===========================
applyLanguage(currentLang);
