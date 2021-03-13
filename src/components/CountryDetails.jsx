import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { params } = props.match;
  const country = props.countryChangeHandler(params.code);
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {!country.borders.length ? (
                  <p>Border with no country</p>
                ) : (
                  country.borders.map((code) => {
                    return (
                      <li key={code}>
                        <Link to={`/${code}`}>
                          {props.countryChangeHandler(code).name.official}
                        </Link>
                      </li>
                    );
                  })
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
