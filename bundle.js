const target = document.getElementById('root');

const list = [
  {
    alt: 'Boro Plus',
    src: 'images/boroplus.png',
    background: '#5E35B1'
  },
  {
    alt: 'Navratna',
    src: 'images/navratna.png',
    background: '#e53935'
  },
  {
    alt: 'Zandu Balm',
    src: 'images/zandubalm.png',
    background: '#43A047'
  },
  {
    alt: 'Fair & Handsome',
    src: 'images/fnh.png',
    background: '#546E7A'
  },
  {
    alt: 'Menthol Plus',
    src: 'images/mentho_plus.png',
    background: '#FFB300'
  },
  {
    alt: 'Fast Relief',
    src: 'images/fastrelief.png',
    background: '#C53F53'
  },
  {
    alt: 'Sona Chandi Chawanprash',
    src: 'images/sona-chandi.png',
    background: '#B8924C'
  },
  {
    alt: 'Kesari Jivan',
    src: 'images/kesarijivan.png',
    background: '#ef5350'
  },
  {
    alt: 'Vasocare',
    src: 'images/vasocare.png',
    background: '#81C784'
  },
  {
    alt: 'Zandu',
    src: 'images/86_zandu.png',
    background: '#FFA726'
  },
  {
    alt: '7 Oils In One',
    src: 'images/7-oils-in-1.png',
    background: '#FFEE58'
  },
  {
    alt: 'Kesh King',
    src: 'images/kesh_king.jpg',
    background: '#8BC34A'
  },
  {
    alt: 'Diamond Shine',
    src: 'images/emami-diamond-shine.png',
    background: '#1E88E5'
  },
  {
    alt: 'HE',
    src: 'images/HE-logo.png',
    background: '#000000'
  },
  {
    alt: 'Golden Beauty Talc',
    src: 'images/Emamitalc-logo.png',
    background: '#26A69A'
  },
  {
    alt: 'Naturally Fair',
    src: 'images/emami_naturally_fair.png',
    background: '#F06292'
  }
];

const aboutUs = [
  'Company Profile',
  'About Group Companies',
  'The Journey',
  'Milestones',
  "Founders' Message",
  'Vision, Mission & Purpose',
  'Strategy',
  'BOD & Management Team',
  'Where We Operate',
  'Key Numbers',
  'Innovations',
  'Accolades'
];

const brands = [
  'Boroplus',
  'Navratna',
  'Zandu Balm',
  'Fair And Handsome',
  'Mentho Plus Balm',
  'Fast Relief',
  'Zandu Sona Chandi',
  'Kesari Jivan',
  'Vasocare',
  'Zandu Healthcare',
  '7 Oils In One',
  'Kesh King',
  'HE',
  'Diamond Shine'
];

const globalBusiness = ['Overseas Operations', 'International Brands'];

const investors = [
  'Stock Information',
  'Annual Reports',
  'Financial Information',
  'Notices & Corporate Announcements',
  'Presentations',
  'CCT',
  'Shareholding Pattern',
  "Investors' Service Center",
  'Unpaid/Unclaimed Dividend',
  'Subsidiary Companies',
  'Compliance'
];

const newCenter = ['Feature Stories', 'Latest', 'Press Releases', 'Television Commercials', 'At The Studio', 'Contact'];

const joinUs = [
  'Facebook',
  'Benefits & Incentives',
  'Recruitment Process',
  'Departments',
  'Life At Emami',
  'Online Application'
];

const holisticLiving = ['Overview'];

