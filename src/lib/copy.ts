/**
 * Every word on the site, in English and Turkish. Components never hard-code a
 * sentence; they read it from here. The legal texts are the exception: they
 * live as Markdown in src/legal/ and are copied from the app repo unchanged.
 *
 * Titles stay under 60 characters and descriptions under 155, or search
 * results truncate them. `npm run verify` fails if one grows past that.
 *
 * Voice: the home page speaks to "sen", like the headline. Support and the
 * 404 speak to "siz", like the app's own Turkish strings and the legal texts.
 */
import { LOCALES as LOCALE_LIST } from './site.mjs';

export const LOCALES = LOCALE_LIST as readonly ['en', 'tr'];
export type Locale = 'en' | 'tr';

export const other = (lang: Locale): Locale => (lang === 'en' ? 'tr' : 'en');

/** For pages under src/pages/[...lang]/: English at the root, Turkish under /tr/. */
export function localePaths() {
  return LOCALES.map((lang) => ({
    params: { lang: lang === 'en' ? undefined : lang },
    props: { lang },
  }));
}

const en = {
  /** this language's name, in itself; the switch on the other language's pages shows it */
  name: 'English',

  meta: {
    home: {
      title: 'Whomie — find a room or a flatmate near you',
      description:
        'Whomie shows you people and rooms near you. Filter by budget, distance and age, and chat in the app before you meet.',
    },
    privacy: {
      title: 'Privacy Policy — Whomie',
      description:
        'What data Whomie collects, why, who receives it, how long it is kept, and your rights under KVKK and the GDPR.',
    },
    terms: {
      title: 'Terms and Conditions — Whomie',
      description:
        'The rules for using Whomie: who can use it, your content, acceptable use, meeting people safely, reporting and blocking.',
    },
    deleteAccount: {
      title: 'Delete your account — Whomie',
      description:
        'How to delete your Whomie account in the app or by email, what is deleted at once, and what is kept for a limited time.',
    },
    support: {
      title: 'Support — Whomie',
      description:
        'Get help with Whomie: contact us, report or block a user, and delete your account.',
    },
    notFound: {
      title: 'Page not found — Whomie',
      description: 'This page does not exist. Go to the Whomie home page.',
    },
  },

  nav: {
    home: 'Home',
    privacy: 'Privacy',
    terms: 'Terms',
    deleteAccount: 'Delete account',
    support: 'Support',
  },

  home: {
    headline: 'Find a room or a flatmate near you.',
    features: [
      'See people and rooms near you.',
      'Filter by budget, distance and age.',
      'Chat in the app before you meet.',
    ],
    contact: 'Questions? Write to',
  },

  stores: {
    appStore: 'Download Whomie on the App Store',
    playStore: 'Get Whomie on Google Play',
  },

  support: {
    heading: 'Support',
    lede: 'Need help with Whomie? Write to us, or find the answer below.',
    contact: {
      heading: 'Contact us',
      before: 'Write to',
      after: 'If it is about your account, write from your account’s email address so we can find it.',
    },
    report: {
      heading: 'Report a user or a listing',
      steps: [
        'On a profile: tap the flag icon at the top right, then confirm.',
        'On a room listing: tap the flag icon at the top right, then confirm.',
        'In a chat: tap the icon at the top right, then Report User.',
      ],
      after: 'We review reports and may remove content, warn users, or suspend or close accounts.',
      danger: 'If you are in danger, contact the police or emergency services first.',
    },
    block: {
      heading: 'Block a user',
      steps: [
        'Open your chat with them.',
        'Tap the icon at the top right, then Block User.',
        'Confirm.',
      ],
      after:
        'Blocking hides you and the blocked user from each other’s people and chat lists. Neither of you can start a new chat with the other. Messages you have already exchanged remain.',
      more: 'Reporting and blocking in our Terms',
    },
    delete: {
      heading: 'Delete your account',
      steps: [
        'Open the Profile tab and tap the gear icon (Settings).',
        'Tap Delete Account.',
        'Confirm.',
      ],
      after: 'Deleting your account cannot be undone. If you cannot use the app, you can also ask by email.',
      more: 'What is deleted, what is kept, and how to ask by email',
    },
  },

  notFound: {
    heading: 'Page not found',
    body: 'This page does not exist, or it has moved.',
    back: 'Go to the home page',
  },

  a11y: {
    skip: 'Skip to content',
    home: 'Whomie home',
    footer: 'Site',
  },
};

