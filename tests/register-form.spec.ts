import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage";
import { generateRegistrationData } from "../utils/formData";

test.describe("Registration form", () => {
    let registration: RegistrationPage;
    let formData: ReturnType<typeof generateRegistrationData>;

    test.beforeEach(async ({ page }) => {
        registration = new RegistrationPage(page);
        await registration.goto();
        formData = generateRegistrationData();
    });


    test('should submit form successfully when terms are accepted', async ({ page }) => {
        const expectedMessageText = `Welcome, ${formData.name}!`;
        console.log('Generated form data:', formData);
        // Fill in the form fields
        await registration.fillForm(formData);
        // Submit the form
        await registration.submitForm();
        // Assert: success message is displayed
        await expect(registration.message).toContainText(expectedMessageText);
    });

    test('should show error when submit form without terms accepted', async ({ page }) => {
        const messageText = `Please accept the terms.`;
        const noTermData = { ...formData, acceptTerms: false };
        console.log('Generated form data without terms:', noTermData);
        // Fill in the form fields
        await registration.fillForm(noTermData);
        // Submit the form
        await registration.submitForm();
        // Assert: error message for terms not accepted
        await expect(registration.message).toContainText(messageText);
    });

        test('should show error when submit form with empty Name field', async ({ page }) => {
        // initialize the RegistrationPage
        const emptyNameData = { ...formData, name: '' };
        console.log('Generated form data with empty name:', emptyNameData);
        const expectedValidationMessage = 'Please fill in this field.';
        // Fill in the form fields
        await registration.fillForm(emptyNameData);
        // Submit the form
        await registration.submitForm();
        // Assert: form should not submit - name field mandaroty
        const validationMessage = await registration.getValidationMessage();
        expect(validationMessage).toBe(expectedValidationMessage);
    });
});