const homeIconPath =
  'M509.8 227.5L448 177.8v-76c0-3.3-2.7-6-6-6h-20c-3.3 0-6 2.7-6 6v50.1L276.1 39.1c-11.7-9.5-28.5-9.5-40.2 0L2.2 227.5c-2.6 2.1-3 5.9-.9 8.4l12.6 15.6c2.1 2.6 5.9 3 8.5.9L64 218.9v229c0 17.7 14.3 32 32 32h116c6.6 0 12-5.4 12-12V335.8l64 .3v132.2c0 6.6 5.4 12 12 12l116-.3c17.7 0 32-14.3 32-32V219l41.6 33.5c2.6 2.1 6.4 1.7 8.5-.9l12.6-15.6c2.1-2.6 1.6-6.4-.9-8.5zM416 448l-96 .3V316c0-6.6-5.4-12-12-12l-104-.3c-6.6 0-12 5.4-12 12V448H96V193.1l156.2-126c2.2-1.8 5.3-1.8 7.5 0l156.2 126V448z';
const fbIconPath =
  'M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z';
const youtubeIconPath =
  'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z';
const phoneIconPath =
  'M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-54.867-321.745l-58.499-13.493a29.473 29.473 0 0 0-33.748 17.123l-27.001 62.995c-5.146 12.012-1.678 26.179 8.435 34.451l24.129 19.742a192.006 192.006 0 0 1-75.376 75.375l-19.74-24.127c-8.273-10.115-22.44-13.582-34.453-8.435l-62.992 26.998c-13.138 5.63-20.34 19.824-17.125 33.748l13.494 58.501C81.363 406.597 93.184 416 107 416c153.033 0 277-123.819 277-277 0-13.818-9.403-25.639-22.867-28.745zM108.987 383.992l-12.579-54.518 59.348-25.435 34.601 42.288c61.893-29.035 94.185-60.484 123.973-123.971l-42.29-34.602 25.436-59.348 54.518 12.579c-1.057 133.704-109.058 241.949-243.007 243.007z';

const SVGIcon = ({ path, size }) => (
  <svg viewBox="0 0 512 512" width={size} height={size}>
    <path fill="currentColor" d={path} />
  </svg>
);

class Navbar extends React.Component {
  state = {
    isOpen: false,
    height: 40
  };

  showHideMenu = () =>
    this.setState(prevState => {
      if (prevState.isOpen) {
        return {
          isOpen: false,
          height: 40
        };
      } else {
        return {
          isOpen: true,
          height: 380
        };
      }
    });

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <img src="images/logo.png" alt="logo" />
          <div className="youtube-icon">
            <SVGIcon path={youtubeIconPath} size="24px" />
          </div>
          <div className="fb-icon">
            <SVGIcon path={fbIconPath} size="24px" />
          </div>
          <div className="phone-icon">
            <SVGIcon path={phoneIconPath} size="24px" />
          </div>
        </div>

        <nav>
          <ul style={{ height: `${this.state.height}px` }}>
            <li className="menu-icon" onClick={this.showHideMenu} />
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Global Business</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">News Centre</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
            <li>
              <a href="#">Holistic Living</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} style={{ backgroundColor: this.props.background }} />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div>
            <h4>About Us</h4>
            <ul>
              {aboutUs.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Brands</h4>
            <ul>
              {brands.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Global Business</h4>
            <ul>
              {globalBusiness.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Investors</h4>
            <ul>
              {investors.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>News Centre</h4>
            <ul>
              {newCenter.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Join Us</h4>
            <ul>
              {joinUs.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Holistic Living</h4>
            <ul>
              {holisticLiving.map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-note">
          Copyright &copy; 2018. All Rights Reserved.
          <div>
            Designed with <span>&hearts;</span> by{' '}
            <a href="http://diracsol.com/">Diracsol Business Solutions Pvt. Ltd.</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <h4>Brands</h4>
        <p>
          For more than 35 years Emami has been innovating and launching brands meeting multiple consumer needs,
          spanning across various income groups, for young to old and everyone in - between. We are passionate about
          creating best in class and affordable brands in health and personal care markets. We invite you to discover
          our brands.
        </p>
        <div className="items">{list.map(obj => <Card key={obj.alt} {...obj} />)}</div>
        <hr />
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<App />, target);
