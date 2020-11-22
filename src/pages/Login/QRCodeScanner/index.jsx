import { Component, Fragment } from 'react'
import Cookies from 'universal-cookie'
import QrReader from 'react-qr-reader'

import styles from './QRCodeScanner.module.sass'

const cookies = new Cookies()

class QRCodeScanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scanResult: null,
    }
  }

  delegates = [
    {
      name: 'potapenko',
      id: '5fb8ee0b42c057058c013ad7',
    },
    {
      name: 'bituev',
      id: '5fb8ee0b42c057058c013ad8',
    },
    {
      name: 'druzhinin',
      id: '5fb8ee0c42c057058c013ad9',
    },
    {
      name: 'rempel',
      id: '5fb8ee0c42c057058c013adc',
    },
    {
      name: 'frolov',
      id: '5fb8ee0c42c057058c013add',
    },
    {
      name: 'bojkov ',
      id: '5fb8ee0c42c057058c013adb',
    },
    {
      name: 'korobczov',
      id: '5fb8ee0b42c057058c013ad6',
    },
    {
      name: 'medvedev',
      id: '5fb8ee0c42c057058c013ada',
    },
    {
      name: 'zadorozhnyj',
      id: '5fb8ee0c42c057058c013ade',
    },
    {
      name: 'mikryukov',
      id: '5fb8ee0c42c057058c013adf',
    },
    {
      name: 'mikhajlenko',
      id: '5fb8ee0c42c057058c013ae0',
    },
    {
      name: 'burakov',
      id: '5fb8ee0c42c057058c013ae1',
    },
    {
      name: 'shulgin',
      id: '5fb8ee0c42c057058c013ae2',
    },
    {
      name: 'denisov',
      id: '5fb8ee0c42c057058c013ae3',
    },
    {
      name: 'brilliantov',
      id: '5fb8ee0c42c057058c013ae4',
    },
    {
      name: 'voronczov',
      id: '5fb8ee0c42c057058c013ae6',
    },
    {
      name: 'petrov',
      id: '5fb8ee0c42c057058c013ae8',
    },
    {
      name: 'akulichev',
      id: '5fb8ee0c42c057058c013ae5',
    },
    {
      name: 'saenko',
      id: '5fb8ee0c42c057058c013ae9',
    },
    {
      name: 'vladimirov',
      id: '5fb8ee0c42c057058c013ae7',
    },
    {
      name: 'dozorova',
      id: '5fb8ee0c42c057058c013aea',
    },
    {
      name: 'lisovskij',
      id: '5fb8ee0c42c057058c013aeb',
    },
    {
      name: 'mishanin',
      id: '5fb8ee0c42c057058c013aec',
    },
    {
      name: 'dyakov',
      id: '5fb8ee0c42c057058c013aee',
    },
    {
      name: 'areshkin',
      id: '5fb8ee0c42c057058c013af1',
    },
    {
      name: 'kashtanov ',
      id: '5fb8ee0c42c057058c013af0',
    },
    {
      name: 'sakharov',
      id: '5fb8ee0c42c057058c013aef',
    },
    {
      name: 'vashhenko',
      id: '5fb8ee0c42c057058c013aed',
    },
    {
      name: 'makarenko',
      id: '5fb8ee0c42c057058c013af2',
    },
    {
      name: 'solonevich',
      id: '5fb8ee0c42c057058c013af3',
    },
    {
      name: 'sorokin',
      id: '5fb8ee0c42c057058c013af4',
    },
    {
      name: 'kotolivczev',
      id: '5fb8ee0c42c057058c013af8',
    },
    {
      name: 'lednev ',
      id: '5fb8ee0c42c057058c013af5',
    },
    {
      name: 'taskaev ',
      id: '5fb8ee0c42c057058c013af7',
    },
    {
      name: 'babinyan',
      id: '5fb8ee0c42c057058c013af6',
    },
    {
      name: 'gladkovskij',
      id: '5fb8ee0c42c057058c013af9',
    },
    {
      name: 'kartushin',
      id: '5fb8ee0c42c057058c013afa',
    },
    {
      name: 'korneev ',
      id: '5fb8ee0c42c057058c013afb',
    },
    {
      name: 'leskin ',
      id: '5fb8ee0c42c057058c013afc',
    },
    {
      name: 'majorov ',
      id: '5fb8ee0c42c057058c013afd',
    },
    {
      name: 'mikhajlik',
      id: '5fb8ee0c42c057058c013afe',
    },
    {
      name: 'neganov',
      id: '5fb8ee0c42c057058c013aff',
    },
    {
      name: 'norvejshis',
      id: '5fb8ee0c42c057058c013b00',
    },
    {
      name: 'nosov',
      id: '5fb8ee0c42c057058c013b01',
    },
    {
      name: 'parfentev',
      id: '5fb8ee0c42c057058c013b02',
    },
    {
      name: 'rozhkov',
      id: '5fb8ee0c42c057058c013b03',
    },
    {
      name: 'romankov',
      id: '5fb8ee0c42c057058c013b04',
    },
    {
      name: 'russkikh',
      id: '5fb8ee0c42c057058c013b06',
    },
    {
      name: 'kinash',
      id: '5fb8ee0d42c057058c013b07',
    },
    {
      name: 'ledovskij',
      id: '5fb8ee0d42c057058c013b08',
    },
    {
      name: 'morozov',
      id: '5fb8ee0d42c057058c013b09',
    },
    {
      name: 'kononenko',
      id: '5fb8ee0d42c057058c013b0a',
    },
    {
      name: 'safaryan',
      id: '5fb8ee0d42c057058c013b0c',
    },
    {
      name: 'turkina',
      id: '5fb8ee0d42c057058c013b0b',
    },
    {
      name: 'kharitonov',
      id: '5fb8ee0d42c057058c013b0d',
    },
    {
      name: 'chajkin',
      id: '5fb8ee0d42c057058c013b0e',
    },
    {
      name: 'alekseev',
      id: '5fb8ee0d42c057058c013b0f',
    },
    {
      name: 'arkhipov',
      id: '5fb8ee0d42c057058c013b10',
    },
    {
      name: 'zhukov',
      id: '5fb8ee0d42c057058c013b12',
    },
    {
      name: 'parshukov',
      id: '5fb8ee0d42c057058c013b11',
    },
    {
      name: 'starczev',
      id: '5fb8ee0d42c057058c013b13',
    },
  ]

  handleData = () => {
    const rusnets_url = /https:\/\/rosseti.tech\/meet\//
    if (rusnets_url.test(this.state.scanResult)) {
      const username = this.state.scanResult.split(rusnets_url)[1]
      console.log(username)
      this.delegates.forEach(delegate => {
        if (username === delegate['name']) {
          console.log(delegate)
          cookies.set('isUserLogged', true)
          cookies.set('userID', delegate['id'])
          window.location.href = '/'
        }
      })
    } else {
      console.log('whoops')
    }
  }

  scanHandler = data => {
    if (data) {
      this.setState({
        scanResult: data,
      })
      this.handleData()
    }
  }

  errorHandler = err => console.log(err)

  render() {
    return (
      <Fragment>
        <div className={styles.qrcontainer}>
          <QrReader
            delay={300}
            onScan={this.scanHandler}
            onError={this.errorHandler}
            style={{ width: '100%' }}
          />
        </div>
      </Fragment>
    )
  }
}

export default QRCodeScanner
