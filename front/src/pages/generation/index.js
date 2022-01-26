import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

import Table from '../../components/table';
import tableResolver from '../../resolvers/table';
import powerChartResolver from '../../resolvers/power_chart';
import BACKEND_URL from '../../constants/backend_url';

export default function Generation() {
  const default_table = {
    header: [{ text: "S No." }, { text: "Voltage" }, { text: "Current" }, { text: "Power" }, { text: "Energy" }, { text: "Date/Time" }],
    body: []
  }

  const [table_data, setTableData] = useState(default_table);
  const [power_chart_data, setPowerChartData] = useState([]);
  const [latest_data, setLatestData] = useState({});
  const [state, setToggleState] = useState(0);
  const [show_toast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `${BACKEND_URL}?api_key=0123456789gad&table_name=u1_generation`;
    fetch(url).then((response) => response.json())
      .then((json) => {
        const data = {
          header: [{ text: "S No." }, { text: "Voltage" }, { text: "Current" }, { text: "Power" }, { text: "Energy" }, { text: "Date/Time" }],
          body: tableResolver(json)
        }
        setTableData(data)
        setPowerChartData(powerChartResolver(json))
        setLatestData(json[0])
      }).catch(error => {
        console.log("ERROR==>", error);
      })
  }, [])

  const handleButtonClick = (state) => {
    setLoading(true);
    const url = `${BACKEND_URL}?api_key=0123456789us&unit=u1_generation&state=${state}`;
    fetch(url)
      .then((json) => {
        console.log("here",json);
        setToggleState(state);
        setShowToast(true);
        setLoading(false)
      }).catch(error => {
        setLoading(false);
        console.log("ERROR==>", error);
      })
  }

  return (
    <>
      <h3 style={{ marginBottom: "24px" }}>GENERATION</h3>

      <div className="d-flex p-relative">
        <Button disabled={loading} onClick={() => handleButtonClick(1)} style={{ marginRight: "15px" }} variant="success">Turn On</Button>
        <Button disabled={loading} variant="danger" onClick={() => handleButtonClick(0)}>Turn Off</Button>
        <Toast
          delay={5000}
          autohide
          show={show_toast}
          onClose={() => { setShowToast(false) }}
          style={{ position: "absolute", left: "505px", top: "38px" }}
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body> Sucessfully turned {state ? "On" : "Off"}</Toast.Body>
        </Toast>
      </div>

      <Row style={{ marginBottom: "36px", marginTop: "36px" }}>
        <Col xs={12} md={4}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }} className="card-with-shadow">
            <h6>Voltage</h6>
            <h4>{latest_data?.Voltage} V</h4>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }} className="card-with-shadow">
            <h6>Current</h6>
            <h4>{latest_data?.Current} A</h4>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }} className="card-with-shadow">
            <h6>Energy</h6>
            <h4>{latest_data?.Energy} W</h4>
          </div>
        </Col>
      </Row>


      <div className="card-with-shadow" style={{ width: "100%" }}>
        <h6 style={{ padding: "20px 33px 0px" }}>Power vs Time</h6>
        <hr />
        <div style={{ padding: "16px", width: "100%" }}>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart
              data={power_chart_data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="power" label="Power" stroke="#8884d8" activeDot={{ r: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card-with-shadow" style={{ width: "100%", marginTop: "36px", padding: "16px 10px" }}>
        <Table table_data={table_data} />
      </div>
    </>
  )
}
