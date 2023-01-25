import { recurse } from 'cypress-recurse'

describe('Cadastro', () => {
    
    it('Formulário veículo', () => {

        cy.visit('http://sampleapp.tricentis.com/101/app.php');
        
        cy.wait(600);

        cy.get('#make').select('Toyota');

        cy.get('#model').select('Motorcycle');

        cy.get('#cylindercapacity').type('10');

        cy.get('#engineperformance').type('300');

        cy.get('#opendateofmanufacturecalender').click();
            recurse(
                () => cy.get('.ui-datepicker-month').invoke('text'),
                (n) => {
                    if (!n.includes('January')) {
                        cy.get('[title="Prev"]').click();
                        return false;
                    }
                    cy.contains('[data-handler="selectDay"] a', '2').click();
                    return true;
                }
            );

        cy.get('#numberofseats').select('7');

        cy.get('#numberofseatsmotorcycle').select('1');

        cy.get('#fuel').select('Electric Power');
        
        cy.get('#payload').type('1000');

        cy.get('#totalweight').type('1000');

        cy.get('#listprice').type('20000');

        cy.get('#annualmileage').type('10000');

        cy.get('#nextenterinsurantdata').click();

    });

    it('Formulário data seguro', () => {

        cy.get('#firstname').type('Amanda');

        cy.get('#lastname').type('Sanches');

        cy.get('#birthdate').type('07/30/1996');

        cy.get(':nth-child(4) > .group > :nth-child(2) > .ideal-radio').click();

        cy.get('#country').select('Brazil');

        cy.get('#zipcode').type('13091132');

        cy.get('#occupation').select('Farmer');

        cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check').click();

        cy.get(':nth-child(4) > .ideal-check').click();

        cy.get('#nextenterproductdata').click();

    });

    it('Dados do produto', () => {
        
        cy.get('#startdate').type('03/02/2023');

        cy.get('#insurancesum').select('3.000.000,00');

        cy.get('#meritrating').select('Bonus 3');

        cy.get('#damageinsurance').select('Full Coverage');

        cy.get('[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(2) > .ideal-check').click();

        cy.get('#courtesycar').select('Yes');

        cy.get('#nextselectpriceoption').click();

    });

    it('Opções de preço', () => {
        
        cy.get(':nth-child(4) > .ideal-radio').click();

        cy.get('#nextsendquote').click();

    });

    it('Envio de orçamento', () => {
        
        cy.get('#email').type('luccas_klefens@hotmail.com');

        cy.get('#username').type('klefens');

        cy.get('#password').type('Lu1234');

        cy.get('#confirmpassword').type('Lu1234');

        cy.get('#sendemail').click();

    });

    it('Tela sucesso', () => {
        
        cy.wait(11000);

        cy.contains('Sending e-mail success').should('be.visible').wait(1000).screenshot('tela-sucesso');

    });
});