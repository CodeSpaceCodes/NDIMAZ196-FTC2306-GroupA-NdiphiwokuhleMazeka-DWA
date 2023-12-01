import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class TallyApp extends LitElement {
    static styles = css`
    :host {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        gap: 5rem;
      }

      h1 {
        text-align: center;
      }

      .buttons_container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;   
    }
    
    button {
      background-color: rgb(10, 4, 4);
      background-color: grey;
      color: bisque;
      height: 5rem;
      width: 5rem;
      font-size: 3rem;
      border: 0.2rem solid bisque;
      border-radius: 50%;
      cursor: pointer;
    }

      #value {
        font-size: 170px;
      }
      .minimum, 
      .maximum {
        background-color: red;
        opacity: 0.2;
      }
    `;

    constructor(){
        super();

        /**
         * State object which contains the initial count value and countState
         * @type {Object} phase
         * @prop {Number} count
         * @prop {'normal'| 'minimum' | 'maximum'} countPhase 
         */
        this.phase = {
            count: 0,
            countPhase: 'normal',
        };

        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this)
    }

    /**
     * This function is called when properties have been updated
     * @param {Map} changedProperties - this is map of properties that have been changed
     */
    updated(changedProperties) {    // lifecycle callback in litelement invoked when the properties of the element have been updated.
        if (changedProperties.has('phase')) {
          const { count , countPhase } = this.phase;
          countPhase = count === -10 ? 'minimum' :
            count === 10 ? 'maximum' :'normal';
        }
    }

    /**
     * A getter function which indicates when the increment (add) button should be disabled
     * @type {boolean}
     */
    get isAddDisabled() { 
        return this.phase.countPhase === 'maximum';
    }

    /**
     * A getter function which indicates when the decrement (minus) button should be disabled
     * @type {boolean}
     */
    get isSubtractDisabled() {
        return this.phase.countPhase === 'minimum';
    }

    add() {
        if (this.phase.countPhase !== 'maximum'){
            this.phase.count += 1;
            this.requestUpdate('phase');
        }
    }
    
    subtract() {
        if(this.phase.countPhase !== 'minimum'){
            this.phase.count -= 1;
            this.requestUpdate('phase');
        }
    }

    /**
     * Function that renders the tallyApp component
     * @returns {TemplateResult}
     */
    render() {
        return html`
            <h1>lIT tALLY</h1>
            <div id="tallyContainer">
                <span id="value">${this.phase.count}</span>        
                <div class="buttons_container">
                    <button @click='${this.subtract}'
                        ?disabled=${this.isSubtractDisabled}
                        class="${this.phase.count === -10 ? 'minimum' : '' }"> - </button> 

                    <button @click='${this.add}'
                        ?disabled=${this.isAddDisabled}
                        class="${this.phase.count === 10 ? 'maximum' : '' }"> + </button>   
                </div>
            </div>
        `;
    }
}

customElements.define('tally-app', TallyApp);