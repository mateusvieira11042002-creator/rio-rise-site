// ================================================
// EXEMPLOS DE INTEGRAÇÕES DE PAGAMENTO
// ================================================

// Este arquivo contém exemplos de como integrar diferentes 
// formas de pagamento ao seu site

// ================================================
// 1. PIX (Brasil)
// ================================================

/**
 * Gerar QR Code para Pix
 * Você precisará da biblioteca qrcode.js
 */
function generatePixQRCode(chaveRecebedor, valor, descricao) {
    // Formato: 00020126580014br.gov.bcb.pix...
    // Use um gerador de QR Code do Pix
    const pixQRCodeData = `
        00020126580014br.gov.bcb.brcode01051.0.0
        5802BR5913NOME DO TITULAR6009SAOPAULO
        62410503***630474DA
    `;
    
    // Você precisará de uma biblioteca como qrcode.js
    // Exemplo:
    // QRCode.toDataURL(pixQRCodeData, function (err, url) {
    //     document.getElementById('pix-qrcode').src = url;
    // })
    
    console.log('QR Code Pix gerado');
}

// ================================================
// 2. STRIPE (Cartão de Crédito)
// ================================================

/**
 * Integração básica com Stripe
 * Você precisará de uma chave pública do Stripe
 */
function initStripePayment() {
    // Carregue a biblioteca do Stripe
    // <script src="https://js.stripe.com/v3/"></script>
    
    const stripe = Stripe('pk_test_sua_chave_publica_aqui'); // Substitua pela sua chave
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    
    // cardElement.mount('#card-element');
    
    // Lidar com erros
    cardElement.on('change', function(event) {
        const displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });
    
    // Processar pagamento
    const form = document.getElementById('payment-form');
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const {token} = await stripe.createToken(cardElement);
            
            if (token) {
                // Enviar token para seu servidor
                fetch('/api/charge', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token: token.id,
                        amount: 1000 // Em centavos
                    })
                });
            }
        });
    }
}

// ================================================
// 3. PAYPAL
// ================================================

/**
 * Integração com PayPal
 * Use os botões padrão do PayPal
 */
function initPayPalPayment() {
    // Adicione este script ao seu HTML:
    // <script src="https://www.paypal.com/sdk/js?client-id=SEU_CLIENT_ID"></script>
    
    // Depois use este código para criar botões
    /*
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.00' // Valor em dólares
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Pagamento realizado por ' + details.payer.name.given_name);
            });
        },
        onError: function(err) {
            alert(err);
        }
    }).render('#paypal-button-container');
    */
    
    console.log('PayPal inicializado');
}

// ================================================
// 4. MERCADO PAGO
// ================================================

/**
 * Integração com Mercado Pago
 * Você precisará da chave pública e privada
 */
function initMercadoPagoPayment() {
    // Carregue a biblioteca do Mercado Pago
    // <script src="https://sdk.mercadopago.com/js/v2"></script>
    
    // Exemplo básico
    /*
    const mp = new MercadoPago('SUA_CHAVE_PUBLICA', {
        locale: 'pt-BR'
    });
    
    mp.getIdentificationTypes().then(identificationTypes => {
        // Criar formulário
    }).catch(error => {
        console.log(error);
    });
    */
    
    console.log('Mercado Pago inicializado');
}

// ================================================
// 5. PAGSEGURO
// ================================================

/**
 * Integração com PagSeguro
 */
function initPagSeguroPayment() {
    // Carregue a biblioteca do PagSeguro
    // <script type="text/javascript" src="https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"></script>
    
    // Exemplo de inicialização
    /*
    PagSeguroDirectPayment.setSessionId('SESSION_ID');
    
    PagSeguroDirectPayment.getPaymentMethods({
        success: function(response) {
            console.log('Métodos de pagamento carregados', response);
        }
    });
    */
    
    console.log('PagSeguro inicializado');
}

// ================================================
// EXEMPLO DE PROCESSAMENTO GENÉRICO DE PAGAMENTO
// ================================================

/**
 * Função genérica para processar pagamentos
 */
function processPayment(paymentData) {
    const {
        method,      // 'pix', 'stripe', 'paypal', 'mercadopago', 'pagseguro'
        amount,      // Valor em centavos
        currency,    // 'BRL', 'USD', etc
        description, // Descrição do pagamento
        metadata     // Dados adicionais
    } = paymentData;
    
    console.log('Processando pagamento:', paymentData);
    
    // Enviar para seu servidor
    fetch('/api/payments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            method: method,
            amount: amount,
            currency: currency,
            description: description,
            metadata: metadata,
            timestamp: new Date().toISOString()
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Pagamento processado:', data);
        if (data.success) {
            alert('Pagamento realizado com sucesso!');
        } else {
            alert('Erro ao processar pagamento: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao processar pagamento');
    });
}

// ================================================
// EXEMPLO DE USO
// ================================================

/**
 * Exemplos de como usar as funções acima
 */

// Inicializar quando o DOM estiver pronto
// document.addEventListener('DOMContentLoaded', function() {
//     // Descomente a integração que deseja usar
//     
//     // initStripePayment();
//     // initPayPalPayment();
//     // initMercadoPagoPayment();
//     // initPagSeguroPayment();
// });

// Exemplo de chamada para processar pagamento
// processPayment({
//     method: 'pix',
//     amount: 10000, // R$ 100,00
//     currency: 'BRL',
//     description: 'Compra de produto XYZ',
//     metadata: {
//         orderId: '12345',
//         customerId: '67890'
//     }
// });
