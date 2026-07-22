# Google Sheets Integration Guide - English Version

## Step 1: Create Google Sheet

1. Go to https://sheets.google.com
2. Click on "+" to create a new spreadsheet
3. Rename it to: "Camp Registration Form" or any name you want
4. Make sure you're logged in to your Google account

---

## Step 2: Create Column Headers

In the first row (Row 1), add these column headers **one by one** from left to right:

**Column A:** Timestamp
**Column B:** First Name
**Column C:** Last Name
**Column D:** Birth Date
**Column E:** Birth Place
**Column F:** Education Level
**Column G:** Phone Number
**Column H:** Previous Camp
**Column I:** Previous Camp Details
**Column J:** Memorization Level
**Column K:** Address
**Column L:** Email
**Column M:** Referral Source

---

## Step 3: Set Up Google Apps Script

1. In your Google Sheet, click on **"Extensions"** menu (top menu bar)
2. Select **"Apps Script"**
3. A new window will open with the Apps Script editor

---

## Step 4: Copy and Paste the Script

**Delete** the default code and paste this code:

  ```javascript
  function doPost(e) {
    try {
      // Get data from the request
      const data = JSON.parse(e.postData.contents);
      
      // Get the active sheet
      const sheet = SpreadsheetApp.getActiveSheet();
      
      // Add data in a new row
      sheet.appendRow([
        data.timestamp,           // Timestamp
        data.name,                // First Name
        data.lastName,            // Last Name
        data.birthDate,           // Birth Date
        data.birthPlace,          // Birth Place
        data.educationLevel,      // Education Level
        data.phone,               // Phone Number
        data.previousCamp,        // Previous Camp
        data.previousCampDetails, // Previous Camp Details
        data.memorizationLevel,   // Memorization Level
        data.address,             // Address
        data.email,               // Email
        data.referralSource       // Referral Source
      ]);
      
      // Send success response
      return ContentService.createTextOutput(JSON.stringify({success: true}))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
      // Send error response
      return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  ```

---

## Step 5: Deploy the Script

1. Click on **"Deploy"** button (top right area)
2. Click **"New deployment"**
3. Click the dropdown menu next to "Select type" and choose **"Web app"**
4. Fill in the details:
   - **Execute as:** Choose your email account (your Google account)
   - **Who has access:** Choose **"Anyone"**
5. Click the **"Deploy"** button
6. **COPY the URL** that appears (it looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent`)

---

## Step 6: Update Your Form Code

Open the file: `src/components/RegistrationForm.tsx`

Find this line at the top:
```javascript
const SCRIPT_URL = "ضع الرابط هنا";
```

Replace it with:
```javascript
const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent";
```

**Paste the URL you copied in Step 5 (replace YOUR_SCRIPT_ID with the actual URL)**

---

## Step 7: Test the Form

1. Go to your website
2. Navigate to the Registration section
3. Fill in the form with test data
4. Click "Submit"
5. Go back to your Google Sheet - the data should appear automatically!

---

## Troubleshooting

### Problem: Data does not appear in the Google Sheet
**Solution:**
- Check that the SCRIPT_URL is correct
- Make sure "Who has access" is set to "Anyone"
- Try creating a new deployment

### Problem: Form shows success but no data in sheet
**Solution:**
- Check the deployment URL is complete and correct
- Verify all column headers are in the correct order
- Clear browser cache and refresh

### Problem: Error message in form
**Solution:**
- Check browser console (F12 → Console tab) for error details
- Verify the Google Apps Script code was copied correctly
- Make sure you published the script as a Web app

---

## Visual Guide - Column Order

When you set up your Google Sheet, make sure columns are in this order:

1st Column = Timestamp
2nd Column = First Name
3rd Column = Last Name
4th Column = Birth Date
5th Column = Birth Place
6th Column = Education Level
7th Column = Phone Number
8th Column = Previous Camp
9th Column = Previous Camp Details
10th Column = Memorization Level
11th Column = Address
12th Column = Email
13th Column = Referral Source

---

## Checklist

- [ ] Google Sheet created
- [ ] Column headers added in correct order
- [ ] Google Apps Script code copied
- [ ] Script deployed as "Web app"
- [ ] URL copied from deployment
- [ ] SCRIPT_URL updated in RegistrationForm.tsx
- [ ] Form tested with test data
- [ ] Data appeared in Google Sheet

**Done! All registration data will now be saved to your Google Sheet automatically!** ✅

---

## Quick Reference - Column Names

```
A1: Timestamp
B1: First Name
C1: Last Name
D1: Birth Date
E1: Birth Place
F1: Education Level
G1: Phone Number
H1: Previous Camp
I1: Previous Camp Details
J1: Memorization Level
K1: Address
L1: Email
M1: Referral Source
```

Copy and paste each one into the sheet, one by one, from left to right.

---

## Need Help?

If something doesn't work:
1. Check that you followed ALL steps in order
2. Verify the deployment was successful (should show a URL)
3. Make sure "Who has access" is set to "Anyone"
4. Test by filling the form and clicking submit
5. Check Google Sheet for new row with your test data
