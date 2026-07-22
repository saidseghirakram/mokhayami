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
    
    // Log to console for debugging
    Logger.log("Data received: " + JSON.stringify(data));
    
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
    // Log error for debugging
    Logger.log("Error: " + error.toString());
    
    // Send error response
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to view logs
function viewLogs() {
  const logs = Logger.getLog();
  Logger.log("=== EXECUTION LOG ===");
  Logger.log(logs);
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

### Problem: Status 200 but no data in Google Sheet
**This is the most common issue. Here's how to fix it:**

**Step 1: Check if script is receiving data**
1. Go back to Google Apps Script editor
2. Click on **"Executions"** tab (left sidebar)
3. Look at the most recent execution
4. Click on it to see the logs
5. Look for "Data received:" message

**Step 2: If you see the data in logs:**
- The script IS receiving data correctly
- The problem is likely the column order
- Make sure your column headers in Row 1 of the sheet match the order in the script

**Step 3: Re-deploy the script**
1. Click **"Deploy"** → **"Manage deployments"**
2. Click the delete icon (trash) to remove the old deployment
3. Click **"New deployment"** again
4. Choose **"Web app"**
5. Set **"Who has access"** to **"Anyone"**
6. Deploy and copy the new URL
7. Update your form with the NEW URL

**Step 4: Clear cache and test again**
1. Clear browser cookies/cache (Ctrl+Shift+Delete)
2. Refresh your website
3. Fill the form again and submit
4. Check Google Sheet

### Problem: No data and no logs
**Solution:**
- Make sure you deployed the script as **"Web app"** (not just saved it)
- Make sure **"Who has access"** is set to **"Anyone"**
- Check that the URL you copied has `/exec` at the end
- Try creating a brand new deployment

### Problem: Data appears but in wrong columns
**Solution:**
- The data order in the script must match column headers exactly
- Check that you added headers in THIS order:
  - A1: Timestamp
  - B1: First Name
  - C1: Last Name
  - etc.

### Problem: Form shows error message
**Solution:**
- Check browser console (F12 → Console tab)
- Look for any red error messages
- Common issue: Phone number validation - must be 10 digits starting with 05
- Date format must be: yyyy/mm/dd

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
