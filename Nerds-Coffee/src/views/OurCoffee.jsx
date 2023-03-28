import './OurCoffee.css';
import Slider from '../components/Slider';

function OurCoffee() {

  function toggleOverlay() {
    document.getElementById("slider").style.display = "flex";
}

    return (
      <section>
        <div className="coffee">
          <header>
            <img src="/src/views/img/graphics-header.svg" alt="graphicHeader" className='graphicHeader'/>
            <svg onClick= { toggleOverlay } width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="white"/>
              <rect x="11" y="14" width="26" height="2" rx="1" fill="#222222"/>
              <rect x="11" y="23" width="26" height="2" rx="1" fill="#222222"/>
              <rect x="11" y="32" width="26" height="2" rx="1" fill="#222222"/>
            </svg>
          </header>
          <Slider />
          <main>
            <h1 className="coffee__header">Vårt kaffe</h1>

            <h2 className="coffee__text--important">Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
            grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</h2>

            <p className="coffee__text">Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste,
            con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction
              instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese
              froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au
                lait flavour cultivar ut bar instant kopi-luwak.<br /><br /> Roast id macchiato, single shot siphon mazagran milk fair trade
                est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich
                  grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper.
                  In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter
                    aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk
                    aromatic turkish skinny crema.</p>
            </main>

            <footer>
              <article>
                <img src="/src/views/img/eva-cortado.jpg" alt="EvaCortado" className='Eva' />
                <h3>Eva Cortado</h3>
                <p>VD & Grundare</p>
              </article>
              <img src="/src/views/img/graphics-footer.svg" alt="graphicFooter" className='graphicFooter'/>
            </footer>
        </div>

      </section>
    )
  }
  
  export default OurCoffee



