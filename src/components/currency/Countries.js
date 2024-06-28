/*
World currencies sources: 
https://www.countries-ofthe-world.com/world-currencies.html
https://openknowledge.fao.org/server/api/core/bitstreams/7d0c5832-7360-4f49-962d-ccf72338dc79/content 
*/

//label is what's displayed as a dropdown option, value is what's passed as a parameter
export const Countries = [
    { label: 'Afghanistan (AFN)', value: 'Afghanistan (AFN)' },
    { label: 'Akrotiri and Dhekelia (EUR)', value: 'Akrotiri and Dhekelia (EUR)' },
    { label: 'Aland Islands (EUR)', value: 'Aland Islands (EUR)' },
    { label: 'Albania (ALL)', value: 'Albania (ALL)' },
    { label: 'Algeria (DZD)', value: 'Algeria (DZD)' },
    { label: 'American Samoa (USD)', value: 'American Samoa (USD)' },
    { label: 'Andorra (EUR)', value: 'Andorra (EUR)' },
    { label: 'Angola (AOA)', value: 'Angola (AOA)' },
    { label: 'Anguilla (XCD)', value: 'Anguilla (XCD)' },
    { label: 'Antigua and Barbuda (XCD)', value: 'Antigua and Barbuda (XCD)' },
    { label: 'Argentina (ARS)', value: 'Argentina (ARS)' },
    { label: 'Armenia (AMD)', value: 'Armenia (AMD)' },
    { label: 'Aruba (AWG)', value: 'Aruba (AWG)' },
    { label: 'Ascension Island (SHP)', value: 'Ascension Island (SHP)' },
    { label: 'Australia (AUD)', value: 'Australia (AUD)' },
    { label: 'Austria (EUR)', value: 'Austria (EUR)' },
    { label: 'Azerbaijan (AZN)', value: 'Azerbaijan (AZN)' },
    { label: 'Bahamas (BSD)', value: 'Bahamas (BSD)' },
    { label: 'Bahrain (BHD)', value: 'Bahrain (BHD)' },
    { label: 'Bangladesh (BDT)', value: 'Bangladesh (BDT)' },
    { label: 'Barbados (BBD)', value: 'Barbados (BBD)' },
    { label: 'Belarus (BYN)', value: 'Belarus (BYN)' },
    { label: 'Belgium (EUR)', value: 'Belgium (EUR)' },
    { label: 'Belize (BZD)', value: 'Belize (BZD)' },
    { label: 'Benin (XOF)', value: 'Benin (XOF)' },
    { label: 'Bermuda (BMD)', value: 'Bermuda (BMD)' },
    { label: 'Bhutan (BTN)', value: 'Bhutan (BTN)' },
    { label: 'Bolivia (BOB)', value: 'Bolivia (BOB)' },
    { label: 'Bonaire (USD)', value: 'Bonaire (USD)' },
    { label: 'Bosnia and Herzegovina (BAM)', value: 'Bosnia and Herzegovina (BAM)' },
    { label: 'Botswana (BWP)', value: 'Botswana (BWP)' },
    { label: 'Brazil (BRL)', value: 'Brazil (BRL)' },
    { label: 'British Indian Ocean Territory (USD)', value: 'British Indian Ocean Territory (USD)' },
    { label: 'British Virgin Islands (USD)', value: 'British Virgin Islands (USD)' },
    { label: 'Brunei (BND)', value: 'Brunei (BND)' },
    { label: 'Bulgaria (BGN)', value: 'Bulgaria (BGN)' },
    { label: 'Burkina Faso (XOF)', value: 'Burkina Faso (XOF)' },
    { label: 'Burundi (BIF)', value: 'Burundi (BIF)' },
    { label: 'Cabo Verde (CVE)', value: 'Cabo Verde (CVE)' },
    { label: 'Cambodia (KHR)', value: 'Cambodia (KHR)' },
    { label: 'Cameroon (XAF)', value: 'Cameroon (XAF)' },
    { label: 'Canada (CAD)', value: 'Canada (CAD)' },
    { label: 'Caribbean Netherlands (USD)', value: 'Caribbean Netherlands (USD)' },
    { label: 'Cayman Islands (KYD)', value: 'Cayman Islands (KYD)' },
    { label: 'Central African Republic (XAF)', value: 'Central African Republic (XAF)' },
    { label: 'Chad (XAF)', value: 'Chad (XAF)' },
    { label: 'Chatham Islands (NZD)', value: 'Chatham Islands (NZD)' },
    { label: 'Chile (CLP)', value: 'Chile (CLP)' },
    { label: 'China (CNY)', value: 'China (CNY)' },
    { label: 'Christmas Island (AUD)', value: 'Christmas Island (AUD)' },
    { label: 'Cocos (Keeling) Islands (AUD)', value: 'Cocos (Keeling) Islands (AUD)' },
    { label: 'Colombia (COP)', value: 'Colombia (COP)' },
    { label: 'Comoros (KMF)', value: 'Comoros (KMF)' },
    { label: 'Congo (Congo-Brazzaville) (XAF)', value: 'Congo (Congo-Brazzaville) (XAF)' },
    { label: 'Cook Islands (NZD)', value: 'Cook Islands (NZD)' },
    { label: 'Costa Rica (CRC)', value: 'Costa Rica (CRC)' },
    { label: 'Côte d\'Ivoire (XOF)', value: 'Côte d\'Ivoire (XOF)' },
    { label: 'Croatia (EUR)', value: 'Croatia (EUR)' },
    { label: 'Cuba (CUP)', value: 'Cuba (CUP)' },
    { label: 'Curaçao (ANG)', value: 'Curaçao (ANG)' },
    { label: 'Cyprus (EUR)', value: 'Cyprus (EUR)' },
    { label: 'Czechia (Czech Republic) (CZK)', value: 'Czechia (Czech Republic) (CZK)' },
    { label: 'Democratic Republic of the Congo (CDF)', value: 'Democratic Republic of the Congo (CDF)' }, //GET
    { label: 'Denmark (DKK)', value: 'Denmark (DKK)' },
    { label: 'Djibouti (DJF)', value: 'Djibouti (DJF)' },
    { label: 'Dominica (XCD)', value: 'Dominica (XCD)' },
    { label: 'Dominican Republic (DOP)', value: 'Dominican Republic (DOP)' },
    { label: 'Ecuador (USD)', value: 'Ecuador (USD)' },
    { label: 'Egypt (EGP)', value: 'Egypt (EGP)' },
    { label: 'El Salvador (USD)', value: 'El Salvador (USD)' },
    { label: 'Equatorial Guinea (XAF)', value: 'Equatorial Guinea (XAF)' },
    { label: 'Eritrea (ERN)', value: 'Eritrea (ERN)' },
    { label: 'Estonia (EUR)', value: 'Estonia (EUR)' },
    { label: 'Eswatini (SZL)', value: 'Eswatini (SZL)' },
    { label: 'Ethiopia (ETB)', value: 'Ethiopia (ETB)' },
    { label: 'Falkland Islands (FKP)', value: 'Falkland Islands (FKP)' },
    { label: 'Faroe Islands (DKK)', value: 'Faroe Islands (DKK)' },
    { label: 'Fiji (FJD)', value: 'Fiji (FJD)' },
    { label: 'Finland (EUR)', value: 'Finland (EUR)' },
    { label: 'France (EUR)', value: 'France (EUR)' },
    { label: 'French Guiana (EUR)', value: 'French Guiana (EUR)' },
    { label: 'French Polynesia (XPF)', value: 'French Polynesia (XPF)' },
    { label: 'Gabon (XAF)', value: 'Gabon (XAF)' },
    { label: 'Gambia (GMD)', value: 'Gambia (GMD)' },
    { label: 'Georgia (GEL)', value: 'Georgia (GEL)' },
    { label: 'Germany (EUR)', value: 'Germany (EUR)' },
    { label: 'Ghana (GHS)', value: 'Ghana (GHS)' },
    { label: 'Gibraltar (GIP)', value: 'Gibraltar (GIP)' },
    { label: 'Greece (EUR)', value: 'Greece (EUR)' },
    { label: 'Greenland (DKK)', value: 'Greenland (DKK)' },
    { label: 'Grenada (XCD)', value: 'Grenada (XCD)' },
    { label: 'Guadeloupe (EUR)', value: 'Guadeloupe (EUR)' },
    { label: 'Guam (USD)', value: 'Guam (USD)' },
    { label: 'Guatemala (GTQ)', value: 'Guatemala (GTQ)' },
    { label: 'Guernsey (GGP)', value: 'Guernsey (GGP)' },
    { label: 'Guinea (GNF)', value: 'Guinea (GNF)' },
    { label: 'Guinea-Bissau (XOF)', value: 'Guinea-Bissau (XOF)' },
    { label: 'Guyana (GYD)', value: 'Guyana (GYD)' },
    { label: 'Haiti (HTG)', value: 'Haiti (HTG)' },
    { label: 'Honduras (HNL)', value: 'Honduras (HNL)' },
    { label: 'Hong Kong (HKD)', value: 'Hong Kong (HKD)' },
    { label: 'Hungary (HUF)', value: 'Hungary (HUF)' },
    { label: 'Iceland (ISK)', value: 'Iceland (ISK)' },
    { label: 'India (INR)', value: 'India (INR)' },
    { label: 'Indonesia (IDR)', value: 'Indonesia (IDR)' },
    { label: 'Iran (IRR)', value: 'Iran (IRR)' },
    { label: 'Iraq (IQD)', value: 'Iraq (IQD)' },
    { label: 'Ireland (EUR)', value: 'Ireland (EUR)' },
    { label: 'Isle of Man (IMP)', value: 'Isle of Man (IMP)' },
    { label: 'Israel (ILS)', value: 'Israel (ILS)' },
    { label: 'Italy (EUR)', value: 'Italy (EUR)' },
    { label: 'Jamaica (JMD)', value: 'Jamaica (JMD)' },
    { label: 'Japan (JPY)', value: 'Japan (JPY)' },
    { label: 'Jersey (JEP)', value: 'Jersey (JEP)' },
    { label: 'Jordan (JOD)', value: 'Jordan (JOD)' },
    { label: 'Kazakhstan (KZT)', value: 'Kazakhstan (KZT)' },
    { label: 'Kenya (KES)', value: 'Kenya (KES)' },
    { label: 'Kiribati (AUD)', value: 'Kiribati (AUD)' },
    { label: 'Kosovo (EUR)', value: 'Kosovo (EUR)' },
    { label: 'Kuwait (KWD)', value: 'Kuwait (KWD)' },
    { label: 'Kyrgyzstan (KGS)', value: 'Kyrgyzstan (KGS)' },
    { label: 'Laos (LAK)', value: 'Laos (LAK)' },
    { label: 'Latvia (EUR)', value: 'Latvia (EUR)' },
    { label: 'Lebanon (LBP)', value: 'Lebanon (LBP)' },
    { label: 'Lesotho (LSL)', value: 'Lesotho (LSL)' },
    { label: 'Liberia (LRD)', value: 'Liberia (LRD)' },
    { label: 'Libya (LYD)', value: 'Libya (LYD)' },
    { label: 'Liechtenstein (CHF)', value: 'Liechtenstein (CHF)' },
    { label: 'Lithuania (EUR)', value: 'Lithuania (EUR)' },
    { label: 'Luxembourg (EUR)', value: 'Luxembourg (EUR)' },
    { label: 'Macau (MOP)', value: 'Macau (MOP)' },
    { label: 'Madagascar (MGA)', value: 'Madagascar (MGA)' },
    { label: 'Malawi (MWK)', value: 'Malawi (MWK)' },
    { label: 'Malaysia (MYR)', value: 'Malaysia (MYR)' },
    { label: 'Maldives (MVR)', value: 'Maldives (MVR)' },
    { label: 'Mali (XOF)', value: 'Mali (XOF)' },
    { label: 'Malta (EUR)', value: 'Malta (EUR)' },
    { label: 'Marshall Islands (USD)', value: 'Marshall Islands (USD)' },
    { label: 'Martinique (EUR)', value: 'Martinique (EUR)' },
    { label: 'Mauritania (MRU)', value: 'Mauritania (MRU)' },
    { label: 'Mauritius (MUR)', value: 'Mauritius (MUR)' },
    { label: 'Mayotte (EUR)', value: 'Mayotte (EUR)' },
    { label: 'Mexico (MXN)', value: 'Mexico (MXN)' },
    { label: 'Micronesia (USD)', value: 'Micronesia (USD)' },
    { label: 'Moldova (MDL)', value: 'Moldova (MDL)' },
    { label: 'Monaco (EUR)', value: 'Monaco (EUR)' },
    { label: 'Mongolia (MNT)', value: 'Mongolia (MNT)' },
    { label: 'Montenegro (EUR)', value: 'Montenegro (EUR)' },
    { label: 'Montserrat (XCD)', value: 'Montserrat (XCD)' },
    { label: 'Morocco (MAD)', value: 'Morocco (MAD)' },
    { label: 'Mozambique (MZN)', value: 'Mozambique (MZN)' },
    { label: 'Myanmar (MMK)', value: 'Myanmar (MMK)' },
    { label: 'Namibia (NAD)', value: 'Namibia (NAD)' },
    { label: 'Nauru (AUD)', value: 'Nauru (AUD)' },
    { label: 'Nepal (NPR)', value: 'Nepal (NPR)' },
    { label: 'Netherlands (EUR)', value: 'Netherlands (EUR)' },
    { label: 'New Caledonia (XPF)', value: 'New Caledonia (XPF)' },
    { label: 'New Zealand (NZD)', value: 'New Zealand (NZD)' },
    { label: 'Nicaragua (NIO)', value: 'Nicaragua (NIO)' },
    { label: 'Niger (XOF)', value: 'Niger (XOF)' },
    { label: 'Nigeria (NGN)', value: 'Nigeria (NGN)' },
    { label: 'Niue (NZD)', value: 'Niue (NZD)' },
    { label: 'Norfolk Island (AUD)', value: 'Norfolk Island (AUD)' },
    { label: 'Northern Mariana Islands (USD)', value: 'Northern Mariana Islands (USD)' },
    { label: 'North Korea (KPW)', value: 'North Korea (KPW)' },
    { label: 'North Macedonia (MKD)', value: 'North Macedonia (MKD)' },
    { label: 'Norway (NOK)', value: 'Norway (NOK)' },
    { label: 'Oman (OMR)', value: 'Oman (OMR)' },
    { label: 'Pakistan (PKR)', value: 'Pakistan (PKR)' },
    { label: 'Palau (USD)', value: 'Palau (USD)' },
    { label: 'Palestine (ILS)', value: 'Palestine (ILS)' },
    { label: 'Panama (USD)', value: 'Panama (USD)' },
    { label: 'Papua New Guinea (PGK)', value: 'Papua New Guinea (PGK)' },
    { label: 'Paraguay (PYG)', value: 'Paraguay (PYG)' },
    { label: 'Peru (PEN)', value: 'Peru (PEN)' },
    { label: 'Philippines (PHP)', value: 'Philippines (PHP)' },
    { label: 'Pitcairn Islands (NZD)', value: 'Pitcairn Islands (NZD)' },
    { label: 'Poland (PLN)', value: 'Poland (PLN)' },
    { label: 'Portugal (EUR)', value: 'Portugal (EUR)' },
    { label: 'Puerto Rico (USD)', value: 'Puerto Rico (USD)' },
    { label: 'Qatar (QAR)', value: 'Qatar (QAR)' },
    { label: 'Réunion (EUR)', value: 'Réunion (EUR)' },
    { label: 'Romania (RON)', value: 'Romania (RON)' },
    { label: 'Russia (RUB)', value: 'Russia (RUB)' },
    { label: 'Rwanda (RWF)', value: 'Rwanda (RWF)' },
    { label: 'Saba (USD)', value: 'Saba (USD)' },
    { label: 'Saint Barthélemy (EUR)', value: 'Saint Barthélemy (EUR)' },
    { label: 'Saint Helena (SHP)', value: 'Saint Helena (SHP)' },
    { label: 'Saint Kitts and Nevis (XCD)', value: 'Saint Kitts and Nevis (XCD)' },
    { label: 'Saint Lucia (XCD)', value: 'Saint Lucia (XCD)' },
    { label: 'Saint Martin (EUR)', value: 'Saint Martin (EUR)' },
    { label: 'Saint Pierre and Miquelon (EUR)', value: 'Saint Pierre and Miquelon (EUR)' },
    { label: 'Saint Vincent and the Grenadines (XCD)', value: 'Saint Vincent and the Grenadines (XCD)' },
    { label: 'Samoa (WST)', value: 'Samoa (WST)' },
    { label: 'San Marino (EUR)', value: 'San Marino (EUR)' },
    { label: 'Sao Tome and Principe (STN)', value: 'Sao Tome and Principe (STN)' },
    { label: 'Saudi Arabia (SAR)', value: 'Saudi Arabia (SAR)' },
    { label: 'Senegal (XOF)', value: 'Senegal (XOF)' },
    { label: 'Serbia (RSD)', value: 'Serbia (RSD)' },
    { label: 'Seychelles (SCR)', value: 'Seychelles (SCR)' },
    { label: 'Sierra Leone (SLE)', value: 'Sierra Leone (SLE)' },
    { label: 'Singapore (SGD)', value: 'Singapore (SGD)' },
    { label: 'Sint Eustatius (USD)', value: 'Sint Eustatius (USD)' },
    { label: 'Sint Maarten (ANG)', value: 'Sint Maarten (ANG)' },
    { label: 'Slovakia (EUR)', value: 'Slovakia (EUR)' },
    { label: 'Slovenia (EUR)', value: 'Slovenia (EUR)' },
    { label: 'Solomon Islands (SBD)', value: 'Solomon Islands (SBD)' },
    { label: 'Somalia (SOS)', value: 'Somalia (SOS)' },
    { label: 'South Africa (ZAR)', value: 'South Africa (ZAR)' },
    { label: 'South Georgia Island (GBP)', value: 'South Georgia Island (GBP)' },
    { label: 'South Korea (KRW)', value: 'South Korea (KRW)' },
    { label: 'South Sudan (SSP)', value: 'South Sudan (SSP)' },
    { label: 'Spain (EUR)', value: 'Spain (EUR)' },
    { label: 'Sri Lanka (LKR)', value: 'Sri Lanka (LKR)' },
    { label: 'Sudan (SDG)', value: 'Sudan (SDG)' },
    { label: 'Suriname (SRD)', value: 'Suriname (SRD)' },
    { label: 'Svalbard and Jan Mayen (NOK)', value: 'Svalbard and Jan Mayen (NOK)' },
    { label: 'Sweden (SEK)', value: 'Sweden (SEK)' },
    { label: 'Switzerland (CHF)', value: 'Switzerland (CHF)' },
    { label: 'Syria (SYP)', value: 'Syria (SYP)' },
    { label: 'Taiwan (TWD)', value: 'Taiwan (TWD)' },
    { label: 'Tajikistan (TJS)', value: 'Tajikistan (TJS)' },
    { label: 'Tanzania (TZS)', value: 'Tanzania (TZS)' },
    { label: 'Thailand (THB)', value: 'Thailand (THB)' },
    { label: 'Timor-Leste (USD)', value: 'Timor-Leste (USD)' },
    { label: 'Togo (XOF)', value: 'Togo (XOF)' },
    { label: 'Tokelau (NZD)', value: 'Tokelau (NZD)' },
    { label: 'Tonga (TOP)', value: 'Tonga (TOP)' },
    { label: 'Trinidad and Tobago (TTD)', value: 'Trinidad and Tobago (TTD)' },
    { label: 'Tristan da Cunha (GBP)', value: 'Tristan da Cunha (GBP)' },
    { label: 'Tunisia (TND)', value: 'Tunisia (TND)' },
    { label: 'Turkey (TRY)', value: 'Turkey (TRY)' },
    { label: 'Turkmenistan (TMT)', value: 'Turkmenistan (TMT)' },
    { label: 'Turks and Caicos Islands (USD)', value: 'Turks and Caicos Islands (USD)' },    
    { label: 'Tuvalu (AUD)', value: 'Tuvalu (AUD)' },
    { label: 'Uganda (UGX)', value: 'Uganda (UGX)' },
    { label: 'Ukraine (UAH)', value: 'Ukraine (UAH)' },
    { label: 'United Arab Emirates (UAE) (AED)', value: 'United Arab Emirates (UAE) (AED)' },
    { label: 'United Kingdom (UK) (GBP)', value: 'United Kingdom (UK) (GBP)' },
    { label: 'United States of America (USA) (USD)', value: 'United States of America (USA) (USD)' },
    { label: 'Uruguay (UYU)', value: 'Uruguay (UYU)' },
    { label: 'US Virgin Islands (USD)', value: 'US Virgin Islands (USD)' },
    { label: 'Uzbekistan (UZS)', value: 'Uzbekistan (UZS)' },
    { label: 'Vanuatu (VUV)', value: 'Vanuatu (VUV)' },
    { label: 'Vatican City (Holy See) (EUR)', value: 'Vatican City (Holy See) (EUR)' },
    { label: 'Venezuela (VES)', value: 'Venezuela (VES)' },
    { label: 'Vietnam (VND)', value: 'Vietnam (VND)' },
    { label: 'Wake Island (USD)', value: 'Wake Island (USD)' },
    { label: 'Wallis and Futuna (XPF)', value: 'Wallis and Futuna (XPF)' },
    { label: 'Yemen (YER)', value: 'Yemen (YER)' },
    { label: 'Zambia (ZMW)', value: 'Zambia (ZMW)' },
    { label: 'Zimbabwe (USD)', value: 'Zimbabwe (USD)' },

];