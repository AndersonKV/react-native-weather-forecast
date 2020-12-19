export function verifyCountryAndWeather(weather) {
  switch (weather) {
    /*Group 2xx: Thunderstorm*/
    case 'thunderstorm with light rain':
      return 'trovoada com chuva fraca';

    case 'thunderstorm with rain':
      return 'trovoada com chuva';

    case 'thunderstorm with heavy rain':
      return 'tempestade com chuva forte';

    case 'light thunderstorm':
      return 'trovoada leve';

    case 'thunderstorm':
      return 'trovoada';

    case 'heavy thunderstorm':
      return 'trovoada intensa';

    case 'ragged thunderstorm':
      return 'tempestade irregular';

    case 'thunderstorm with light drizzle	':
      return 'trovoada com chuviscos leves';

    case 'thunderstorm with drizzle':
      return 'trovoada com garoa';

    /*Group 3xx: Drizzle*/

    case 'light intensity drizzle':
      return 'chuvisco de intensidade de luz';

    case 'drizzle':
      return 'chuvisco';

    case 'heavy intensity drizzle':
      return 'chuviscos intensos';

    case 'light intensity drizzle rain':
      return 'intensidade leve chuva chuvisco';

    case 'drizzle rain':
      return 'chuvisco';

    case 'heavy intensity drizzle rain':
      return 'forte chuva intensa chuvisco';

    case 'shower rain and drizzle':
      return 'chuva de chuva e chuvisco';

    case 'heavy shower rain and drizzle':
      return 'chuva forte e chuvisco';

    case 'shower drizzle':
      return 'chuvisco do chuveiro';

    /*Group 5xx: Rain*/

    case 'light rain':
      return 'chuva leve';

    case 'moderate rain	':
      return 'chuva moderada';

    case 'heavy intensity rain':
      return 'chuva intensa';

    case 'very heavy rain':
      return 'chuva muito forte';

    case 'extreme rain':
      return 'chuva extrema';

    case 'freezing rain	':
      return 'chuva congelante';

    case 'light intensity shower rain':
      return 'chuva intensa com chuva intensa';

    case 'shower rain':
      return 'chuva de banho';

    case 'heavy intensity shower rain':
      return 'chuva forte de chuva intensa';

    case 'ragged shower rain':
      return 'chuva de chuva irregular';

    /*Group 6xx: Snow*/

    case 'light snow':
      return 'pouca neve';

    case 'Snow':
      return 'neve';

    case 'Heavy snow':
      return 'Neve pesada';

    case 'Sleet':
      return 'achuva com neve';

    case 'Light shower sleet':
      return 'Granizo leve';

    case 'Shower sleet':
      return 'chuva de granizo';

    case 'Light rain and snow':
      return 'Chuva e neve fraca';

    case 'Rain and snow':
      return 'chuva e neve';

    case 'Light shower snow':
      return 'Nevoeiro leve';

    case 'Shower snow':
      return 'Neve no chuveiro';

    case 'Heavy shower snow':
      return 'Neve pesada';

    /*Group 7xx: Atmosphere*/

    case 'mist':
      return 'névoa';

    case 'Smoke':
      return 'Fumaça';

    case 'Haze':
      return 'Neblina';

    case 'sand/ dust whirls':
      return 'turbilhões de areia / poeira';

    case 'fog':
      return 'névoa';

    case 'sand':
      return 'areia';

    case 'dust':
      return 'poeira';

    case 'volcanic ash':
      return 'cinza vulcanica';

    case 'squalls':
      return 'rajadas';

    case 'tornado':
      return 'tornado';

    /*Group 800: Clear*/

    case 'clear sky':
      return 'céu limpo';

    /*Group 80x: Clouds*/
    case 'few clouds':
      return 'poucas nuvens';

    case 'scattered clouds':
      return 'nuvens dispersas';

    case 'broken clouds':
      return 'nuvens quebradas';

    case 'overcast clouds':
      return 'nuvens nubladas';
  }
}
