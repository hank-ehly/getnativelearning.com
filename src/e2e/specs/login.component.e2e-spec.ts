/**
 * login.component.e2e-spec
 * get-native.com
 *
 * Created by henryehly on 2016/11/13.
 */

describe('LoginComponent', () => {
    let openBtn = $('.navbar__link_login');
    let overlay = $('.overlay');
    let modalFrame = $('.modal-frame');

    beforeEach(async() => {
        return await browser.get('/');
    });

    it('should display an overlay', () => {
        openBtn.click();
        expect(overlay.isPresent()).toBe(true);
    });

    it('should display the login modal', () => {
        openBtn.click();
        expect(modalFrame.isPresent()).toBe(true);
    });

    it ('should close the login modal after clicking the overlay', () => {
        openBtn.click();

        browser.driver.actions().mouseMove(overlay.getWebElement(), {x: 1, y: 0}).click().perform();
        browser.driver.sleep(250);

        expect(modalFrame.isPresent()).toBe(false);
    });

    it ('should close the login modal after clicking the close button', () => {
        let closeBtn = $('.modal-frame__close-button');
        openBtn.click();
        closeBtn.click();

        browser.driver.sleep(250);

        expect(modalFrame.isPresent()).toBe(false);
    });

    it('should transition to and from the email login modal view', () => {
        let emailView = $('.modal.modal_email');
        let socialView = $('.modal.modal_social');
        let socialBtn = emailView.$('.footer__link:first-child');
        let emailBtn = socialView.$('.footer__link:first-child');

        openBtn.click();
        expect(emailView.isPresent()).toBe(false);

        emailBtn.click();
        expect(emailView.isPresent()).toBe(true);
        expect(socialView.isPresent()).toBe(false);

        socialBtn.click();
        expect(socialView.isPresent()).toBe(true);
    });

    it('should transition to and from the registration modal view', () => {
        let socialView = $('.modal.modal_social');
        let registerView = $('.modal.modal_register');
        let socialBtn = registerView.$('.footer__link:first-child');
        let registerBtn = socialView.$('.footer__link:nth-child(2)');

        openBtn.click();
        expect(registerView.isPresent()).toBe(false);

        registerBtn.click();
        expect(registerView.isPresent()).toBe(true);
        expect(socialView.isPresent()).toBe(false);

        socialBtn.click();
        expect(socialView.isPresent()).toBe(true);
    });

    it('should not allow registration until all form fields are filled in', () => {
        let registerBtn = $('.modal.modal_social .footer__link:nth-child(2)');
        let emailInput = $('#email');
        let passwordInput = $('#password');
        let submitButton = element(by.buttonText('SIGN UP'));
        let passwordConfirmInput = $('#password-confirm');

        openBtn.click();
        registerBtn.click();
        emailInput.sendKeys('foo@bar');

        passwordInput.sendKeys('password12345');
        expect(submitButton.getAttribute('disabled')).toBeTruthy();

        passwordConfirmInput.sendKeys('password12345');
        expect(submitButton.getAttribute('disabled')).toBeFalsy();
    });

    it('should display the dashboard after successful email login', () => {
        let emailBtn = $('.modal.modal_social .footer__link:first-child');
        let emailInput = $('#email');
        let passwordInput = $('#password');
        let submitButton = element(by.buttonText('SIGN IN'));
        let dashboardComponent = $('gn-dashboard');

        openBtn.click();
        emailBtn.click();
        emailInput.sendKeys('foo@bar');
        passwordInput.sendKeys('password');

        expect(dashboardComponent.isPresent()).toBe(false);

        submitButton.click();
        expect(dashboardComponent.isPresent()).toBe(true);
    });
});
