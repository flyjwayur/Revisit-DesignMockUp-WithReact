import React from "react";
import './development.css';

function Development() {
  return (
    <div id="development-container">
        <div id="development-title">
            <span>Development</span>
        </div>
        <div id="design-production">
            <section id="tabs" className="tab-box">
                <input id="tab-1" type="radio" name="tabs" defaultChecked />
                <label htmlFor="tab-1">The Design</label>
                <div className="tab-content">
                    <h3 className="tab-content-title">The Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at enim luctus, tristique dolor
                        eget, venenatis elit. Donec imperdiet faucibus metus, id tincidunt orci pulvinar a. Mauris
                        rutrum scelerisque ante, eu posuere purus dapibus id. Nullam pulvinar est sed leo vehicula
                        malesuada. Etiam ornare neque eros, sit amet semper ante eleifend ac. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Aenean pulvinar pulvinar viverra. Vivamus eu nulla
                        tempus, pharetra risus non, hendrerit eros. Morbi aliquet rutrum tincidunt. Aenean congue
                        mollis imperdiet. Maecenas id sapien in eros venenatis congue vestibulum eu orci. Donec mollis
                        ante ut lorem lacinia, ac vestibulum nisi condimentum. Aenean eget rutrum arcu, ut consectetur
                        ex. Ut id metus ac sem tristique interdum.
                    </p>
                    <button>Read more</button>
                </div>
  
                <input id="tab-2" type="radio" name="tabs"/>
                <label htmlFor="tab-2">Production</label>
                <div className="tab-content">
                    <h3 className="tab-content-title">The Production</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at enim luctus, tristique dolor
                        eget, venenatis elit. Donec imperdiet faucibus metus, id tincidunt orci pulvinar a. Mauris
                        rutrum scelerisque ante, eu posuere purus dapibus id. Nullam pulvinar est sed leo vehicula
                        malesuada. Etiam ornare neque eros, sit amet semper ante eleifend ac. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Aenean pulvinar pulvinar viverra. Vivamus eu nulla
                        tempus, pharetra risus non, hendrerit eros. Morbi aliquet rutrum tincidunt. Aenean congue
                        mollis imperdiet. Maecenas id sapien in eros venenatis congue vestibulum eu orci. Donec mollis
                        ante ut lorem lacinia, ac vestibulum nisi condimentum. Aenean eget rutrum arcu, ut consectetur
                        ex. Ut id metus ac sem tristique interdum.
                    </p>
                    <button>Read more</button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Development;
