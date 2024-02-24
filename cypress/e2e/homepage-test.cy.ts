Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Homepage Test', () => {
  beforeEach(() => {
    cy.visit('https://q.agency/')
    cy.viewport(1280, 800);
    cy.get('#wt-cli-accept-all-btn').click();
    })
   it('should click on logo in the header and verify the title of loaded page', () => {
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get('.e-heroHeading').should('be.visible')
      .should('have.text', 'We Are in the Top 15 World\'s Best Software Agencies');
   });
    it('should click on each section in the header and verify the navigated pages', () => {
      cy.get('.c-navigation__list > :nth-child(1) > .c-navigation__link').click();
      cy.get('.e-heroHeading').contains('Dedicated Software Development Team');
      cy.get('.c-navigation__list > :nth-child(2) > .c-navigation__link').click();
      cy.get('.e-heroHeading').contains('Translate Ideas Into Digital Innovation');
      cy.get('.c-navigation__list > :nth-child(3) > .c-navigation__link').click();
      cy.get('.e-heroHeading').contains('Closing the Gap Between Your Idea and Product');
      cy.get('.c-navigation__list > :nth-child(4) > .c-navigation__link').click();
      cy.get('.e-heroHeading').contains('Create Engaging Digital Products');
      cy.get('.c-navigation__list > :nth-child(5) > .c-navigation__link').click();
      cy.get('.e-heroHeading').contains('Journal');
      cy.get('.c-navigation__list > :nth-child(6) > .c-navigation__link').click();
      cy.get('.e-heroHeading').contains('Shape the Future of Digital Products');
      cy.get('.c-navigation__list > :nth-child(7) > .c-navigation__link').click();
      cy.get('.e-heroHeading').contains('Practical Innovators With Passion for Digital');
      cy.get('.c-navigation__list > :nth-child(8) > .c-navigation__link').contains('We are at LEAP 2024').should('be.visible');
    });
    it('should click on "Contact Us" button in the header and verify the contact page', () => {
      cy.get('.c-header__contact > .e-btn--secondary').contains('Contact Us').click();
      cy.get('.e-heroHeading').should('have.text', 'Contact');
      cy.wait(500);
      cy.get('.l-col--12').scrollIntoView().should('be.visible');
    });
    it('should click on "Lets collaborate" button in the header and verify the contact page', () => {
      cy.get('.c-hero__wrapper > .e-btn--primary').contains('collaborate').click();
      cy.get('.e-heroHeading').should('have.text', 'Contact');
      cy.wait(500);
      cy.get('.l-col--12').scrollIntoView().should('be.visible');
    }); 
    it('list of brands should be displayed', () => {
      cy.get('.l-col--8 > .e-h2').scrollIntoView().contains('Helping Various Brands Turn Ideas Into Impact');
      cy.get(':nth-child(2) > .e-img--100').should('be.visible');
    }); 
    it('should click on each banner and verify the navigated pages', () => {
      cy.get('[href="https://q.agency/?post_type=projects&p=509"] > .u-relative > .l-row > .c-images--single__textWrap > :nth-child(2) > .e-p--body-50').click();
      cy.get('.e-heroHeading').contains('From Idea to Web Platform in Just a Few Months');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get('[href="https://q.agency/?post_type=projects&p=1895"] > .u-relative > .l-row > .c-images--single__textWrap').click();
      cy.get('.e-heroHeading').contains('App for a Strong Training Community');
      cy.get('.l-colLg--8 > .e-h1').click();
      cy.get('.e-heroHeading').contains('App for a Strong Training Community');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get('[href="https://q.agency/?post_type=projects&p=1917"] > .u-relative > .l-row > .c-images--single__textWrap').click();
      cy.get('.e-heroHeading').contains('Contactless Measurements');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get('[href="https://q.agency/?post_type=projects&p=514"] > .u-relative > .l-row > .c-images--single__textWrap > .u-logo-40').click();
      cy.get('.e-heroHeading').contains('BBC Pandemic App');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get('.l-colLg--6 > .e-btn--secondary').click();
      cy.get('.e-heroHeading').contains('Closing the Gap Between Your Idea and Product');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get('.swiper-slide-visible > .l-col--6 > .e-btn--secondary').click();
      cy.get('.e-heroHeading').contains('ManpowerGroup - Innovative Workforce Solutions');
    }); 
    it('should click on "See all projects" button and verify the navigated page displaying banners of all projects', () => {
      cy.get('.c-cta > .e-btn--secondary').contains('See all projects').click();
      cy.get('[href="https://q.agency/?post_type=projects&p=509"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=1895"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=1917"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=514"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=1909"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=1950"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=1958"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=3832"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=3832"]').scrollIntoView().should('be.visible');
    }); 
    it('should click on "From Idea to Product" button and verify the navigated page', () => {
      cy.get('a[href="https://q.agency/product-innovation/"] > .c-twoColumnBox__box > .u-flex > .e-p--body-200')
      .contains('From Idea to Product')
      .click();
      cy.get('.e-heroHeading').contains('Translate Ideas Into Digital Innovation');
    }); 
    it('should click on "Dedicated Team" button and verify the navigated page', () => {
      cy.get('a[href="https://q.agency/for-ctos/"] > .c-twoColumnBox__box > .u-flex > .e-p--body-200')
      .contains('Dedicated Team')
      .click();
      cy.get('.e-heroHeading').contains('Dedicated Software Development Team');
    }); 
    it('"Quality and Reliability" section and its elements should be displayed', () => {
      cy.get('.c-reviews__row > :nth-child(1) > .e-h3').scrollIntoView().contains('Quality and Reliability');
      cy.get(':nth-child(1) > .c-reviews__image').scrollIntoView().should('be.visible');
      cy.get('.u-align-start > :nth-child(1)').scrollIntoView().should('be.visible');
      cy.get('.u-align-start > :nth-child(2)').scrollIntoView().should('be.visible');
      cy.get('.u-align-start > :nth-child(3)').scrollIntoView().should('be.visible');
      cy.get('.u-align-start > :nth-child(4)').scrollIntoView().should('be.visible');
    });
    it('"Awards" elements should be displayed', () => {
      cy.get('.c-listItems--desktop > .c-listItems__accordion.active > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click().contains('Best Employer Brand Adria ');
      cy.get('[data-value="1"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click().contains('Best Employer');
      cy.get('[data-value="2"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('Best Employer');
      cy.get('[data-value="3"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('European Business Awards');
      cy.get('[data-value="4"] > .c-listItems__btnWrapper > .c-listItems__svgWrapper > .c-listItems__anchor').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('Rebrand');
      cy.get('[data-value="5"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('Deloitte');
      cy.get('[data-value="6"] > .c-listItems__btnWrapper > .c-listItems__svgWrapper > .c-listItems__anchor').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('RedDot');
      cy.get('[data-value="7"] > .c-listItems__btnWrapper > .c-listItems__svgWrapper > .c-listItems__anchor').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('Financial Times');
      cy.get('[data-value="8"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('Best Mobile App Awards');
      cy.get('[data-value="9"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('German Innovation Awards');
      cy.get('[data-value="10"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('EY Entrepreneur of the year');
      cy.get('[data-value="11"] > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible').click();
      cy.get('.active > .c-listItems__accordionText > .c-listItems__textWrapper > .u-flex > .e-p').contains('Golden Key Award 2022');
    });
    it('should click on "Lets collaborate" button in the footer and verify the contact page', () => {
      cy.get('.c-cta > .e-btn--primary').scrollIntoView().contains('collaborate')
      .click();
      cy.get('.l-col--12').scrollIntoView().should('be.visible');
    });
    it('should click on logo in the footer and verify the title of loaded page', () => {
      cy.get('.c-footer__logoImg').scrollIntoView().should('be.visible')
      .click();
      cy.get('.e-heroHeading').contains('We Are in the Top 15 World\'s Best Software Agencies');
    });
    it('should be able to input email address and subscribe to newsletters ', () => {
      cy.get('#ff_4_email').clear()
      .type('svetlana.u.lebedeva@gmail.com');
      cy.get('.ff-btn').should('be.enabled');
    }); 
    it('social media icons in the footer should be displayed', () => {
      cy.get('[href="https://www.pangea.ai/vendors/q-agency/#about"] > img').scrollIntoView().should('be.visible');
      cy.get('[href="https://clutch.co/profile/q-agency"] > img').scrollIntoView().should('be.visible');
      cy.get('[href="https://www.linkedin.com/company/q_agency/"] > .fa').scrollIntoView().should('be.visible');
      cy.get('[href="https://dribbble.com/qagency"] > img').scrollIntoView().should('be.visible');
      cy.get('[href="https://web.facebook.com/WhateverTheQ/?_rdc=1&_rdr"] > .fa').scrollIntoView().should('be.visible');
      cy.get('[href="https://www.instagram.com/q_agency_ltd/"] > img').scrollIntoView().should('be.visible');
      cy.get('[href="https://www.youtube.com/c/QAgency"] > .fa').scrollIntoView().should('be.visible');
      cy.get('[href="https://twitter.com/whatever_the_q"]').scrollIntoView().should('be.visible');
    });
    it('should click on each section in the footer and verify the navigated pages', () => {
      cy.get('.c-footer__navigation > :nth-child(1) > .c-footer__navLink').scrollIntoView().contains('Culture').click();
      cy.get('.e-heroHeading').should('have.text', 'Practical Innovators With Passion for Digital');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get(':nth-child(2) > .c-footer__navLink').scrollIntoView().contains('Blog').click();
      cy.get('.e-heroHeading').contains('Journal');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get(':nth-child(3) > .c-footer__navLink').scrollIntoView().contains('Contact Us').click();
      cy.get('.e-heroHeading').should('have.text', 'Contact');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get(':nth-child(4) > .c-footer__navLink').scrollIntoView().contains('Privacy Policy').click();
      cy.get('h2').should('have.text', 'Privacy Policy');
      cy.get('.c-header__aside--desktop > .c-header__logoWrapper > a > .c-header__logoImg').click();
      cy.get(':nth-child(5) > .c-footer__navLink').scrollIntoView().contains('Legal').click();
      cy.get('h2').should('have.text', 'Legal');
    });
    it('should display homepage correctly in mobile size', () => {
      cy.viewport('iphone-6')
      cy.get('#header > .c-header__aside > .c-header__logoWrapper > a > .c-header__logoImg').should('be.visible');
      cy.get('.c-navigation__hamburger > :nth-child(1)').click();
      cy.get('.u-textCenter > :nth-child(1) > .c-navigation__link').should('be.visible');
      cy.get('.u-flex > .e-btn--secondary').should('be.visible');
      cy.get('.c-navigation__hamburger > :nth-child(2)').click();
      cy.get('.c-hero__wrapper > .e-btn--primary').should('be.visible');
      cy.get('.l-col--8 > .e-h2').scrollIntoView().should('be.visible');
      cy.get('.img-mobile').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=509"]').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=1895"] > .u-relative > .l-row > .c-images--single__textWrap').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=1917"] > .u-relative > .l-row > .c-images--single__imgWrap > .c-images--single__img').scrollIntoView().should('be.visible');
      cy.get('[href="https://q.agency/?post_type=projects&p=514"] > .u-relative > .l-row > .c-images--single__imgWrap > .c-images--single__img').scrollIntoView().should('be.visible');
      cy.get('.c-cta > .e-btn--secondary').scrollIntoView().should('be.visible');
      cy.get('a[href="https://q.agency/product-innovation/"] > .c-twoColumnBox__box > .e-p').scrollIntoView().should('be.visible');
      cy.get('a[href="https://q.agency/for-ctos/"] > .c-twoColumnBox__box > .e-p').scrollIntoView().should('be.visible');
      cy.get('.c-reviews__row > :nth-child(1) > .e-h3').scrollIntoView().should('be.visible');
      cy.get('.swiper-slide-active > .c-listItems__btnWrapper > .e-p--body-50').scrollIntoView().should('be.visible');
      cy.get('.c-cta > .e-btn--primary').scrollIntoView().should('be.visible');
      cy.get('.c-footer__logoImg').scrollIntoView().should('be.visible');
      cy.get(':nth-child(1) > .c-footer__leftColumn').scrollIntoView().should('be.visible');
    });
    });