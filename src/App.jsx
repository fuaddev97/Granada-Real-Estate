"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.css");
var propertyCards = [
    {
        image: '/assets/img5.jpg',
        type: 'Villa',
        title: 'Palm Court Residence',
        location: 'Private Collection',
        price: 'AED 8.9M',
    },
    {
        image: '/assets/img6.jpg',
        type: 'Townhouse',
        title: 'The Courtyard House',
        location: 'Signature Homes',
        price: 'AED 4.2M',
    },
    {
        image: '/assets/img8.jpg',
        type: 'Penthouse',
        title: 'Skyline 02',
        location: 'City Collection',
        price: 'AED 6.7M',
    },
    {
        image: '/assets/img2.jpg',
        type: 'Residence',
        title: 'The Cedar House',
        location: 'Private Collection',
        price: 'AED 5.4M',
    },
    {
        image: '/assets/img3.jpg',
        type: 'Villa',
        title: 'Palm Atrium',
        location: 'Signature Homes',
        price: 'AED 7.1M',
    },
    {
        image: '/assets/img10.jpg',
        type: 'Apartment',
        title: 'Gallery Residence',
        location: 'City Collection',
        price: 'AED 3.8M',
    },
];
var marqueeItems = ['BUY', 'SELL', 'INVEST', 'RELOCATE'];
var principles = [
    {
        number: '01',
        title: 'Curated, not crowded.',
        text: 'A focused collection of homes chosen for architecture, address, atmosphere and long-term appeal.',
    },
    {
        number: '02',
        title: 'Advice with perspective.',
        text: 'Clear guidance from first viewing to final signature, without pressure or unnecessary noise.',
    },
    {
        number: '03',
        title: 'A better way to move.',
        text: 'Thoughtful service for buyers, sellers and investors who want the process to feel as polished as the property.',
    },
];
function App() {
    var _a = (0, react_1.useState)(false), scrolled = _a[0], setScrolled = _a[1];
    var _b = (0, react_1.useState)(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var _c = (0, react_1.useState)(''), formState = _c[0], setFormState = _c[1];
    var _d = (0, react_1.useState)({ x: 50, y: 50 }), pointer = _d[0], setPointer = _d[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () { return setScrolled(window.scrollY > 24); };
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting)
                    entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.14 });
        document.querySelectorAll('.reveal').forEach(function (element) { return observer.observe(element); });
        window.addEventListener('scroll', handleScroll, { passive: true });
        return function () {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    var handleHeroPointer = function (event) {
        var bounds = event.currentTarget.getBoundingClientRect();
        var x = ((event.clientX - bounds.left) / bounds.width) * 100;
        var y = ((event.clientY - bounds.top) / bounds.height) * 100;
        setPointer({ x: x, y: y });
    };
    var handleSubmit = function (event) {
        event.preventDefault();
        setFormState('Thanks — a Granada consultant will be in touch.');
    };
    var scrollTo = function (id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };
    return (<main className="site-shell">
      <div className="cursor-glow" style={{ left: "".concat(pointer.x, "%"), top: "".concat(pointer.y, "%") }}/>

      <header className={"site-header ".concat(scrolled ? 'site-header--scrolled' : '')}>
        <button className="brand" onClick={function () { return scrollTo('top'); }} aria-label="Granada Real Estate home">
          <img src="/assets/granada-logo.png" alt="Granada Real Estate"/>
          <span>GRANADA</span>
        </button>

        <nav className={"site-nav ".concat(menuOpen ? 'site-nav--open' : '')} aria-label="Primary navigation">
          <button onClick={function () { return scrollTo('properties'); }}>Properties</button>
          <button onClick={function () { return scrollTo('approach'); }}>Our Approach</button>
          <button onClick={function () { return scrollTo('journal'); }}>Journal</button>
          <button onClick={function () { return scrollTo('contact'); }}>Contact</button>
        </nav>

        <button className="header-cta" onClick={function () { return scrollTo('contact'); }}>Start a conversation</button>
        <button className={"menu-toggle ".concat(menuOpen ? 'menu-toggle--open' : '')} onClick={function () { return setMenuOpen(function (open) { return !open; }); }} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span />
          <span />
        </button>
      </header>

      <section id="top" className="hero" onPointerMove={handleHeroPointer} style={{ '--hero-x': "".concat(pointer.x, "%"), '--hero-y': "".concat(pointer.y, "%") }}>
        <div className="hero-image"/>
        <div className="hero-grain"/>
        <div className="hero-overlay"/>

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow reveal is-visible">Granada Real Estate · Private Property Advisory</p>
          <h1 className="hero-title reveal is-visible">
            <span>Find a place</span>
            <em>worth coming home to.</em>
          </h1>
          <div className="hero-bottom reveal is-visible">
            <p>Homes with character. Spaces with purpose. A more considered way to buy, sell and invest.</p>
            <button className="circle-action" onClick={function () { return scrollTo('properties'); }} aria-label="Explore properties"><span>VIEW</span><i aria-hidden="true"/></button>
          </div>
        </div>

        <div className="hero-side-note">SCROLL TO DISCOVER <span aria-hidden="true"/></div>
      </section>

      <section className="marquee" aria-label="Granada services">
        <div className="marquee-track" aria-hidden="true">
          {Array.from({ length: 6 }, function (_, groupIndex) { return (<div className="marquee-group" key={"marquee-group-".concat(groupIndex)}>
              {marqueeItems.map(function (item, index) { return (<react_1.Fragment key={"".concat(item, "-").concat(index)}>
                  <span>{item}</span>
                  <i>✦</i>
                </react_1.Fragment>); })}
            </div>); })}
        </div>
      </section>

      <section className="intro section-pad">
        <div className="intro-copy reveal">
          <p className="eyebrow">The Granada point of view</p>
          <h2>Good property is <span>felt</span> before it is explained.</h2>
        </div>
        <div className="intro-meta reveal">
          <p>We believe the right home is more than an address. It is light at the end of a long day, the view you never tire of, the room that changes how you live.</p>
          <button className="text-link" onClick={function () { return scrollTo('approach'); }}>Discover our approach</button>
        </div>
      </section>

      <section id="properties" className="featured section-pad">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>Selected properties</h2>
          </div>
          <p className="section-note">A small selection from a larger private network of residences, investments and distinctive spaces.</p>
        </div>

        <div className="property-grid">
          {propertyCards.map(function (property, index) { return (<article className={"property-card reveal delay-".concat(index + 1)} key={property.title}>
              <div className="property-image-wrap">
                <img src={property.image} alt={property.title} className="property-image"/>
                <span className="property-index">0{index + 1}</span>
                <span className="property-view">VIEW</span>
              </div>
              <div className="property-info">
                <div>
                  <p className="property-kicker">{property.type} · {property.location}</p>
                  <h3>{property.title}</h3>
                </div>
                <p className="property-price">{property.price}</p>
              </div>
            </article>); })}
        </div>

        <div className="center-cta reveal">
          <button className="outline-button" onClick={function () { return scrollTo('contact'); }}>View the full collection</button>
        </div>
      </section>

      <section id="approach" className="editorial section-pad">
        <div className="editorial-image reveal">
          <img src="/assets/img11.jpg" alt="Elegant Granada interior"/>
          <div className="floating-card">
            <span>EST. 2026</span>
            <strong>Real estate,<br />with intention.</strong>
          </div>
        </div>
        <div className="editorial-copy reveal">
          <p className="eyebrow">Our approach</p>
          <h2>Quiet confidence.<br /><em>Serious results.</em></h2>
          <p className="large-copy">Granada is built around a simple idea: the buying and selling experience should feel as intentional as the home itself.</p>
          <div className="principles">
            {principles.map(function (principle) { return (<div className="principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </div>); })}
          </div>
        </div>
      </section>

      <section id="journal" className="visual-break">
        <img src="/assets/img12.jpg" alt="Warm, modern residence overlooking the city"/>
        <div className="visual-break-copy reveal">
          <p className="eyebrow">Spaces that stay with you</p>
          <h2>Architecture.<br /><em>Atmosphere.</em><br />Possibility.</h2>
        </div>
      </section>

      <section className="values section-pad">
        <div className="values-heading reveal">
          <p className="eyebrow">Beyond the listing</p>
          <h2>We sell the feeling of <em>what comes next.</em></h2>
        </div>
        <div className="values-gallery">
          <figure className="gallery-item gallery-item--wide reveal">
            <img src="/assets/img13.jpg" alt="Refined living room interior"/>
            <figcaption>01 / Living beautifully</figcaption>
          </figure>
          <figure className="gallery-item gallery-item--small reveal delay-1">
            <img src="/assets/img7.jpg" alt="Sophisticated private office"/>
            <figcaption>02 / Working with intention</figcaption>
          </figure>
          <figure className="gallery-item gallery-item--small reveal delay-2">
            <img src="/assets/img9.jpg" alt="Panoramic city view from a residence"/>
            <figcaption>03 / Looking further</figcaption>
          </figure>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-visual">
          <img src="/assets/img4.jpg" alt="Luxurious bedroom interior"/>
          <div className="contact-stamp">GR<br />2026</div>
        </div>
        <div className="contact-content section-pad">
          <p className="eyebrow reveal">Let’s make a move</p>
          <h2 className="reveal">Tell us what<br /><em>you’re looking for.</em></h2>
          <p className="contact-intro reveal">Tell us whether you are buying, selling, investing or simply exploring. We’ll take it from there.</p>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required/>
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@example.com" required/>
            </label>
            <label>
              <span>I’m interested in</span>
              <select name="interest" defaultValue="Buying">
                <option>Buying</option>
                <option>Selling</option>
                <option>Investing</option>
                <option>Relocating</option>
              </select>
            </label>
            <button type="submit" className="solid-button">Send enquiry</button>
            {formState && <p className="form-message" role="status">{formState}</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top section-pad">
          <div className="footer-brand reveal">
            <img src="/assets/granada-logo.png" alt="Granada Real Estate"/>
            <p>Granada Real Estate</p>
            <span>Property, with perspective.</span>
          </div>
          <div className="footer-column reveal delay-1">
            <span className="footer-label">Explore</span>
            <button onClick={function () { return scrollTo('properties'); }}>Properties</button>
            <button onClick={function () { return scrollTo('approach'); }}>Our approach</button>
            <button onClick={function () { return scrollTo('journal'); }}>Journal</button>
          </div>
          <div className="footer-column reveal delay-2">
            <span className="footer-label">Connect</span>
            <a href="mailto:hello@granadarealestate.com">hello@granadarealestate.com</a>
            <a href="tel:+971500000000">+971 50 000 0000</a>
            <span>Private appointments available</span>
          </div>
        </div>
        <div className="footer-bottom section-pad">
          <span>© 2026 Granada Real Estate</span>
          <span>Made for people who care where they live.</span>
          <button onClick={function () { return scrollTo('top'); }}>Back to top</button>
        </div>
      </footer>
    </main>);
}
exports.default = App;
