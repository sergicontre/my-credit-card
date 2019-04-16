import { html, css, LitElement } from 'lit-element';
import {myCreditCardStyle} from  './my-credit-card.style';

export default class MyCreditCard extends LitElement {

  static get properties() {
    return {
      title: { type: String }
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <style>${myCreditCardStyle}</style>
      <div id="form-container">

        <div id="card-front">
          <div id="shadow"></div>
          <div id="image-container">
            <span id="amount"><strong>${this.title}</strong></span>
          </div>
      
          <label for="card-number">
            Card Number
          </label>
          <input type="text" id="card-number" placeholder="1234 5678 9101 1112" length="16">
          <div id="cardholder-container">
            <label for="card-holder">Card Holder</label>
            <input type="text" id="card-holder" placeholder="e.g. Sergio Contreras" />
          </div>

          <div id="exp-container">
            <fieldset>
              <legend><span>Expiration</span></legend>
              <label for="card-month" class="sr-only">MM</label>
              <input id="card-month" type="text" placeholder="MM" length="2">
              <label for="card-year" class="sr-only">YY</label>
              <input id="card-year" type="text" placeholder="YY" length="2">
            </fieldset>
          </div>

          <div id="cvc-container">
            <label for="card-cvc"> CVC/CVV</label>
            <input id="card-cvc" placeholder="XXX-X" type="text" min-length="3" max-length="4">
            <p>Last 3 or 4 digits</p>
          </div>

          <button type="button" id="chip" class="chip" @click="${this.handleClick}">
           <svg
              enable-background="new 0 0 87 56" id="Layer_1" version="1.1" viewBox="0 0 87 56" 
              xml:space="preserve">
              <g>
                  <polygon fill="#F1F2F2" points="1,2.729 1,53.152 86,53.152 86,2.729  " />
                  <rect fill="#F1F2F2" height="27.979" width="85" x="1" y="14.01" />
                  <path
                      d="M1,41.988v10.646c0,0.813,0.45,1.528,1.135,1.954C2.55,54.85,3.052,55,3.593,55h79.814   c0.541,0,1.043-0.15,1.458-0.41C85.55,54.164,86,53.448,86,52.636V41.988H1z"
                      fill="#FAA61A" />
                  <path
                      d="M84.865,1.41C84.449,1.151,83.948,1,83.407,1H3.593C3.052,1,2.551,1.151,2.136,1.41   C1.451,1.835,1,2.552,1,3.365V14.01h85V3.365C86,2.552,85.55,1.835,84.865,1.41z"
                      fill="#00589F" />
                  <polygon fill="#F1F2F2" points="71.538,31.219 66.661,31.219 69.7,23.225  " />
                  <g>
                      <polygon fill="#00589F" points="33.499,38.214 36.989,17.72 42.579,17.72 39.081,38.214   " />
                      <path
                          d="M59.344,18.224c-1.107-0.415-2.842-0.86-5.01-0.86c-5.518,0-9.406,2.779-9.439,6.764    c-0.031,2.944,2.775,4.588,4.895,5.568c2.174,1.005,2.906,1.646,2.896,2.543c-0.018,1.373-1.738,1.998-3.346,1.998    c-2.234,0-3.422-0.307-5.256-1.073l-0.72-0.326l-0.784,4.589c1.304,0.57,3.717,1.064,6.223,1.093c5.875,0,9.684-2.749,9.727-7.003    c0.021-2.329-1.465-4.104-4.689-5.568c-1.955-0.95-3.15-1.581-3.139-2.54c0-0.854,1.014-1.763,3.201-1.763    c1.824-0.03,3.15,0.369,4.178,0.784l0.504,0.237L59.344,18.224L59.344,18.224z"
                          fill="#00589F" />
                      <path
                          d="M73.668,17.739h-4.316c-1.338,0-2.338,0.365-2.926,1.699l-8.295,18.784h5.867c0,0,0.955-2.525,1.174-3.081    c0.641,0,6.34,0.01,7.154,0.01c0.166,0.718,0.68,3.072,0.68,3.072h5.186L73.668,17.739L73.668,17.739z M66.779,30.95    c0.463-1.181,2.227-5.729,2.227-5.729c-0.031,0.053,0.459-1.188,0.74-1.958l0.377,1.767c0,0,1.068,4.893,1.295,5.92H66.779    L66.779,30.95z"
                          fill="#00589F" />
                      <path
                          d="M28.813,17.735l-5.47,13.977l-0.585-2.84c-1.016-3.274-4.188-6.822-7.736-8.598L20.023,38.2l5.911-0.009    l8.795-20.456H28.813L28.813,17.735z"
                          fill="#00589F" />
                      <path
                          d="M18.271,17.722H9.26l-0.069,0.427c7.008,1.697,11.646,5.798,13.568,10.724l-1.957-9.419    C20.464,18.155,19.483,17.769,18.271,17.722L18.271,17.722z"
                          fill="#F9A51A" />
                  </g>
              </g>
            </svg>
          </button>

        </div>

        <div id="card-back">
          <div id="card-stripe">
          </div>
        </div>

      </div>
    `;
  }

  handleClick(e) {
    let event = new CustomEvent('credit-card-details', {
      detail: {
        bank: this.title,
        cardNumber: this.shadowRoot.getElementById('card-number').value,
        cardHolder: this.shadowRoot.getElementById('card-holder').value,
        expirationMonth: this.shadowRoot.getElementById('card-month').value,
        expirationYear: this.shadowRoot.getElementById('card-year').value,
        cvc: this.shadowRoot.getElementById('card-cvc').value
      }
    });
    this.dispatchEvent(event);
  }

}
