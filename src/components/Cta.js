import React from 'react';
import ButtonIcon from './ButtonIcon';

const Cta = () => {
  return (
    <>
      <section className="the__section">
        <div className="main__container">
          <div className="main__cta">
            <div className="the__column">
              <p className="the__body1">We collaborate with ambitious people and brands</p>
              {/* <h2 className="the__headline">Let's build something amazing together</h2> */}
              <h2 className="the__headline">Have a project in mind? <br /> Let's get to work</h2>
              <ButtonIcon title="Contact us" btnLink="/" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cta;