# Whomie Privacy Policy

**Last updated: October 11, 2026**

> **The short version**
>
> This summary is here for your convenience. If the summary and the full text below say different things, the full text governs.
>
> - Whomie helps people who are looking for a room or a flatmate find each other. To do that, other Whomie users see your profile, your room listing and your location (see section 4).
> - Only people who are signed in to Whomie can browse profiles and listings. They never see your email address, surname or password.
> - We use your location only while you use the app, and only if you allow it.
> - We do not show ads. We do not use analytics tools. We do not track you across other apps or websites. We do not sell your data.
> - We use service providers for hosting, photo storage, chat, email, maps, sign-in and notifications. Most of them are based in the United States. Section 5 names them.
> - You can delete your account in the app at any time: Settings → Delete Account. Section 7 explains what happens next.
> - You have rights over your data under Turkish law (KVKK) and, if you are in the EU, the GDPR. Write to admin@whomie.com to use them.

## Contents

1. [Who we are](#who-we-are)
2. [What we collect](#what-we-collect)
3. [Why we use your data, and our legal bases](#legal-bases)
4. [What other users see](#what-others-see)
5. [Who receives your data](#sharing)
6. [International transfers](#international-transfers)
7. [How long we keep data](#retention)
8. [Security](#security)
9. [Your rights](#your-rights)
10. [Children](#children)
11. [Device permissions](#permissions)
12. [No ads, no analytics, no tracking, no sale](#no-ads-no-tracking)
13. [Changes to this policy](#changes)
14. [Contact](#contact)

---

<a id="who-we-are"></a>
## 1. Who we are

Whomie is a mobile app for people who are looking for a room or a flatmate. You create a profile, browse people and room listings near a location, filter them, and chat.

The controller is Doruk Can, the individual developer who publishes the Whomie app. In this policy, "Whomie", "we", "us" and "our" mean the publisher.

We are the data controller ("veri sorumlusu" under the Turkish Personal Data Protection Law No. 6698, "KVKK") for the personal data described here. That means we decide why and how it is used. If the EU General Data Protection Regulation ("GDPR") applies to you, we are the controller under the GDPR too.

You can reach us at **admin@whomie.com**.

<a id="what-we-collect"></a>
## 2. What we collect

We collect data in three ways: you give it to us in the app; your device sends it when you allow it (for example your location); and Google or LinkedIn send it when you use them to sign in. All of it is collected electronically, through the app.

| Data | Why we use it | Where it is stored | Who receives it |
|---|---|---|---|
| **Account details:** name, surname, email address, password, birthday, app language | To create and run your account, to sign you in, and to check that you are 18 or older | Our database. Your password is stored only as a bcrypt hash, never in readable form | Our hosting providers. Other signed-in users see your name and age, not your birthday (section 4) |
| **Profile:** gender, gender preference, nationality, languages, traits and preferences, bio, maximum budget, minimum stay length, preferred move date, education (institution, major, graduation year), work (title, company) | To show your profile and to let people search and filter | Our database | Our hosting providers. Other signed-in users see part of it (section 4), but never your nationality or gender preference |
| **Photos** for your profile and room listing | To show them on your profile or listing | Amazon S3; delivered through Amazon CloudFront | Other signed-in users, anyone who has a photo's link (section 4), Amazon Web Services |
| **Location:** coordinates, district and city | To show people and rooms near you | Our database | Other signed-in users (section 4), our hosting providers, your device's map service (section 5) |
| **Room listing:** location, description, rent, deposit, billing type, minimum stay, available date, photos | To publish your listing | Our database; photos in Amazon S3 | Other signed-in users, including the exact location on a map (section 4); our hosting providers |
| **Chat:** chat rooms and messages (sender, text, time, when it was read) | To let you talk with other users | Google Firebase Cloud Firestore | Shown in the app only to the people in the chat; Google |
| **Push token:** the Expo push token of your device | To send you notifications | With your account in our database | Expo, Apple and Google push services |
| **Sign-in with Google or LinkedIn:** name, email address, profile identifiers, the provider's access token; from LinkedIn also your profile picture and positions | To sign you in with that provider | With your account in our database | Google or LinkedIn (they send it to us) |
| **Security data:** email-verification and password-reset codes, last sign-in and sign-out dates | To verify your email, reset your password and protect your account | Our database; codes are emailed through Amazon SES | Amazon Web Services |
| **Reports and blocks:** who reported whom, and whether it was a user or a room listing; your block list | To keep Whomie safe and to hide blocked users | Our database | Our hosting providers |
| **Contact form:** full name, email address, message | To answer you | Our database | Our hosting providers |
| **App updates:** your IP address and an app-install identifier, sent when the app checks for updates at launch | To deliver app updates | Expo's update service | Expo |
| **Technical data:** request data and IP addresses | To run the server, find faults and keep it secure | Heroku and New Relic | Heroku, New Relic |
| **On your device:** your sign-in token, push token and language | To keep you signed in and remember your language | Your device's secure storage | No one |

If you write to admin@whomie.com, your email and what you write are kept in our mailbox, which is hosted by Google Workspace.

We do not ask for sensitive data, such as your health, religion or political views. Please do not put such things in your bio or in chats.

"Our database" is a MongoDB database run by our cloud database provider. Its servers may be outside Türkiye, for example in the US or the EU.

<a id="legal-bases"></a>
## 3. Why we use your data, and our legal bases

We use your data only for the purposes in section 2. The legal basis depends on the purpose.

| Purpose | KVKK (article 5) | GDPR (article 6) |
|---|---|---|
| Running your account, profile and listing; checking that you are 18 or older; showing people and rooms nearby; chat; notifications; sign-in with Google or LinkedIn | Necessary to set up and perform our contract with you (art. 5(2)(c)) | Performance of a contract (art. 6(1)(b)) |
| Keeping the service secure, handling reports and blocks, preventing abuse, server logs | Our legitimate interest, as long as it does not harm your fundamental rights (art. 5(2)(f)) | Legitimate interests (art. 6(1)(f)) |
| Answering your messages | Our legitimate interest (art. 5(2)(f)), or the contract when it is about your account | Legitimate interests (art. 6(1)(f)) or contract (art. 6(1)(b)) |
| Meeting legal duties, for example answering a lawful request from an authority | Legal obligation (art. 5(2)(ç)) | Legal obligation (art. 6(1)(c)) |
| Defending or bringing legal claims | Necessary to establish, use or protect a right (art. 5(2)(e)) | Legitimate interests (art. 6(1)(f)) |

Your location and notifications are used only when you allow them on your device. You can turn them off at any time in your device settings.

We do not make decisions about you by automated means that have a legal or similarly significant effect on you. Search filters only sort and narrow what you see.

<a id="what-others-see"></a>
## 4. What other users see

Only signed-in users can see profiles and listings.

- **Your profile** shows your name, age, photos, bio, gender, languages, traits, education, work, maximum budget, minimum stay, preferred move date and location. Other users see your age, not your birthday.
- **Your room listing** shows the listing, plus your name, age, education, work and photos. The listing's exact location is shown as a point on a street-level map.
- **Your location:** Other signed-in users can see the location you set for your profile, and room listings show their location on a map.
- **Your chats** are shown in the app only to the people in the chat.
- **Your photos** are stored at web links that do not need a sign-in: anyone who has the link to a photo can open it.
- Other users **never** see your email address, surname, password, nationality or gender preference.

Other users can copy or screenshot what you share, and we cannot control that. Share only what you are comfortable with.

<a id="sharing"></a>
## 5. Who receives your data

We share your data only with other users (section 4) and with the service providers below, who work for us and handle it on our instructions. These providers are bound to protect your data at least as well as this policy does.

| Provider | What they do for us | Data they handle |
|---|---|---|
| **Heroku** (Salesforce) | Runs our backend server | All data that passes through our server, including IP addresses |
| **Our cloud database provider** (servers may be outside Türkiye, for example in the US or the EU) | Hosts our database | Account, profile, location, listings, push tokens, reports, blocks, contact messages |
| **New Relic** | Monitors the server's performance | Technical request data and IP addresses |
| **Amazon Web Services** (Amazon S3, Amazon CloudFront, Amazon SES) | Stores and delivers photos; sends verification and password-reset emails | Photos; your email address and the codes we send you |
| **Google Firebase** (Cloud Firestore) | Stores and delivers chat messages | Chat rooms and messages |
| **Google Maps and Google Geocoding** | Shows maps and looks up places | The places you search for and the map area you view |
| **Your device's map service:** Apple (iOS) or Google (Android) | Turns your coordinates into a district and city | Your coordinates |
| **Expo** | Sends push notifications and app updates | Your push token and the notification (the text is generic, "Whomie" and a short message, not the content of your chats); for updates, your IP address and an app-install identifier |
| **Apple and Google push services** | Deliver notifications to your device | Your push token and the notification |
| **Google Workspace** | Hosts our admin@whomie.com mailbox | Emails you send us |
| **Google and LinkedIn sign-in** | Let you sign in with an existing account, if you choose | What they send us (section 2); the same applies to Apple, if Sign in with Apple is offered |

Your device's map service (Apple on iOS, Google on Android) turns your coordinates into a district and city.

We may also disclose data when the law requires it, for example to a court or a public authority with a lawful request, or to protect the safety of users.

<a id="international-transfers"></a>
## 6. International transfers

Some of our providers store or process data outside Türkiye and the EU, for example in the United States. Most of them are based there: Heroku (Salesforce), New Relic, Amazon Web Services, Google, Apple, Expo and LinkedIn. Our cloud database provider's servers may also be outside Türkiye, for example in the US or the EU.

These countries may protect personal data less than Türkiye or the EU do. When we transfer data abroad, we do so in line with applicable data protection law (KVKK and, where it applies, the GDPR).

<a id="retention"></a>
## 7. How long we keep data

**While your account is open**, we keep your account, profile, photos, listings and chats, because the service needs them.

**Photos you remove and listings you delete** disappear from the app right away. Stored copies follow the rule below.

**When you delete your account** (in the app: Settings → Delete Account), your profile, listings and chats disappear from the app right away. Other users can no longer find you or your listing, and the people you chatted with no longer see your chats.

**Copies we may keep.** Copies of your data (including the account archive and photos), chat records, reports, contact messages and server logs may be kept for as long as needed to meet legal obligations, resolve disputes, enforce our terms and prevent abuse. They are then deleted or anonymised, as KVKK article 7 requires.

Our [account deletion page](https://www.whomie.com/delete-account/) has the steps.

<a id="security"></a>
## 8. Security

We take reasonable steps to protect your data:

- Your password is stored only as a bcrypt hash. We cannot read it.
- Your sign-in token is kept in your device's secure storage.
- Only signed-in users can browse profiles and listings, and they never see email addresses or passwords.

No method of transmission over the internet or of electronic storage is completely secure, so we cannot guarantee absolute security. If a breach affects your data, we will tell you and the authorities as the law requires.

<a id="your-rights"></a>
## 9. Your rights

**Under KVKK (article 11)** you have the right to:

- learn whether we process your personal data, and ask for information about it;
- learn why we process it and whether we use it for that purpose;
- know who we transfer it to, in Türkiye or abroad;
- ask us to correct it if it is incomplete or wrong;
- ask us to delete or destroy it under the conditions in article 7;
- ask us to tell the recipients about a correction or deletion;
- object to a result against you that comes only from automated analysis of your data; and
- claim compensation if you suffer damage because your data was processed unlawfully.

**Under the GDPR**, if it applies to you, you have the right to access, correct and delete your data, to restrict or object to its use, to receive it in a portable format, and to withdraw any consent at any time.

**How to use your rights.** You can correct your profile, block users or delete your account in the app. For anything else, write to admin@whomie.com from the email address of your account, so we know the request is yours. We may ask you to confirm your identity. It is free. We reply as soon as we can and within 30 days at the latest (KVKK article 13; one month under the GDPR).

**Complaints.** Under KVKK, you first apply to us. If we reject your request, do not reply within 30 days, or you find our answer insufficient, you can complain to the Personal Data Protection Board (Kişisel Verileri Koruma Kurulu) at kvkk.gov.tr. If you are in the EU, you can complain to the data protection authority in your country.

<a id="children"></a>
## 10. Children

Whomie is only for people aged 18 or older. You must give your birthday when you sign up, and the app does not let you continue if you are under 18. If we learn that a user is under 18, we will delete the account.

<a id="permissions"></a>
## 11. Device permissions

The app asks for these permissions. You can say no, or change your mind later in your device settings.

- **Location.** Only while you use the app (foreground only), never in the background. We use your device's "balanced" accuracy setting, not the most precise one.
- **Photos.** To let you pick photos for your profile or room listing. We upload only the photos you choose.
- **Notifications.** To tell you when something new happens in the app. You can turn them off at any time.

<a id="no-ads-no-tracking"></a>
## 12. No ads, no analytics, no tracking, no sale

- We do not show ads.
- We do not use any analytics or advertising tools in the app.
- We do not track you across other companies' apps or websites.
- We do not sell your personal data, and we do not share it for advertising.

Firebase is used only for chat.

<a id="changes"></a>
## 13. Changes to this policy

We may update this policy when the app or the law changes, and we will change the "Last updated" date. If a change is important, we will also tell you in the app or by email before it takes effect.

<a id="contact"></a>
## 14. Contact

Questions, requests or complaints: **admin@whomie.com**

This policy is available in English and Turkish. Our [Terms and Conditions](https://www.whomie.com/terms-conditions/) explain the rules for using Whomie.
