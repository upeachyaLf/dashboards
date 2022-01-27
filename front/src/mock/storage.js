const mock = [
	{
			"SoC": "50.00",
			"Energy_Flow": "1.55",
			"Timestamp": "2022-01-26 12:46:57"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.41",
			"Timestamp": "2022-01-26 11:15:43"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.40",
			"Timestamp": "2022-01-26 11:15:19"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.35",
			"Timestamp": "2022-01-26 11:14:56"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.35",
			"Timestamp": "2022-01-26 11:14:29"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.36",
			"Timestamp": "2022-01-26 11:11:41"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.37",
			"Timestamp": "2022-01-26 11:11:02"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.39",
			"Timestamp": "2022-01-26 11:07:31"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.40",
			"Timestamp": "2022-01-26 11:06:29"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.40",
			"Timestamp": "2022-01-26 11:06:06"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.41",
			"Timestamp": "2022-01-26 11:05:46"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.41",
			"Timestamp": "2022-01-26 11:05:25"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.41",
			"Timestamp": "2022-01-26 11:05:02"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.42",
			"Timestamp": "2022-01-26 11:04:42"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.42",
			"Timestamp": "2022-01-26 11:04:21"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.43",
			"Timestamp": "2022-01-26 11:04:00"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.44",
			"Timestamp": "2022-01-26 11:03:40"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.45",
			"Timestamp": "2022-01-26 11:03:20"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.46",
			"Timestamp": "2022-01-26 11:02:56"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.83",
			"Timestamp": "2022-01-26 09:41:23"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.83",
			"Timestamp": "2022-01-26 09:41:01"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.84",
			"Timestamp": "2022-01-26 09:40:40"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.84",
			"Timestamp": "2022-01-26 09:39:44"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.84",
			"Timestamp": "2022-01-26 09:39:22"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.86",
			"Timestamp": "2022-01-26 09:38:59"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.88",
			"Timestamp": "2022-01-26 09:38:38"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.89",
			"Timestamp": "2022-01-26 09:38:17"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.90",
			"Timestamp": "2022-01-26 09:37:17"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.91",
			"Timestamp": "2022-01-26 09:36:54"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.92",
			"Timestamp": "2022-01-25 15:45:31"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.93",
			"Timestamp": "2022-01-25 15:45:09"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.93",
			"Timestamp": "2022-01-25 15:44:27"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.95",
			"Timestamp": "2022-01-25 15:43:25"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "1.97",
			"Timestamp": "2022-01-25 15:43:03"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "2.00",
			"Timestamp": "2022-01-25 15:42:40"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "2.08",
			"Timestamp": "2022-01-25 15:41:51"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "2.54",
			"Timestamp": "2022-01-25 15:18:44"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "2.61",
			"Timestamp": "2022-01-25 15:02:45"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "2.62",
			"Timestamp": "2022-01-25 15:02:25"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "2.63",
			"Timestamp": "2022-01-25 15:01:36"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.45",
			"Timestamp": "2022-01-25 15:01:12"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.44",
			"Timestamp": "2022-01-25 15:00:48"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.43",
			"Timestamp": "2022-01-25 15:00:24"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.50",
			"Timestamp": "2022-01-25 15:00:02"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.65",
			"Timestamp": "2022-01-25 14:59:40"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.89",
			"Timestamp": "2022-01-25 14:18:03"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.92",
			"Timestamp": "2022-01-25 14:17:39"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.94",
			"Timestamp": "2022-01-25 14:17:14"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "3.97",
			"Timestamp": "2022-01-25 14:16:50"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.02",
			"Timestamp": "2022-01-25 14:16:24"
	},
	{
			"SoC": "17.11",
			"Energy_Flow": "4.08",
			"Timestamp": "2022-01-25 14:15:30"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.33",
			"Timestamp": "2022-01-25 14:02:41"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.34",
			"Timestamp": "2022-01-25 14:02:19"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.34",
			"Timestamp": "2022-01-25 13:58:38"
	},
	{
			"SoC": "100.00",
			"Energy_Flow": "4.34",
			"Timestamp": "2022-01-25 13:55:45"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.43",
			"Timestamp": "2022-01-25 13:34:36"
	},
	{
			"SoC": "100.00",
			"Energy_Flow": "4.44",
			"Timestamp": "2022-01-25 13:32:44"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.49",
			"Timestamp": "2022-01-25 13:03:55"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.49",
			"Timestamp": "2022-01-25 13:00:56"
	},
	{
			"SoC": "0.00",
			"Energy_Flow": "4.52",
			"Timestamp": "2022-01-25 12:01:11"
	}
]

export default mock;