const tr: typeof en = {
  name: 'Türkçe',

  meta: {
    home: {
      title: 'Whomie — yakınında oda ya da ev arkadaşı bul',
      description:
        'Whomie yakınındaki kişileri ve odaları gösterir. Bütçeye, mesafeye ve yaşa göre filtrele, tanışmadan önce uygulamada sohbet et.',
    },
    privacy: {
      title: 'Gizlilik Politikası ve Aydınlatma Metni — Whomie',
      description:
        'Whomie hangi verileri topluyor, neden kullanıyor, kimlere aktarıyor, ne kadar saklıyor; KVKK ve GDPR kapsamındaki haklarınız.',
    },
    terms: {
      title: 'Kullanım Koşulları — Whomie',
      description:
        'Whomie’yi kullanma kuralları: kimler kullanabilir, içerikleriniz, kabul edilebilir kullanım, güvenli buluşma, şikâyet ve engelleme.',
    },
    deleteAccount: {
      title: 'Hesabınızı silin — Whomie',
      description:
        'Whomie hesabınızı uygulamadan ya da e-postayla nasıl silersiniz, neler hemen silinir, neler sınırlı bir süre saklanır.',
    },
    support: {
      title: 'Destek — Whomie',
      description:
        'Whomie için yardım: bize yazın, bir kullanıcıyı şikâyet edin ya da engelleyin, hesabınızı silin.',
    },
    notFound: {
      title: 'Sayfa bulunamadı — Whomie',
      description: 'Bu sayfa yok. Whomie ana sayfasına dönün.',
    },
  },

  nav: {
    home: 'Ana sayfa',
    privacy: 'Gizlilik',
    terms: 'Koşullar',
    deleteAccount: 'Hesabı sil',
    support: 'Destek',
  },

  home: {
    headline: 'Yakınında oda ya da ev arkadaşı bul.',
    features: [
      'Yakınındaki kişileri ve odaları gör.',
      'Bütçeye, mesafeye ve yaşa göre filtrele.',
      'Tanışmadan önce uygulamada sohbet et.',
    ],
    contact: 'Soruların mı var? Yaz:',
  },

  stores: {
    appStore: 'Whomie’yi App Store’dan indirin',
    playStore: 'Whomie’yi Google Play’den indirin',
  },

  support: {
    heading: 'Destek',
    lede: 'Whomie ile ilgili yardıma mı ihtiyacınız var? Bize yazın ya da cevabı aşağıda bulun.',
    contact: {
      heading: 'Bize yazın',
      before: 'Adresimiz:',
      after: 'Hesabınızla ilgiliyse, hesabınızı bulabilmemiz için hesabınızın e-posta adresinden yazın.',
    },
    report: {
      heading: 'Bir kullanıcıyı veya ilanı şikâyet edin',
      steps: [
        'Profilde: sağ üstteki bayrak simgesine dokunun ve onaylayın.',
        'Oda ilanında: sağ üstteki bayrak simgesine dokunun ve onaylayın.',
        'Sohbette: sağ üstteki simgeye dokunun ve Kullanıcıyı şikayet et’i seçin.',
      ],
      after: 'Şikâyetleri inceler; içerik kaldırabilir, kullanıcıları uyarabilir, hesapları askıya alabilir veya kapatabiliriz.',
      danger: 'Tehlikedeyseniz önce polisi veya acil yardım hattını (112) arayın.',
    },
    block: {
      heading: 'Bir kullanıcıyı engelleyin',
      steps: [
        'O kişiyle olan sohbetinizi açın.',
        'Sağ üstteki simgeye dokunun ve Kullanıcıyı engelle’yi seçin.',
        'Onaylayın.',
      ],
      after:
        'Engellediğinizde siz ve engellediğiniz kişi birbirinizin kişi ve sohbet listelerinde görünmezsiniz. İkiniz de diğeriyle yeni sohbet başlatamazsınız. Daha önce yazıştığınız mesajlar kalır.',
      more: 'Kullanım Koşulları’nda şikâyet ve engelleme',
    },
    delete: {
      heading: 'Hesabınızı silin',
      steps: [
        'Profil sekmesini açın ve dişli simgesine (Ayarlar) dokunun.',
        'Hesabı Sil’e dokunun.',
        'Onaylayın.',
      ],
      after: 'Hesap silme işlemi geri alınamaz. Uygulamayı kullanamıyorsanız e-postayla da isteyebilirsiniz.',
      more: 'Neler silinir, neler saklanır, e-postayla nasıl istenir',
    },
  },

  notFound: {
    heading: 'Sayfa bulunamadı',
    body: 'Bu sayfa yok ya da taşındı.',
    back: 'Ana sayfaya dönün',
  },

  a11y: {
    skip: 'İçeriğe geç',
    home: 'Whomie ana sayfa',
    footer: 'Site',
  },
};

export const copy: Record<Locale, typeof en> = { en, tr };
