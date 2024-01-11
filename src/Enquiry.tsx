// import React, { ChangeEvent, FocusEvent, useState } from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { canHaveModifiers } from "typescript";
import EnquiryForm from "./EnquiryForm";

function Enquiry() {
  const [choice, setChoice] = useState<
    | "claims"
    | "entitlement"
    | "comsumption"
    | "member"
    | "exclusion"
    | "provider"
    | "remarks"
  >("claims");
  const seleceChoiced = (
    choiced:
      | "claims"
      | "entitlement"
      | "comsumption"
      | "member"
      | "exclusion"
      | "provider"
      | "remarks"
  ) => {
    setChoice(choiced);
  };

  return (
    <div>
      <EnquiryForm/>
      <div className="container-fluid">
        <div className="card mb-5 mt-5">
          <div className="card-header">Enquiry Member</div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="">No Card</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="">Payor Member ID</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="">Payor</label>
                  <select name="" id="" className="form-select">
                    <option value="">--Select Payor--</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="">Member Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="">NIK</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor="">Policy No</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        <div className="card  mb-5 mt-5">
          <div className="card-header">
            <h3 className="card-title fs-4 text-start">
              <span className="card-label">List Members</span>
            </h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                <thead>
                  <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                    <th>#</th>
                    <th>P/D</th>
                    <th>Stat</th>
                    <th>Member Name</th>
                    <th>Card No</th>
                    <th>Payor</th>
                    <th>Corporate</th>
                    <th>Policy No</th>
                    <th>Membership</th>
                    <th>Member Since</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Cencelation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-hover-dark text-hover-primary">
                    <td>1</td>
                    <td>P</td>
                    <td>N</td>
                    <td>Ucok Isalubis</td>
                    <td>8000991200024100</td>
                    <td>PIII</td>
                    <td>ISPC</td>
                    <td>83941094801983948</td>
                    <td>91239198da_110</td>
                    <td>JAN-01-2005</td>
                    <td>JAN-01-2004</td>
                    <td>M</td>
                    <td>31-Mar-2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* PAGE SETELAH CLICK MEMBER NAME */}
        <div className="card mb-5">
          <div className="card-header">Member Details | (Nama Member)</div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                  <div className="bg-warning">MEMBER AND BENEFIT INFO.</div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <tr>
                      <td className="fw-bold">Membership</td>
                      <td>101010</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Policy No</td>
                      <td>ADMED99</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Card No</td>
                      <td>8000928349283</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">DOB</td>
                      <td>JUL-15-2005</td>
                    </tr>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <tr>
                      <td className="fw-bold">Status</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Relation</td>
                      <td>Principle</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Gender</td>
                      <td>Man</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Member Since</td>
                      <td>FEB-01-2023</td>
                    </tr>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="bg-warning">PLAN AND COVERAGE INFO. </div>
                <tr>
                  <td className="fw-bold">Payor</td>
                  <td>PIII</td>
                </tr>
                <tr>
                  <td className="fw-bold">Corporate</td>
                  <td>ISPC</td>
                </tr>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="bg-warning">PLAN AND COVERAGE INFO. </div>
                    <tr>
                      <td className="fw-bold">Plan</td>
                      <td>
                        <select name="" id="" className="form-select">
                          <option value="">Tes</option>
                          <option value="">Tes</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Effective Room</td>
                      <td>
                        JAN-01-2022 <span className="fw-bold">to</span>{" "}
                        DEC-31-2024
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Plan Type</td>
                      <td>MAX DOLLAR AMOUNT</td>
                    </tr>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <tr>
                      <td className="fw-bold">Currency</td>
                      <td>IDR</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Coverage</td>
                      <td>Rawat Jalan</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Current Limit</td>
                      <td>999.999.999</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Policy Status</td>
                      <td>IN-FORCE</td>
                    </tr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <input
            type="radio"
            name=""
            id=""
            onChange={() => {
              seleceChoiced("claims");
            }}
            checked={choice === "claims"}
          />
          Claims
        </div>
        <div className="">
          <input
            type="radio"
            name=""
            id=""
            onChange={() => {
              seleceChoiced("entitlement");
            }}
            checked={choice === "entitlement"}
          />
          Entitlement
        </div>
        <div className="">
          <input
            type="radio"
            name=""
            id=""
            onChange={() => {
              seleceChoiced("comsumption");
            }}
            checked={choice === "comsumption"}
          />
          Comsumption
        </div>
        <div className="">
          <input
            type="radio"
            name=""
            id=""
            onChange={() => {
              seleceChoiced("member");
            }}
            checked={choice === "member"}
          />
          Member
        </div>
        <div className="">
          <input
            type="radio"
            name=""
            id=""
            onChange={() => {
              seleceChoiced("exclusion");
            }}
            checked={choice === "exclusion"}
          />
          Exclusion
        </div>
        <div className="">
          <input
            type="radio"
            name=""
            id=""
            onChange={() => {
              seleceChoiced("provider");
            }}
            checked={choice === "provider"}
          />
          Provider
        </div>
        <div className="">
          <input
            type="radio"
            name=""
            id=""
            onChange={() => {
              seleceChoiced("remarks");
            }}
            checked={choice === "remarks"}
          />
          Remarks
        </div>

        {choice === "claims" ? (
          <>
            <h5>Claims</h5>
            <div className="card mb-5">
              <div className="card-header">Claims Current</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>#</th>
                        <th>Claims ID</th>
                        <th>ADM/DISC</th>
                        <th>Type</th>
                        <th>Provider Name</th>
                        <th>Status</th>
                        <th>?</th>
                        <th>Date</th>
                        <th>HospInvNo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>
                          disini button untuk detail mengarah ke claims info
                        </td>
                        <td>12345678</td>
                        <td>
                          <tr>
                            <td>Admission Date :</td>
                            <td>DEC-07-2023</td>
                          </tr>
                          <tr>
                            <td>Discharge Date:</td>
                            <td>DEC-07-2023</td>
                          </tr>
                        </td>
                        <td>
                          V / W (salah satu)
                          (V:void,W:web(Eligibility/Discharge))
                        </td>
                        <td>ADMEDIKA MEDICAL CENTRE (IDR) - 0383</td>
                        <td>
                          <tr>
                            <span className="badge bg-success">Discharge</span>
                          </tr>
                          <tr>
                            <span className="badge bg-primary">
                              Rawat Jalan
                            </span>
                          </tr>
                          <tr>
                            <span className="badge bg-warning">A00.1</span>
                          </tr>
                        </td>
                        <td>
                          <tr>
                            <td>Incurred</td>
                            <td>400.000</td>
                          </tr>
                          <tr>
                            <td>Approved</td>
                            <td>350.000</td>
                          </tr>
                          <tr>
                            <td>NotApproved</td>
                            <td>50.0000</td>
                          </tr>
                        </td>
                        <td>
                          <tr>
                            <td>Modified By :</td>
                            <td>Ucok</td>
                          </tr>
                          <tr>
                            <td>Modified Date :</td>
                            <td>DEC-07-2023</td>
                          </tr>
                          <tr>
                            <td>Receive Date :</td>
                            <td>DEC-07-2023</td>
                          </tr>
                          <tr>
                            <td>Invoice Date</td>
                            <td>DEC-07-2023</td>
                          </tr>
                        </td>
                        <td>INV/2023/TES</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {choice === "entitlement" ? (
          <>
            <div className="card mb-5">
              <div className="card-header">PLAN</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>#</th>
                        <th>Plan Code</th>
                        <th>Client Plan</th>
                        <th>Frequency</th>
                        <th>Limit Type</th>
                        <th>Current Limit</th>
                        <th>Annual Limit</th>
                        <th>Family Max Value</th>
                        <th>Divert Coverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>1</td>
                        <td>ADMEDKA1_BK01 </td>
                        <td>ADMEDKA1_BK01 </td>
                        <td>YEARLY</td>
                        <td>MAX DOLLAR AMOUNT</td>
                        <td>998,999,989</td>
                        <td>999,999,999</td>
                        <td></td>
                        <td>03,</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-header">
                COVERAGE ENTILEMENT <br />
                Preferred Transaction : Online and Offline
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>#</th>
                        <th>Coverage Code</th>
                        <th>Client Coverage</th>
                        <th>Frequency</th>
                        <th>Limit Type</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>1</td>
                        <td>Persalinan/BK</td>
                        <td></td>
                        <td>PER CLAIMS/OCCURANC</td>
                        <td>MAXIMUM VISIT</td>
                        <td>999,999,999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-header">BENEFIT ENTITLEMENT</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>#</th>
                        <th>Benefits</th>
                        <th>Client</th>
                        <th>Frequency</th>
                        <th>Limit Type</th>
                        <th>Value</th>
                        <th>Available</th>
                        <th>[Online]Prompt</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td></td>
                        <td>Konsultasi Dokter</td>
                        <td>1</td>
                        <td>PER Hari</td>
                        <td>MAXIMUM VISIT</td>
                        <td>999,999,999</td>
                        <td>999,999,999</td>
                        <td>?</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {choice === "comsumption" ? (
          <>
            <div className="card mb-5">
              <div className="card-header">PLAN</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>PLAN</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Ytd Comsumption</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>COVERAGE MATERNITY ADMEDKA1_BK01</td>
                        <td>JAN-01-2022 </td>
                        <td>DEC-31-2024 </td>
                        <td>1,750,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-header">COVERAGE CONSUMPTION</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>Coverage</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Ytd Comsumption</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>MAT | PERSALINAN</td>
                        <td>JAN-01-2022 </td>
                        <td>DEC-31-2024 </td>
                        <td>1,750,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-header">BENEFIT CONSUMPTION </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>Benefit</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Ytd Comsumption</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>87 | PRE DAN POST NATAL </td>
                        <td>JAN-01-2022 </td>
                        <td>DEC-31-2024 </td>
                        <td>1,750,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-header">FAMILY LIMIT CONSUMPTION</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>Relationship </th>
                        <th>Patient Name</th>
                        <th>Card No</th>
                        <th>Plan Code</th>
                        <th>Total Consumption</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>Principle</td>
                        <td>ADMEDIKA TEST CARDS 2012 </td>
                        <td>8000991200024100 </td>
                        <td>ADMEDKA1_BK01 </td>
                        <td>1,750,000</td>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <i>Total:</i>
                        </td>
                        <td className="bg-primary text-white">1,750,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {choice === "member" ? (
          <>
            <div className="card mb-5">
              <div className="card-header">FAMILY TREE</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>P/D</th>
                        <th>Relationship</th>
                        <th>Card No</th>
                        <th>Name</th>
                        <th>Policy No</th>
                        <th>PayorID</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Member Since</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>P</td>
                        <td>Principle</td>
                        <td>8000991200024100 </td>
                        <td>ADMEDIKA TEST CARDS 2012 </td>
                        <td>10293103</td>
                        <td>10101010 </td>
                        <td>F</td>
                        <td>JUL-15-1981 </td>
                        <td>FEB-01-2012 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {choice === "exclusion" ? (
          <>
            <div className="card mb-5">
              <div className="card-header">Diagnosis Exclusion</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>#</th>
                        <th>ICD Code</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>1</td>
                        <td>B34.2 </td>
                        <td>
                          Coronavirus infection, unspecified site (Confirmed,
                          COVID-19)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {choice === "provider" ? (
          <>
            <div className="card mb-5">
              <div className="card-header">Provider</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                    <thead>
                      <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                        <th>#</th>
                        <th>Code</th>
                        <th>Provider</th>
                        <th>Status</th>
                        <th>Allowed</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Tel. No</th>
                        <th>Fax. No</th>
                        <th>Remarks</th>
                        <th>Exclude</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-hover-dark text-hover-primary">
                        <td>1</td>
                        <td>1138</td>
                        <td>RSU. KASIH IBU KEDONGANAN </td>
                        <td>ACTIVE</td>
                        <td>ALL ACTIVE </td>
                        <td>JL. ULUWATU NO.69A, KEDONGANAN </td>
                        <td>BADUNG</td>
                        <td>BALI </td>
                        <td>0361-912293| </td>
                        <td>0361-293481 </td>
                        <td>
                          RSU. KASIH IBU GROUP * Ruang Pinta ext.200. Ruang Rama
                          ext.300. Ruang laksamana Ext.400 * Kasir RI sd, jam
                          19.00 senin -sabtu, diluar waktu tsb ke Kasir RJ *
                          Email : alarmcenter.kdg@kasihibuhospital.com
                          MARKETING: PUTU SURPIANI 0821-4746-7397 UGD: dr.
                          MARDIKA 0811-399-392 (mardika.candra@kih.co.id) ADM
                          RJ/RI: KOMANG SUANDEWI 0819-9988-0055
                          (adminranap.kdg@kih.co.id) FINANCE: NYOMAN MUDIANI
                          0819-3612-1977 (piutang.kdg@kih.co.id) FARMASI: SIMON
                          ANDI WIBOWO 0877-3051-9605 (andi.wobowo@kih.co.id) MR:
                          PUTU AYU KARTIKA YANTI 0812-3833-6024
                          (rekammedis.kdg@gmail.com) ADM RJ/RI : SUANDEWI
                          0819-9988-0055 EMAIL: adminranap.kdg@kih.co.id FINANCE
                          : IDA AYU RATIH 0822-4713-9427 EMAIL:
                          piutang.kdg@kih.co.id MEDREC : SELVIA KURNIATI
                          0853-3753-4210 EMAIL: rekammedis.kdg@gmail.com JAM
                          OPERASIONAL ADM RJ SENIN-JUMAT 08.00-17.00 MINGGU
                          (LIBUR) ADM RI SENIN-JUMAT 08.00-17.00 MINGGU (LIBUR){" "}
                        </td>
                        <td>
                          <tr>
                            <td>By :</td>
                            <td>RXRULL </td>
                          </tr>
                          <tr>
                            <td>Date :</td>
                            <td>DEC-06-2014 11:13:29 AM</td>
                          </tr>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Enquiry;
