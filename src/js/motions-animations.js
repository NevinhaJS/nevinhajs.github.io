import {NevinhaComponent, render, NevinhaDOM} from 'nevinha-js';
import {animations} from './constants';

class MotionsAnimations extends NevinhaComponent {
  constructor(props, children){
    super(props, children);

    this.state.animations = animations;
    this.handleAnimationClick = this.handleAnimationClick.bind(this);
  }

  handleAnimationClick(e){
    const {animationValue} = e.target.dataset;
    const {nevinhaAppImage} = this.context;

    this.setAnimation(nevinhaAppImage, {
      name: animationValue
    })
  }

	render() {
    const {animations} = this.state;

		return (
			<div className="row">
        <div className="col-md-12 col-md-offset-2">
          <div className="live-demo">
            <figure ref="nevinhaAppImage" sticky={{
              top: '36%'
            }}>
              <img src="./images/nevinha-js.png" className="nevinha-app-logo" />
            </figure>

            {Object.keys(animations).map(categoryName => (
              <div className="nevinha-app-buttons">
                <h4 className="about-title">{categoryName}</h4>

                {animations[categoryName].map(animation => (
                  <button
                    className="btn btn-accent"
                    data-animation-value={animation.value}
                    onClick={this.handleAnimationClick}
                  >{animation.name}</button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
		);
	}
}

export default MotionsAnimations;