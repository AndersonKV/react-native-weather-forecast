import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {stylesColors} from './styles/colors';

import CapitalList from './Components/CapitalList';
import {verifyCountryAndWeather} from './utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  faSearch,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient'; // import LinearGradient

function App() {
  const [weekLeft, setWeekLeft] = React.useState([]);
  const [weekRight, setWeekRight] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [foundWeather, setFoundWeather] = React.useState([]);
  const [notFoundWeather, setNotFoundWeather] = React.useState(false);

  const [daysWeek, setDaysWeek] = React.useState([]);

  React.useEffect(() => {
    async function init() {
      console.log('iniciando');
      try {
        const arrLeft = [];
        const arrRight = [];

        setDaysWeek([
          {day: 'Terça', index: 0},
          {day: 'Quarta', index: 1},
          {day: 'Quinta', index: 2},
          {day: 'Sexta', index: 3},
          {day: 'Sabado', index: 4},
        ]);
        //req dos estados
        const rj =
          'http://api.openweathermap.org/data/2.5/forecast?q=rio de janeiro&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const sp =
          'http://api.openweathermap.org/data/2.5/forecast?q=são paulo&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const bh =
          'http://api.openweathermap.org/data/2.5/forecast?q=belo horizonte&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const br =
          'http://api.openweathermap.org/data/2.5/forecast?q=brasília&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const be =
          'http://api.openweathermap.org/data/2.5/forecast?q=belém&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const sa =
          'http://api.openweathermap.org/data/2.5/forecast?q=Salvador&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const cu =
          'http://api.openweathermap.org/data/2.5/forecast?q=Curitiba&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const fo =
          'http://api.openweathermap.org/data/2.5/forecast?q=Fortaleza&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const ma =
          'http://api.openweathermap.org/data/2.5/forecast?q=Manaus&APPID=c9e521ce9d19eaee59d2bac74f6410a9';
        const jo =
          'http://api.openweathermap.org/data/2.5/forecast?q=João Pessoa&APPID=c9e521ce9d19eaee59d2bac74f6410a9';

        Promise.all([
          fetch(rj).then((_rj) => _rj.json()),
          fetch(sp).then((_sp) => _sp.json()),
          fetch(bh).then((_bh) => _bh.json()),
          fetch(br).then((_br) => _br.json()),
          fetch(be).then((_be) => _be.json()),
          fetch(sa).then((_sa) => _sa.json()),
          fetch(cu).then((_cu) => _cu.json()),
          fetch(fo).then((_fo) => _fo.json()),
          fetch(ma).then((_ma) => _ma.json()),
          fetch(jo).then((_jo) => _jo.json()),
        ])
          .then((weather) => {
            for (let i = 0; i < weather.length; i++) {
              if (i <= 4) {
                arrLeft.push(weather[i]);
              } else {
                arrRight.push(weather[i]);
              }
            }
          })
          .then(() => {
            setWeekLeft(arrLeft);
            setWeekRight(arrRight);
            setLoading(true);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
    init();
  }, []);

  async function submitHandler(searchCity) {
    console.log(searchCity);

    let url1 = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=c9e521ce9d19eaee59d2bac74f6410a9`;
    let url2 = `http://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&APPID=c9e521ce9d19eaee59d2bac74f6410a9`;

    Promise.all([
      fetch(url1).then((city) => city.json()),
      fetch(url2).then((week) => week.json()),
    ])
      .then((weatherForecast) => {
        if (weatherForecast[0].cod && weatherForecast[1].cod === '404') {
          setNotFoundWeather(true);
          setFoundWeather([]);
        }

        if (weatherForecast[0].cod && weatherForecast[1].cod === '200') {
          setFoundWeather(weatherForecast);
          setNotFoundWeather(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const changeHandler = (val) => {
    setSearch(val);
  };

  const ComponentWeatherForecast = () => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
          width: 300,
        }}>
        <Text style={{marginLeft: 10}}>
          {foundWeather[0].name}, {foundWeather[0].sys.country}
        </Text>
        <Text style={{marginLeft: 10}}>
          {verifyCountryAndWeather(foundWeather[0].weather[0].description)}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{marginLeft: 9}}>
              <FontAwesomeIcon
                icon={faArrowDown}
                size={10}
                style={(styles.iconSearch, stylesColors.orange)}
              />
              {foundWeather[0].main.temp_min.toString().substring(0, 2)}
            </Text>
            <Text style={{marginLeft: 4, flexGrow: 2}}>
              <FontAwesomeIcon
                icon={faArrowUp}
                size={10}
                style={(styles.iconSearch, stylesColors.orange)}
              />
              {foundWeather[0].main.temp_max.toString().substring(0, 2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{color: 'gray'}}>Sensação -</Text>
            <Text>
              {foundWeather[0].main.temp.toString().substring(0, 2)}
              ºC
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{marginLeft: 9, color: 'gray'}}>Vento</Text>
            <Text>
              {foundWeather[0].wind.speed.toString().substring(0, 1)}km/h
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{color: 'gray'}}>Humidade</Text>
            <Text>{foundWeather[0].main.humidity}%</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <FlatList
            numColumns={5}
            keyExtractor={(day) => day.index}
            data={daysWeek}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item.day}</Text>
                <Text
                  style={{
                    color: 'orange',
                    fontWeight: 'bold',
                  }}>
                  {foundWeather?.[1].list[item.index].main.temp_min
                    .toString()
                    .substring(0, 2)}
                  º
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  };

  return loading === true ? (
    <LinearGradient
      colors={['#11998e', '#38ef7d']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Previsão do tempo</Text>

        {foundWeather.length > 0 ? <ComponentWeatherForecast /> : null}

        {notFoundWeather === true ? (
          <View style={{backgroundColor: 'white', padding: 10, marginTop: 10}}>
            <Text>Nada foi encontrado ;(</Text>
          </View>
        ) : null}

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            alignContent: 'center',
          }}>
          <TextInput
            style={styles.input}
            placeholder="Insira aqui o nome da cidade"
            placeholderTextColor="white"
            onChangeText={changeHandler}
          />
          <TouchableOpacity
            onPress={() => submitHandler(search)}
            style={stylesColors.whiteSmoke}>
            <FontAwesomeIcon
              icon={faSearch}
              size={15}
              style={styles.iconSearch}
            />
          </TouchableOpacity>
        </View>
        <CapitalList weekLeft={weekLeft} weekRight={weekRight} />
      </View>
    </LinearGradient>
  ) : null;
}

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 38,
    color: 'white',
  },
  secondTitle: {
    color: 'white',
    fontSize: 30,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    padding: 6,
    color: 'white',
    width: 280,
    fontWeight: 'bold',
    borderRadius: 1,
    borderColor: 'whitesmoke',
    borderWidth: 0.6,
  },
  iconSearch: {
    backgroundColor: 'white',
    margin: 13,
  },
  flexDirectionRow: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
  },
  textMarginLeft: {
    margin: 5,
    color: 'white',
  },
  containerBottom: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
export default App;
