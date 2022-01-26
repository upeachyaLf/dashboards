const mock = [
	
	{
			"S.No": "1",
			"Voltage": "3.36",
			"Current": "-1.47",
			"Power": "-4.94",
			"Energy": "-0.01",
			"Timestamp": "2022-01-21 14:38:31"
	},
	{
			"S.No": "2",
			"Voltage": "3.26",
			"Current": "3.50",
			"Power": "11.41",
			"Energy": "0.02",
			"Timestamp": "2022-01-21 14:38:41"
	},
	{
			"S.No": "3",
			"Voltage": "3.09",
			"Current": "3.78",
			"Power": "11.69",
			"Energy": "0.05",
			"Timestamp": "2022-01-21 14:38:54"
	},
	{
			"S.No": "4",
			"Voltage": "3.77",
			"Current": "1.26",
			"Power": "4.75",
			"Energy": "0.01",
			"Timestamp": "2022-01-21 15:04:18"
	},
	{
			"S.No": "5",
			"Voltage": "3.78",
			"Current": "-2.45",
			"Power": "-9.27",
			"Energy": "-0.01",
			"Timestamp": "2022-01-21 15:04:28"
	},
	{
			"S.No": "6",
			"Voltage": "3.65",
			"Current": "-2.24",
			"Power": "-8.17",
			"Energy": "-0.04",
			"Timestamp": "2022-01-21 15:04:40"
	},
	{
			"S.No": "7",
			"Voltage": "3.72",
			"Current": "2.38",
			"Power": "8.85",
			"Energy": "-0.01",
			"Timestamp": "2022-01-21 15:04:50"
	},
	{
			"S.No": "8",
			"Voltage": "3.72",
			"Current": "-1.96",
			"Power": "-7.29",
			"Energy": "-0.03",
			"Timestamp": "2022-01-21 15:05:01"
	},
	{
			"S.No": "9",
			"Voltage": "3.58",
			"Current": "2.38",
			"Power": "8.52",
			"Energy": "-0.01",
			"Timestamp": "2022-01-21 15:05:11"
	},
	{
			"S.No": "10",
			"Voltage": "3.45",
			"Current": "3.01",
			"Power": "10.37",
			"Energy": "0.02",
			"Timestamp": "2022-01-21 15:05:22"
	},
	{
			"S.No": "11",
			"Voltage": "3.56",
			"Current": "-0.63",
			"Power": "-2.25",
			"Energy": "0.02",
			"Timestamp": "2022-01-21 15:05:32"
	},
	{
			"S.No": "12",
			"Voltage": "3.51",
			"Current": "3.01",
			"Power": "10.58",
			"Energy": "0.04",
			"Timestamp": "2022-01-21 15:05:43"
	},
	{
			"S.No": "13",
			"Voltage": "3.46",
			"Current": "3.57",
			"Power": "12.37",
			"Energy": "0.08",
			"Timestamp": "2022-01-21 15:05:53"
	},
	{
			"S.No": "14",
			"Voltage": "3.46",
			"Current": "1.19",
			"Power": "4.12",
			"Energy": "0.09",
			"Timestamp": "2022-01-21 15:06:04"
	},
	{
			"S.No": "15",
			"Voltage": "3.31",
			"Current": "3.50",
			"Power": "11.59",
			"Energy": "0.12",
			"Timestamp": "2022-01-21 15:06:15"
	},
	{
			"S.No": "16",
			"Voltage": "3.48",
			"Current": "-1.75",
			"Power": "-6.09",
			"Energy": "0.11",
			"Timestamp": "2022-01-21 15:06:25"
	},
	{
			"S.No": "17",
			"Voltage": "3.41",
			"Current": "-1.19",
			"Power": "-4.06",
			"Energy": "0.09",
			"Timestamp": "2022-01-21 15:06:36"
	},
	{
			"S.No": "18",
			"Voltage": "3.33",
			"Current": "3.64",
			"Power": "12.12",
			"Energy": "0.13",
			"Timestamp": "2022-01-21 15:06:47"
	},
	{
			"S.No": "19",
			"Voltage": "3.29",
			"Current": "0.70",
			"Power": "2.31",
			"Energy": "0.13",
			"Timestamp": "2022-01-21 15:06:57"
	},
	{
			"S.No": "20",
			"Voltage": "3.19",
			"Current": "-1.54",
			"Power": "-4.92",
			"Energy": "0.12",
			"Timestamp": "2022-01-21 15:07:08"
	},
	{
			"S.No": "21",
			"Voltage": "3.26",
			"Current": "3.99",
			"Power": "13.01",
			"Energy": "0.16",
			"Timestamp": "2022-01-21 15:07:19"
	},
	{
			"S.No": "22",
			"Voltage": "3.31",
			"Current": "-1.26",
			"Power": "-4.17",
			"Energy": "0.15",
			"Timestamp": "2022-01-21 15:07:29"
	},
	{
			"S.No": "23",
			"Voltage": "3.31",
			"Current": "-0.70",
			"Power": "-2.32",
			"Energy": "0.14",
			"Timestamp": "2022-01-21 15:07:40"
	},
	{
			"S.No": "24",
			"Voltage": "2.89",
			"Current": "4.06",
			"Power": "11.73",
			"Energy": "0.17",
			"Timestamp": "2022-01-21 15:07:50"
	},
	{
			"S.No": "25",
			"Voltage": "3.41",
			"Current": "-1.54",
			"Power": "-5.26",
			"Energy": "0.16",
			"Timestamp": "2022-01-21 15:08:01"
	},
	{
			"S.No": "26",
			"Voltage": "3.28",
			"Current": "3.50",
			"Power": "11.47",
			"Energy": "0.19",
			"Timestamp": "2022-01-21 15:08:11"
	},
	{
			"S.No": "27",
			"Voltage": "2.97",
			"Current": "4.06",
			"Power": "12.07",
			"Energy": "0.22",
			"Timestamp": "2022-01-21 15:08:22"
	},
	{
			"S.No": "28",
			"Voltage": "3.38",
			"Current": "-0.98",
			"Power": "-3.31",
			"Energy": "0.21",
			"Timestamp": "2022-01-21 15:08:32"
	},
	{
			"S.No": "29",
			"Voltage": "3.18",
			"Current": "4.20",
			"Power": "13.34",
			"Energy": "0.25",
			"Timestamp": "2022-01-21 15:08:43"
	},
	{
			"S.No": "30",
			"Voltage": "10.56",
			"Current": "2.45",
			"Power": "25.87",
			"Energy": "0.07",
			"Timestamp": "2022-01-21 20:01:26"
	},
	{
			"S.No": "31",
			"Voltage": "10.89",
			"Current": "7.14",
			"Power": "77.81",
			"Energy": "0.29",
			"Timestamp": "2022-01-21 20:01:36"
	},
	{
			"S.No": "32",
			"Voltage": "10.99",
			"Current": "5.32",
			"Power": "58.52",
			"Energy": "0.45",
			"Timestamp": "2022-01-21 20:01:47"
	},
	{
			"S.No": "33",
			"Voltage": "10.52",
			"Current": "2.03",
			"Power": "21.37",
			"Energy": "0.51",
			"Timestamp": "2022-01-21 20:01:58"
	},
	{
			"S.No": "34",
			"Voltage": "11.26",
			"Current": "-4.20",
			"Power": "-47.33",
			"Energy": "-0.13",
			"Timestamp": "2022-01-21 20:17:28"
	},
	{
			"S.No": "35",
			"Voltage": "7.55",
			"Current": "0.56",
			"Power": "4.23",
			"Energy": "0.01",
			"Timestamp": "2022-01-21 20:18:03"
	},
	{
			"S.No": "36",
			"Voltage": "7.53",
			"Current": "-0.56",
			"Power": "-4.22",
			"Energy": "0.00",
			"Timestamp": "2022-01-21 20:18:14"
	},
	{
			"S.No": "37",
			"Voltage": "7.82",
			"Current": "-0.77",
			"Power": "-6.02",
			"Energy": "-0.02",
			"Timestamp": "2022-01-21 20:18:24"
	},
	{
			"S.No": "38",
			"Voltage": "7.55",
			"Current": "-0.56",
			"Power": "-4.23",
			"Energy": "-0.03",
			"Timestamp": "2022-01-21 20:18:37"
	},
	{
			"S.No": "39",
			"Voltage": "7.53",
			"Current": "-0.42",
			"Power": "-3.16",
			"Energy": "-0.04",
			"Timestamp": "2022-01-21 20:18:51"
	},
	{
			"S.No": "40",
			"Voltage": "8.09",
			"Current": "3.78",
			"Power": "30.59",
			"Energy": "0.05",
			"Timestamp": "2022-01-21 20:19:01"
	},
	{
			"S.No": "41",
			"Voltage": "7.95",
			"Current": "-0.21",
			"Power": "-1.67",
			"Energy": "-0.00",
			"Timestamp": "2022-01-21 20:19:15"
	},
	{
			"S.No": "42",
			"Voltage": "7.45",
			"Current": "-0.56",
			"Power": "-4.17",
			"Energy": "-0.02",
			"Timestamp": "2022-01-21 20:19:26"
	},
	{
			"S.No": "43",
			"Voltage": "8.04",
			"Current": "0.63",
			"Power": "5.07",
			"Energy": "-0.00",
			"Timestamp": "2022-01-21 20:19:37"
	},
	{
			"S.No": "44",
			"Voltage": "7.90",
			"Current": "1.12",
			"Power": "8.86",
			"Energy": "0.02",
			"Timestamp": "2022-01-21 20:19:47"
	},
	{
			"S.No": "45",
			"Voltage": "7.23",
			"Current": "-0.21",
			"Power": "-1.52",
			"Energy": "0.02",
			"Timestamp": "2022-01-21 20:19:58"
	},
	{
			"S.No": "46",
			"Voltage": "8.53",
			"Current": "1.26",
			"Power": "10.75",
			"Energy": "0.05",
			"Timestamp": "2022-01-21 20:20:09"
	},
	{
			"S.No": "47",
			"Voltage": "8.26",
			"Current": "0.49",
			"Power": "4.05",
			"Energy": "0.06",
			"Timestamp": "2022-01-21 20:20:22"
	},
	{
			"S.No": "48",
			"Voltage": "8.39",
			"Current": "0.56",
			"Power": "4.70",
			"Energy": "0.07",
			"Timestamp": "2022-01-21 20:20:36"
	},
	{
			"S.No": "49",
			"Voltage": "8.44",
			"Current": "0.98",
			"Power": "8.28",
			"Energy": "0.10",
			"Timestamp": "2022-01-21 20:20:46"
	},
	{
			"S.No": "50",
			"Voltage": "8.31",
			"Current": "0.49",
			"Power": "4.07",
			"Energy": "0.11",
			"Timestamp": "2022-01-21 20:20:59"
	},
	{
			"S.No": "51",
			"Voltage": "8.55",
			"Current": "0.70",
			"Power": "5.98",
			"Energy": "0.12",
			"Timestamp": "2022-01-21 20:21:10"
	},
	{
			"S.No": "52",
			"Voltage": "8.71",
			"Current": "6.37",
			"Power": "55.54",
			"Energy": "0.28",
			"Timestamp": "2022-01-21 20:21:20"
	},
	{
			"S.No": "53",
			"Voltage": "8.07",
			"Current": "0.98",
			"Power": "7.91",
			"Energy": "0.30",
			"Timestamp": "2022-01-21 20:21:31"
	},
	{
			"S.No": "54",
			"Voltage": "8.43",
			"Current": "1.33",
			"Power": "11.21",
			"Energy": "0.33",
			"Timestamp": "2022-01-21 20:21:41"
	},
	{
			"S.No": "55",
			"Voltage": "8.51",
			"Current": "0.91",
			"Power": "7.75",
			"Energy": "0.35",
			"Timestamp": "2022-01-21 20:21:52"
	},
	{
			"S.No": "56",
			"Voltage": "8.43",
			"Current": "0.56",
			"Power": "4.72",
			"Energy": "0.37",
			"Timestamp": "2022-01-21 20:22:05"
	},
	{
			"S.No": "57",
			"Voltage": "8.41",
			"Current": "0.63",
			"Power": "5.30",
			"Energy": "0.38",
			"Timestamp": "2022-01-21 20:22:16"
	},
	{
			"S.No": "58",
			"Voltage": "8.58",
			"Current": "1.61",
			"Power": "13.82",
			"Energy": "0.42",
			"Timestamp": "2022-01-21 20:22:26"
	},
	{
			"S.No": "59",
			"Voltage": "8.43",
			"Current": "0.63",
			"Power": "5.31",
			"Energy": "0.43",
			"Timestamp": "2022-01-21 20:22:36"
	},
	{
			"S.No": "60",
			"Voltage": "8.68",
			"Current": "0.84",
			"Power": "7.29",
			"Energy": "0.45",
			"Timestamp": "2022-01-21 20:22:50"
	},
	{
			"S.No": "61",
			"Voltage": "8.71",
			"Current": "0.91",
			"Power": "7.93",
			"Energy": "0.48",
			"Timestamp": "2022-01-21 20:23:00"
	},
	{
			"S.No": "62",
			"Voltage": "8.71",
			"Current": "0.56",
			"Power": "4.88",
			"Energy": "0.49",
			"Timestamp": "2022-01-21 20:23:10"
	},
	{
			"S.No": "63",
			"Voltage": "8.63",
			"Current": "1.47",
			"Power": "12.69",
			"Energy": "0.52",
			"Timestamp": "2022-01-21 20:23:20"
	},
	{
			"S.No": "64",
			"Voltage": "8.61",
			"Current": "0.91",
			"Power": "7.84",
			"Energy": "0.55",
			"Timestamp": "2022-01-21 20:23:30"
	},
	{
			"S.No": "65",
			"Voltage": "8.71",
			"Current": "2.94",
			"Power": "25.63",
			"Energy": "0.62",
			"Timestamp": "2022-01-21 20:23:40"
	},
	{
			"S.No": "66",
			"Voltage": "8.61",
			"Current": "0.49",
			"Power": "4.22",
			"Energy": "0.63",
			"Timestamp": "2022-01-21 20:23:51"
	},
	{
			"S.No": "67",
			"Voltage": "7.68",
			"Current": "-0.28",
			"Power": "-2.15",
			"Energy": "0.62",
			"Timestamp": "2022-01-21 20:24:01"
	},
	{
			"S.No": "68",
			"Voltage": "7.94",
			"Current": "0.98",
			"Power": "7.78",
			"Energy": "0.64",
			"Timestamp": "2022-01-21 20:24:12"
	},
	{
			"S.No": "69",
			"Voltage": "7.60",
			"Current": "0.49",
			"Power": "3.73",
			"Energy": "0.66",
			"Timestamp": "2022-01-21 20:24:22"
	},
	{
			"S.No": "70",
			"Voltage": "7.92",
			"Current": "-0.07",
			"Power": "-0.55",
			"Energy": "0.65",
			"Timestamp": "2022-01-21 20:24:33"
	},
	{
			"S.No": "71",
			"Voltage": "8.06",
			"Current": "0.07",
			"Power": "0.56",
			"Energy": "0.66",
			"Timestamp": "2022-01-21 20:24:43"
	},
	{
			"S.No": "72",
			"Voltage": "7.85",
			"Current": "0.21",
			"Power": "1.65",
			"Energy": "0.66",
			"Timestamp": "2022-01-21 20:24:54"
	},
	{
			"S.No": "73",
			"Voltage": "7.77",
			"Current": "0.56",
			"Power": "4.35",
			"Energy": "0.67",
			"Timestamp": "2022-01-21 20:25:04"
	},
	{
			"S.No": "74",
			"Voltage": "7.58",
			"Current": "-0.42",
			"Power": "-3.19",
			"Energy": "0.66",
			"Timestamp": "2022-01-21 20:25:14"
	},
	{
			"S.No": "75",
			"Voltage": "7.70",
			"Current": "0.00",
			"Power": "0.00",
			"Energy": "0.66",
			"Timestamp": "2022-01-21 20:25:24"
	},
	{
			"S.No": "76",
			"Voltage": "7.79",
			"Current": "-0.35",
			"Power": "-2.73",
			"Energy": "0.66",
			"Timestamp": "2022-01-21 20:25:35"
	},
	{
			"S.No": "77",
			"Voltage": "7.63",
			"Current": "-0.28",
			"Power": "-2.14",
			"Energy": "0.65",
			"Timestamp": "2022-01-21 20:25:45"
	},
	{
			"S.No": "78",
			"Voltage": "8.02",
			"Current": "1.82",
			"Power": "14.61",
			"Energy": "0.69",
			"Timestamp": "2022-01-21 20:25:56"
	},
	{
			"S.No": "79",
			"Voltage": "6.18",
			"Current": "-1.26",
			"Power": "-7.79",
			"Energy": "0.67",
			"Timestamp": "2022-01-21 20:26:06"
	},
	{
			"S.No": "80",
			"Voltage": "5.84",
			"Current": "-0.77",
			"Power": "-4.50",
			"Energy": "0.66",
			"Timestamp": "2022-01-21 20:26:18"
	},
	{
			"S.No": "81",
			"Voltage": "5.83",
			"Current": "-0.63",
			"Power": "-3.67",
			"Energy": "0.65",
			"Timestamp": "2022-01-21 20:26:31"
	},
	{
			"S.No": "82",
			"Voltage": "6.10",
			"Current": "-0.91",
			"Power": "-5.55",
			"Energy": "0.63",
			"Timestamp": "2022-01-21 20:26:42"
	},
	{
			"S.No": "83",
			"Voltage": "6.06",
			"Current": "-1.33",
			"Power": "-8.07",
			"Energy": "0.61",
			"Timestamp": "2022-01-21 20:26:52"
	},
	{
			"S.No": "84",
			"Voltage": "5.94",
			"Current": "-1.47",
			"Power": "-8.74",
			"Energy": "0.58",
			"Timestamp": "2022-01-21 20:27:03"
	},
	{
			"S.No": "85",
			"Voltage": "6.55",
			"Current": "-0.84",
			"Power": "-5.51",
			"Energy": "0.57",
			"Timestamp": "2022-01-21 20:27:14"
	},
	{
			"S.No": "86",
			"Voltage": "6.42",
			"Current": "-1.75",
			"Power": "-11.24",
			"Energy": "0.54",
			"Timestamp": "2022-01-21 20:27:27"
	},
	{
			"S.No": "87",
			"Voltage": "6.08",
			"Current": "-0.91",
			"Power": "-5.54",
			"Energy": "0.52",
			"Timestamp": "2022-01-21 20:27:40"
	},
	{
			"S.No": "88",
			"Voltage": "6.16",
			"Current": "0.56",
			"Power": "3.45",
			"Energy": "0.53",
			"Timestamp": "2022-01-21 20:27:50"
	},
	{
			"S.No": "89",
			"Voltage": "6.10",
			"Current": "1.26",
			"Power": "7.69",
			"Energy": "0.55",
			"Timestamp": "2022-01-21 20:28:01"
	},
	{
			"S.No": "90",
			"Voltage": "5.93",
			"Current": "-1.61",
			"Power": "-9.55",
			"Energy": "0.53",
			"Timestamp": "2022-01-21 20:28:15"
	},
	{
			"S.No": "91",
			"Voltage": "6.11",
			"Current": "1.68",
			"Power": "10.28",
			"Energy": "0.55",
			"Timestamp": "2022-01-21 20:28:26"
	},
	{
			"S.No": "92",
			"Voltage": "6.11",
			"Current": "-1.12",
			"Power": "-6.85",
			"Energy": "0.54",
			"Timestamp": "2022-01-21 20:28:36"
	},
	{
			"S.No": "93",
			"Voltage": "6.01",
			"Current": "-1.54",
			"Power": "-9.26",
			"Energy": "0.51",
			"Timestamp": "2022-01-21 20:28:50"
	},
	{
			"S.No": "94",
			"Voltage": "6.01",
			"Current": "-0.63",
			"Power": "-3.79",
			"Energy": "0.50",
			"Timestamp": "2022-01-21 20:29:01"
	},
	{
			"S.No": "95",
			"Voltage": "6.57",
			"Current": "-0.98",
			"Power": "-6.44",
			"Energy": "0.48",
			"Timestamp": "2022-01-21 20:29:11"
	},
	{
			"S.No": "96",
			"Voltage": "6.20",
			"Current": "-0.07",
			"Power": "-0.43",
			"Energy": "0.48",
			"Timestamp": "2022-01-21 20:29:23"
	},
	{
			"S.No": "97",
			"Voltage": "6.22",
			"Current": "-1.54",
			"Power": "-9.58",
			"Energy": "0.45",
			"Timestamp": "2022-01-21 20:29:35"
	},
	{
			"S.No": "98",
			"Voltage": "6.25",
			"Current": "1.54",
			"Power": "9.63",
			"Energy": "0.48",
			"Timestamp": "2022-01-21 20:29:48"
	},
	{
			"S.No": "99",
			"Voltage": "5.96",
			"Current": "-0.77",
			"Power": "-4.59",
			"Energy": "0.47",
			"Timestamp": "2022-01-21 20:29:59"
	},
	{
			"S.No": "100",
			"Voltage": "5.86",
			"Current": "-0.98",
			"Power": "-5.75",
			"Energy": "0.45",
			"Timestamp": "2022-01-21 20:30:09"
	},
	{
			"S.No": "101",
			"Voltage": "6.08",
			"Current": "-1.33",
			"Power": "-8.09",
			"Energy": "0.43",
			"Timestamp": "2022-01-21 20:30:22"
	},
	{
			"S.No": "102",
			"Voltage": "6.20",
			"Current": "-0.98",
			"Power": "-6.08",
			"Energy": "0.41",
			"Timestamp": "2022-01-21 20:30:33"
	},
	{
			"S.No": "103",
			"Voltage": "6.42",
			"Current": "0.84",
			"Power": "5.39",
			"Energy": "0.01",
			"Timestamp": "2022-01-21 20:31:27"
	},
	{
			"S.No": "104",
			"Voltage": "6.54",
			"Current": "-1.33",
			"Power": "-8.70",
			"Energy": "-0.01",
			"Timestamp": "2022-01-21 20:31:45"
	},
	{
			"S.No": "105",
			"Voltage": "6.27",
			"Current": "-0.14",
			"Power": "-0.88",
			"Energy": "-0.01",
			"Timestamp": "2022-01-21 20:31:56"
	},
	{
			"S.No": "106",
			"Voltage": "6.33",
			"Current": "-0.56",
			"Power": "-3.55",
			"Energy": "-0.02",
			"Timestamp": "2022-01-21 20:32:07"
	},
	{
			"S.No": "107",
			"Voltage": "6.25",
			"Current": "-1.05",
			"Power": "-6.56",
			"Energy": "-0.04",
			"Timestamp": "2022-01-21 20:32:18"
	},
	{
			"S.No": "108",
			"Voltage": "6.22",
			"Current": "0.28",
			"Power": "1.74",
			"Energy": "-0.03",
			"Timestamp": "2022-01-21 20:32:29"
	},
	{
			"S.No": "109",
			"Voltage": "6.37",
			"Current": "0.77",
			"Power": "4.90",
			"Energy": "-0.02",
			"Timestamp": "2022-01-21 20:32:42"
	},
	{
			"S.No": "110",
			"Voltage": "6.87",
			"Current": "-1.54",
			"Power": "-10.59",
			"Energy": "-0.05",
			"Timestamp": "2022-01-21 20:33:27"
	},
	{
			"S.No": "111",
			"Voltage": "7.13",
			"Current": "-1.33",
			"Power": "-9.48",
			"Energy": "-0.08",
			"Timestamp": "2022-01-21 20:35:42"
	},
	{
			"S.No": "112",
			"Voltage": "7.35",
			"Current": "-1.47",
			"Power": "-10.80",
			"Energy": "-0.11",
			"Timestamp": "2022-01-21 20:35:52"
	},
	{
			"S.No": "113",
			"Voltage": "7.04",
			"Current": "-1.47",
			"Power": "-10.36",
			"Energy": "-0.14",
			"Timestamp": "2022-01-21 20:36:03"
	},
	{
			"S.No": "114",
			"Voltage": "7.25",
			"Current": "-1.54",
			"Power": "-11.16",
			"Energy": "-0.17",
			"Timestamp": "2022-01-21 20:36:16"
	},
	{
			"S.No": "115",
			"Voltage": "7.33",
			"Current": "0.56",
			"Power": "4.11",
			"Energy": "-0.15",
			"Timestamp": "2022-01-21 20:36:29"
	},
	{
			"S.No": "116",
			"Voltage": "7.23",
			"Current": "-1.19",
			"Power": "-8.61",
			"Energy": "-0.18",
			"Timestamp": "2022-01-21 20:36:40"
	},
	{
			"S.No": "117",
			"Voltage": "7.25",
			"Current": "-1.40",
			"Power": "-10.15",
			"Energy": "-0.21",
			"Timestamp": "2022-01-21 20:36:53"
	},
	{
			"S.No": "118",
			"Voltage": "7.19",
			"Current": "-1.33",
			"Power": "-9.57",
			"Energy": "-0.23",
			"Timestamp": "2022-01-21 20:37:13"
	},
	{
			"S.No": "119",
			"Voltage": "7.30",
			"Current": "1.12",
			"Power": "8.17",
			"Energy": "-0.21",
			"Timestamp": "2022-01-21 20:37:38"
	},
	{
			"S.No": "120",
			"Voltage": "7.79",
			"Current": "-0.28",
			"Power": "-2.18",
			"Energy": "-0.22",
			"Timestamp": "2022-01-21 20:37:49"
	},
	{
			"S.No": "121",
			"Voltage": "8.01",
			"Current": "1.19",
			"Power": "9.53",
			"Energy": "-0.19",
			"Timestamp": "2022-01-21 20:39:35"
	},
	{
			"S.No": "122",
			"Voltage": "7.82",
			"Current": "-0.91",
			"Power": "-7.12",
			"Energy": "-0.21",
			"Timestamp": "2022-01-21 20:39:55"
	},
	{
			"S.No": "123",
			"Voltage": "8.26",
			"Current": "1.05",
			"Power": "8.68",
			"Energy": "-0.19",
			"Timestamp": "2022-01-21 20:40:06"
	},
	{
			"S.No": "124",
			"Voltage": "12.35",
			"Current": "8.26",
			"Power": "102.02",
			"Energy": "0.28",
			"Timestamp": "2022-01-21 22:08:09"
	},
	{
			"S.No": "125",
			"Voltage": "11.67",
			"Current": "8.26",
			"Power": "96.44",
			"Energy": "0.55",
			"Timestamp": "2022-01-21 22:08:18"
	},
	{
			"S.No": "126",
			"Voltage": "8.22",
			"Current": "1.61",
			"Power": "13.25",
			"Energy": "0.59",
			"Timestamp": "2022-01-21 22:08:33"
	},
	{
			"S.No": "127",
			"Voltage": "11.15",
			"Current": "3.01",
			"Power": "33.57",
			"Energy": "0.68",
			"Timestamp": "2022-01-21 22:08:46"
	},
	{
			"S.No": "128",
			"Voltage": "10.22",
			"Current": "3.01",
			"Power": "30.77",
			"Energy": "0.77",
			"Timestamp": "2022-01-21 22:09:00"
	},
	{
			"S.No": "129",
			"Voltage": "10.69",
			"Current": "7.56",
			"Power": "80.85",
			"Energy": "0.99",
			"Timestamp": "2022-01-21 22:09:11"
	},
	{
			"S.No": "130",
			"Voltage": "10.88",
			"Current": "8.33",
			"Power": "90.64",
			"Energy": "1.24",
			"Timestamp": "2022-01-21 22:09:21"
	},
	{
			"S.No": "131",
			"Voltage": "11.21",
			"Current": "3.01",
			"Power": "33.77",
			"Energy": "1.34",
			"Timestamp": "2022-01-21 22:09:32"
	},
	{
			"S.No": "132",
			"Voltage": "11.57",
			"Current": "4.20",
			"Power": "48.61",
			"Energy": "1.47",
			"Timestamp": "2022-01-21 22:09:42"
	},
	{
			"S.No": "133",
			"Voltage": "10.83",
			"Current": "2.94",
			"Power": "31.84",
			"Energy": "1.56",
			"Timestamp": "2022-01-21 22:09:55"
	},
	{
			"S.No": "134",
			"Voltage": "10.67",
			"Current": "3.99",
			"Power": "42.61",
			"Energy": "0.12",
			"Timestamp": "2022-01-21 22:11:10"
	},
	{
			"S.No": "135",
			"Voltage": "10.96",
			"Current": "2.80",
			"Power": "30.70",
			"Energy": "0.20",
			"Timestamp": "2022-01-21 22:11:20"
	},
	{
			"S.No": "136",
			"Voltage": "9.71",
			"Current": "0.70",
			"Power": "6.80",
			"Energy": "-0.26",
			"Timestamp": "2022-01-21 22:27:05"
	},
	{
			"S.No": "137",
			"Voltage": "10.54",
			"Current": "0.91",
			"Power": "9.59",
			"Energy": "-0.23",
			"Timestamp": "2022-01-21 22:27:12"
	},
	{
			"S.No": "138",
			"Voltage": "10.59",
			"Current": "1.47",
			"Power": "15.57",
			"Energy": "-0.19",
			"Timestamp": "2022-01-21 22:27:23"
	},
	{
			"S.No": "139",
			"Voltage": "0.76",
			"Current": "0.00",
			"Power": "0.00",
			"Energy": "-0.19",
			"Timestamp": "2022-01-21 22:43:53"
	},
	{
			"S.No": "140",
			"Voltage": "0.66",
			"Current": "0.28",
			"Power": "0.18",
			"Energy": "-0.19",
			"Timestamp": "2022-01-21 22:44:03"
	},
	{
			"S.No": "141",
			"Voltage": "0.73",
			"Current": "0.07",
			"Power": "0.05",
			"Energy": "-0.19",
			"Timestamp": "2022-01-21 22:44:16"
	},
	{
			"S.No": "142",
			"Voltage": "0.71",
			"Current": "0.35",
			"Power": "0.25",
			"Energy": "-0.19",
			"Timestamp": "2022-01-21 22:44:27"
	},
	{
			"S.No": "143",
			"Voltage": "2.60",
			"Current": "2.10",
			"Power": "5.46",
			"Energy": "-0.17",
			"Timestamp": "2022-01-21 22:45:27"
	},
	{
			"S.No": "144",
			"Voltage": "2.62",
			"Current": "3.29",
			"Power": "8.62",
			"Energy": "-0.15",
			"Timestamp": "2022-01-21 22:45:38"
	},
	{
			"S.No": "145",
			"Voltage": "2.65",
			"Current": "2.17",
			"Power": "5.76",
			"Energy": "-0.13",
			"Timestamp": "2022-01-21 22:45:48"
	},
	{
			"S.No": "146",
			"Voltage": "2.45",
			"Current": "3.64",
			"Power": "8.92",
			"Energy": "-0.11",
			"Timestamp": "2022-01-21 22:45:59"
	},
	{
			"S.No": "147",
			"Voltage": "2.43",
			"Current": "3.50",
			"Power": "8.52",
			"Energy": "-0.09",
			"Timestamp": "2022-01-21 22:46:09"
	},
	{
			"S.No": "148",
			"Voltage": "2.50",
			"Current": "2.52",
			"Power": "6.30",
			"Energy": "-0.07",
			"Timestamp": "2022-01-21 22:46:22"
	},
	{
			"S.No": "149",
			"Voltage": "2.43",
			"Current": "3.29",
			"Power": "8.00",
			"Energy": "-0.05",
			"Timestamp": "2022-01-21 22:46:33"
	},
	{
			"S.No": "150",
			"Voltage": "2.50",
			"Current": "2.94",
			"Power": "7.35",
			"Energy": "-0.03",
			"Timestamp": "2022-01-21 22:46:43"
	},
	{
			"S.No": "151",
			"Voltage": "2.58",
			"Current": "2.10",
			"Power": "5.43",
			"Energy": "-0.01",
			"Timestamp": "2022-01-21 22:46:54"
	},
	{
			"S.No": "152",
			"Voltage": "6.18",
			"Current": "4.76",
			"Power": "29.44",
			"Energy": "0.07",
			"Timestamp": "2022-01-21 22:47:31"
	},
	{
			"S.No": "153",
			"Voltage": "6.89",
			"Current": "4.83",
			"Power": "33.30",
			"Energy": "0.16",
			"Timestamp": "2022-01-21 22:47:42"
	},
	{
			"S.No": "154",
			"Voltage": "6.65",
			"Current": "5.32",
			"Power": "35.41",
			"Energy": "0.26",
			"Timestamp": "2022-01-21 22:47:52"
	},
	{
			"S.No": "155",
			"Voltage": "6.72",
			"Current": "4.90",
			"Power": "32.95",
			"Energy": "0.35",
			"Timestamp": "2022-01-21 22:48:03"
	},
	{
			"S.No": "156",
			"Voltage": "6.62",
			"Current": "7.91",
			"Power": "52.39",
			"Energy": "0.50",
			"Timestamp": "2022-01-21 22:48:13"
	},
	{
			"S.No": "157",
			"Voltage": "6.65",
			"Current": "4.83",
			"Power": "32.15",
			"Energy": "0.59",
			"Timestamp": "2022-01-21 22:48:26"
	},
	{
			"S.No": "158",
			"Voltage": "6.62",
			"Current": "4.90",
			"Power": "32.45",
			"Energy": "0.68",
			"Timestamp": "2022-01-21 22:48:37"
	},
	{
			"S.No": "159",
			"Voltage": "6.87",
			"Current": "8.33",
			"Power": "57.28",
			"Energy": "0.84",
			"Timestamp": "2022-01-21 22:48:47"
	},
	{
			"S.No": "160",
			"Voltage": "6.84",
			"Current": "6.30",
			"Power": "43.11",
			"Energy": "0.96",
			"Timestamp": "2022-01-21 22:48:57"
	},
	{
			"S.No": "161",
			"Voltage": "6.98",
			"Current": "5.67",
			"Power": "39.57",
			"Energy": "1.07",
			"Timestamp": "2022-01-21 22:49:08"
	},
	{
			"S.No": "162",
			"Voltage": "6.67",
			"Current": "5.18",
			"Power": "34.57",
			"Energy": "1.16",
			"Timestamp": "2022-01-21 22:49:21"
	},
	{
			"S.No": "163",
			"Voltage": "7.33",
			"Current": "7.98",
			"Power": "58.52",
			"Energy": "1.32",
			"Timestamp": "2022-01-21 22:49:45"
	},
	{
			"S.No": "164",
			"Voltage": "7.31",
			"Current": "6.23",
			"Power": "45.58",
			"Energy": "1.45",
			"Timestamp": "2022-01-21 22:49:55"
	},
	{
			"S.No": "165",
			"Voltage": "7.28",
			"Current": "8.68",
			"Power": "63.21",
			"Energy": "1.62",
			"Timestamp": "2022-01-21 22:50:06"
	},
	{
			"S.No": "166",
			"Voltage": "8.06",
			"Current": "7.63",
			"Power": "61.49",
			"Energy": "1.80",
			"Timestamp": "2022-01-21 22:50:16"
	},
	{
			"S.No": "167",
			"Voltage": "7.79",
			"Current": "7.91",
			"Power": "61.61",
			"Energy": "1.97",
			"Timestamp": "2022-01-21 22:50:27"
	},
	{
			"S.No": "168",
			"Voltage": "7.63",
			"Current": "6.44",
			"Power": "49.18",
			"Energy": "2.10",
			"Timestamp": "2022-01-21 22:50:37"
	},
	{
			"S.No": "169",
			"Voltage": "7.97",
			"Current": "7.70",
			"Power": "61.41",
			"Energy": "2.27",
			"Timestamp": "2022-01-21 22:50:48"
	},
	{
			"S.No": "170",
			"Voltage": "7.43",
			"Current": "7.42",
			"Power": "55.16",
			"Energy": "2.43",
			"Timestamp": "2022-01-21 22:50:58"
	},
	{
			"S.No": "171",
			"Voltage": "7.55",
			"Current": "6.79",
			"Power": "51.28",
			"Energy": "2.57",
			"Timestamp": "2022-01-21 22:51:08"
	},
	{
			"S.No": "172",
			"Voltage": "6.96",
			"Current": "7.91",
			"Power": "55.06",
			"Energy": "2.72",
			"Timestamp": "2022-01-21 22:51:19"
	},
	{
			"S.No": "173",
			"Voltage": "7.38",
			"Current": "6.37",
			"Power": "47.03",
			"Energy": "2.85",
			"Timestamp": "2022-01-21 22:51:29"
	},
	{
			"S.No": "174",
			"Voltage": "8.04",
			"Current": "9.87",
			"Power": "79.38",
			"Energy": "3.07",
			"Timestamp": "2022-01-21 22:51:40"
	},
	{
			"S.No": "175",
			"Voltage": "4.12",
			"Current": "4.20",
			"Power": "17.31",
			"Energy": "3.12",
			"Timestamp": "2022-01-21 22:51:50"
	},
	{
			"S.No": "176",
			"Voltage": "4.12",
			"Current": "5.46",
			"Power": "22.51",
			"Energy": "3.18",
			"Timestamp": "2022-01-21 22:52:01"
	},
	{
			"S.No": "177",
			"Voltage": "7.38",
			"Current": "7.00",
			"Power": "51.68",
			"Energy": "3.33",
			"Timestamp": "2022-01-21 22:52:12"
	},
	{
			"S.No": "178",
			"Voltage": "7.25",
			"Current": "5.60",
			"Power": "40.59",
			"Energy": "3.44",
			"Timestamp": "2022-01-21 22:52:24"
	},
	{
			"S.No": "179",
			"Voltage": "7.52",
			"Current": "7.28",
			"Power": "54.74",
			"Energy": "3.59",
			"Timestamp": "2022-01-21 22:52:34"
	},
	{
			"S.No": "180",
			"Voltage": "7.23",
			"Current": "7.21",
			"Power": "52.14",
			"Energy": "3.74",
			"Timestamp": "2022-01-21 22:52:44"
	},
	{
			"S.No": "181",
			"Voltage": "7.68",
			"Current": "6.23",
			"Power": "47.89",
			"Energy": "3.87",
			"Timestamp": "2022-01-21 22:52:58"
	},
	{
			"S.No": "182",
			"Voltage": "7.23",
			"Current": "9.10",
			"Power": "65.81",
			"Energy": "4.05",
			"Timestamp": "2022-01-21 22:53:09"
	},
	{
			"S.No": "183",
			"Voltage": "5.76",
			"Current": "6.23",
			"Power": "35.89",
			"Energy": "4.15",
			"Timestamp": "2022-01-21 22:53:54"
	},
	{
			"S.No": "184",
			"Voltage": "5.98",
			"Current": "6.44",
			"Power": "38.52",
			"Energy": "4.26",
			"Timestamp": "2022-01-21 22:54:16"
	},
	{
			"S.No": "185",
			"Voltage": "6.57",
			"Current": "7.28",
			"Power": "47.85",
			"Energy": "4.39",
			"Timestamp": "2022-01-21 22:54:38"
	},
	{
			"S.No": "186",
			"Voltage": "6.70",
			"Current": "7.21",
			"Power": "48.36",
			"Energy": "4.52",
			"Timestamp": "2022-01-21 22:55:02"
	}
]

export default mock
