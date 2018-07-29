import {NevinhaComponent, render, ParallaxProvider, NevinhaDOM} from 'nevinha-js';
import MotionsAnimations from './motions-animations';
import {isFirefox} from './constants';

class NevinhaApp extends NevinhaComponent {
  constructor(){
    super();

    this.state.motionsTab = true;
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(){
    this.setState({motionsTab: !this.state.motionsTab});
    scrollTo(0, 820);
  }

	render() {
    const {motionsTab} = this.state;
    let btnText = "View animations demo";
    let appTitle = "Experiment the best of our live parallax provider demo";

    if(motionsTab) {
      appTitle = "Try to use our live animations demo";
      btnText = "View parallax provider demo";
    }

		return (
      <div>
        <h3 class="about-title z-mask">{appTitle}</h3>

        {motionsTab ? (<MotionsAnimations />) : (
          <div className="parallax-container">
            <ParallaxProvider className="parallax-provider-tab">
              <img src="./images/nevinha-js.png" className="parallax-biggest" parallax={{
                size: 1
              }} />
              <img src="./images/nevinha-js.png" className="parallax-smaller" parallax={{
                size: 3
              }} />
              <img src="./images/nevinha-js.png" className="parallax-medium" parallax={{
                size: 2
              }} />
            </ParallaxProvider>
          </div>
        )}

        {!isFirefox && (<button className="btn btn-accent parallax-provider z-mask" onClick={this.changeTab}>{btnText}</button>)}
      </div>
		);
	}
}

setTimeout(function(){
  const $root = document.querySelector('#nevinha-app');
  render(NevinhaApp, $root);
}, 300)