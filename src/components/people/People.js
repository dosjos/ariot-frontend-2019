import React, { Component, Fragment } from 'react';
import Image from '../image/Image';
import './People.scss';

class People extends Component {

  constructor(props) {
    super(props);
    this.peopleImages = require.context('../../assets/images/people', true);
  }

  render() {
    const {
      name,
      title,
      intro,
      image,
      lookingFor,
      canHelpWith,
      bio,
      type
  } = this.props.item;

  let peopleImage = this.peopleImages(`./${image}`);
    
    return (
      <article className={`c_people c_people--${type}`}>
        <div className="c_people__image">
          <Image
            imgUrl={peopleImage}
            imgAlt={`Lovely picture of ${name}`}
          />
          {type && <span className="c_people__type">{type}</span>}
        </div>
        <div className="c_people__intro">
          {name && <h3 className="c_people__name">{name}</h3>}
          {title && <h4 className="c_people__title">{title}</h4>}
          {intro && <p className="c_people__mini-intro">{intro}</p>}
        </div>
        <div className="c_people__text">
          {bio && (
            <Fragment>
              <div>
                <h4>Bio</h4>
                <ul className="u_mega-bullet-list">
                  {bio.map((item, index) => 
                  (
                    <li key={`programItem-${index}`}>
                      <p>{item.value}</p>
                    </li>
                  ))}  
                </ul>
              </div>
            </Fragment>
          )}
          {lookingFor && (
            <Fragment>
              <div>
                <h4>Looking for</h4>
                <ul className="u_mega-bullet-list">
                  {lookingFor.map((item, index) => 
                  (
                    <li key={`programItem-${index}`}>
                      <p>{item.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          )}
          {canHelpWith && (
            <Fragment>
              <div>
                <h4>Can help with</h4>
                <ul className="u_mega-bullet-list">
                  {canHelpWith.map((item, index) => 
                  (
                    <li key={`programItem-${index}`}>
                      <p>{item.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          )}
        </div>
      </article>
    );
  }
}

export default People;