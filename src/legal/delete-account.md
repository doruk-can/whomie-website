# Delete your Whomie account

**Last updated: October 11, 2026**

> **The short version**
>
> This summary is here for your convenience. If the summary and the full text below say different things, the full text governs.
>
> - Delete your account in the app: Settings → Delete Account.
> - No app? Email admin@whomie.com from your account's email address with the subject "Delete my account".
> - Your profile and room listing disappear from Whomie at once.
> - Some data is kept for a limited time. Section 3 lists it.

<a id="in-the-app"></a>
## 1. Delete your account in the app

1. Open Whomie and sign in.
2. Open the **Profile** tab and tap the **gear icon** (Settings).
3. Tap **Delete Account**.
4. Confirm.

Deleting your account cannot be undone.

<a id="what-is-deleted"></a>
## 2. What is deleted, and when

**At once:** your account and profile, and your room listing, are removed from Whomie. Other users can no longer find you or your listing, and you can no longer sign in. The people you chatted with no longer see your chats in the app.

**Later:** a copy of your account and listing is kept in an archive and deleted after [[DECIDE: archive purge period, e.g. 30 days — backend must implement]]. Your profile and listing photos are deleted within [[DECIDE: same period — backend must implement]].

**Photos removed earlier:** photos you removed while using the app, and the photos of listings you deleted, are deleted from storage within [[DECIDE: period — app/backend must implement]].

<a id="what-is-kept"></a>
## 3. What is kept, and why

- **Chats:** chat rooms and messages stay stored in Google Firebase Cloud Firestore until [[DECIDE: period, or delete/anonymise — backend must implement]].
- **Reports and contact-form messages** are kept for [[DECIDE: retention period and reason for reports and contact messages]].
- **Data the law requires us to keep**, or that we need for a legal claim, is kept only as long as needed.

Our [Privacy Policy](https://www.whomie.com/privacy-policy/#retention) has the details.

<a id="by-email"></a>
## 4. If you cannot use the app

Email **admin@whomie.com** with the subject **"Delete my account"**. Send it from the email address of your Whomie account, so we know the request is yours. We may ask you to confirm it. We delete the account as described above and reply within 30 days at the latest.

<a id="contact"></a>
## 5. Questions

Write to admin@whomie.com.
