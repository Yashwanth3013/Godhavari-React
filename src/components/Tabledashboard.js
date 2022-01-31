import React from "react";
import "devextreme/dist/css/dx.light.css";
import { Chart, Series } from "devextreme-react/chart";
import PieChart, {
  Legend,
  Tooltip,
  Format,
  Label,
  Connector,
  Export,
} from "devextreme-react/pie-chart";

import { dataSource } from "./data.js";
import { populationByRegions } from "./piedata.js";

const Tablesdashboard = () => {
  return (
    <div>
      <div
        class="card-header m-5"
        style={{
          backgroundColor: "gray",
          borderRadius: "5px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <p
            className="font-weight-bold"
            style={{
              fontSize: "18px",
              color: "white",
              fontFamily: "sans-serif",
              top: "515px",
              left: "77px",
              width: "102px",
              height: "27px",
            }}
          >
            Dashboard
          </p>
          <div className="d-flex gap-5 align-items-center">
            <div className="gap-5">
              <span
                className="font-weight-bold mr-5  "
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "sans-serif",
                  top: "519px",
                  left: "1114px",
                  width: "40px",
                  height: "19px",
                }}
              >
                FROM
              </span>
              <input
                class="form-control text-center"
                id="date-input"
                formControlName="FromDate"
                type="date"
                name="date-input"
                style={{
                  backgroundColor: "white",
                  border: "transparent",
                  top: "506px",
                  left: "1184px",
                  width: "300px",
                  height: "44px",
                }}
              />
            </div>
            <div className="">
              <span
                className="font-weight-bold mr-5"
                style={{
                  fontSize: "16px",
                  color: "white",
                  fontFamily: "sans-serif",
                  top: "519px",
                  left: "1514px",
                  width: "18px",
                  height: "19px",
                }}
              >
                To
              </span>
              <input
                class="form-control text-center"
                id="date-input"
                formControlName="FromDate"
                type="date"
                name="date-input"
                style={{
                  backgroundColor: "white",
                  border: "transparent",
                  top: "506px",
                  left: "1562px",
                  width: "300px",
                  height: "44px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between m-5">
        <div
          class="card shadow-lg bg-white m-2"
          style={{
            width: "460px",
            height: "413px",
          }}
        >
          <div
            class="card-header"
            style={{
              color: "#4e4e4e",
              fontWeight: "500",
              backgroundColor: "white",
              borderbottom: "none",
            }}
          >
            <span>Documents Registered</span>
            <div style={{ textAlign: "center" }}>
              <h1
                className="mt-3"
                style={{
                  fontSize: "34px",
                  fontWeight: "bold",
                }}
              >
                2,00,000
              </h1>
            </div>
            <div class="card-body">
              <div class="chart-wrapper">
                <Chart
                  id="chart"
                  dataSource={dataSource}
                  style={{ width: "330px", height: "300px", marginLeft: "0px" }}
                >
                  <Series
                    valueField="oranges"
                    argumentField="book"
                    name="doc"
                    type="bar"
                    color="#66C2A5"
                  />
                </Chart>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card shadow-lg bg-white m-2"
          style={{ width: "460px", height: "413px" }}
        >
          <div
            class="card-header"
            style={{
              color: "#4e4e4e",
              fontWeight: "500",
              backgroundColor: "white",
              borderbottom: "none",
            }}
          >
            <span>Marriage Registered</span>
            <br />
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "34px",
                  fontWeight: "bold",
                }}
              >
                1,26,000
              </h1>
            </div>
            <div class="card-body">
              <div class="chart-wrapper">
                <Chart
                  id="chart"
                  dataSource={dataSource}
                  style={{ width: "330px", height: "300px", marginLeft: "0px" }}
                >
                  <Series
                    valueField="oranges"
                    argumentField="book"
                    name="doc"
                    type="bar"
                    color="#5E85C2"
                  />
                </Chart>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column">
          <div
            class="card shadow-lg bg-white rounded m-2"
            style={{
              width: "360px",
              height: "130px",
            }}
          >
            <mat-card>
              <div class="row">
                <div className="ml-5">
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#4E4E4E",
                    }}
                  >
                    Encumbrance Cerificate
                  </span>
                </div>
                <div className="d-flex justify-content-around mt-4">
                  <img
                    src="assets/img/avatars/land-33.png"
                    style={{ width: "59px", height: "59px" }}
                  />
                  <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>4756</h1>
                </div>
              </div>
            </mat-card>
          </div>
          <div>
            <mat-card
              class="card shadow-lg bg-white m-2"
              style={{
                width: "360px",
                height: "130px",
              }}
            >
              <div class="row">
                <div className="ml-5">
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#4E4E4E",
                    }}
                  >
                    Encumbrance Cerificate
                  </span>
                </div>
                <div className="d-flex justify-content-around mt-4">
                  <img
                    src="assets/img/avatars/land-33.png"
                    style={{ width: "59px", height: "59px" }}
                  />
                  <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>4756</h1>
                </div>
              </div>
            </mat-card>
          </div>
          <div>
            <mat-card
              class="card shadow-lg bg-white m-2"
              style={{
                width: "360px",
                height: "130px",
              }}
            >
              <div class="row ">
                <div className="ml-5">
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#4E4E4E",
                    }}
                  >
                    Encumbrance Cerificate
                  </span>
                </div>
                <div className="d-flex justify-content-around mt-4">
                  <img
                    src="assets/img/avatars/land-33.png"
                    style={{ width: "59px", height: "59px" }}
                  />
                  <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>4756</h1>
                </div>
              </div>
            </mat-card>
          </div>
        </div>
        <div
          class="card shadow-lg bg-white m-2"
          style={{ width: "501px", height: "413px" }}
        >
          <div
            class="card-header"
            style={{
              color: "#4e4e4e",
              fontWeight: "500",
              backgroundColor: "white",
              borderbottom: "none",
            }}
          >
            <span>Revenue Generated</span>

            <div style={{ textAlign: "center" }}>
              <h1
                className="mt-2"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                20,000 Cr
              </h1>
            </div>
            <div class="card-body d-flex">
              <div class="chart-wrapper">
                <PieChart
                  id="pie"
                  type="doughnut"
                  palette="Soft Pastel"
                  dataSource={populationByRegions}
                  style={{ width: "350px", height: "300px" }}
                >
                  <Series argumentField="region"></Series>
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablesdashboard;
