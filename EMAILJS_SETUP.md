# EmailJS Setup Guide

This project uses EmailJS to handle contact form submissions. Follow these steps to set it up:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   ```
   Subject: New message from {{from_name}} - {{subject}}
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This message was sent through your portfolio contact form.
   ```
4. Note down the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (e.g., `abcdefghijk123456`)

## 5. Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## 6. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Used
The contact form sends these variables to your EmailJS template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (currently set to "Benjamin")

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service and template are active
- Ensure your email service is properly connected

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

For higher volumes, consider upgrading to a paid plan.