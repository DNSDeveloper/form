import React, { ChangeEvent, FocusEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Form() {
  const [kamar, setKamar] = useState(true);
  const checkedKamar = () => {
    setKamar(!kamar);
  };

  const [ugd, setUgd] = useState(true);
  const checkedUgd = () => {
    setUgd(!ugd);
  };

  const [pasien, setPasien] = useState<"roda2" | "roda4" | "lainnya">("roda2");
  const checkedPasien = (option: "roda2" | "roda4" | "lainnya") => {
    setPasien(option);
  };

  const [pengendara, setPengendara] = useState<
    "pengendara" | "penumpang" | "pejalan-kaki"
  >("pengendara");
  const checkedPengendara = (
    pengendara: "pengendara" | "penumpang" | "pejalan-kaki"
  ) => {
    setPengendara(pengendara);
  };

  const [sim, setSim] = useState(true);
  const checkedSim = () => {
    setSim(!sim);
  };

  const [selectSim, setSelectSim] = useState<"A" | "B" | "C" | "D">("A");
  const selecttedSim = (sim: "A" | "B" | "C" | "D") => {
    setSelectSim(sim);
  };

  const [helm, setHelm] = useState(true);
  const checkedHelm = () => {
    setHelm(!helm);
  };

  const [kecelakaan, setKecelakaan] = useState(true);
  const checkedKecelakaan = () => {
    setKecelakaan(!kecelakaan);
  };

  const [kecelakaanLaluLintas, setKecelakaanLaluLintas] = useState(true);
  const checkedKecelakaanLaluLintas = () => {
    setKecelakaanLaluLintas(!kecelakaanLaluLintas);
  };

  const [jamKerja, setJamkerja] = useState(true);
  const checkedJamKerja = () => {
    setJamkerja(!jamKerja);
  };

  const [bpjs, setBpjs] = useState(true);
  const checkedBpjs = () => {
    setBpjs(!bpjs);
  };

  const [rawatJalan, setRawatJalan] = useState(true);
  const checkedRawatJalan = () => {
    setRawatJalan(!rawatJalan);
  };

  const questionDailyMonitoring = [
    {
      question: "  1. Kelas perawatan (Sesuai Plan/APS/Penuh/Toleransi)",
      answer: "",
    },
    {
      question: "2. Contact Information",
      answer: "",
    },
    {
      question: "3. Petugas RS (Admin / Ruang Perawatan)",
      answer: "",
    },
    {
      question: "4. Dokter yang merawat",
      answer: "",
    },
    {
      question: "5. Anamnesa",
      answer: "",
    },
    {
      question: "6. Keadaan umum pasien",
      answer: "",
    },
    {
      question: "7. Penunjang diagnostik",
      answer: "",
    },
    {
      question: "8. Diagnosa",
      answer: "",
    },
    {
      question: "9. Indikasi rawat inap",
      answer: "",
    },
    {
      question: "10. Rencana pengobatan / tindakan",
      answer: "",
    },
    {
      question: "11. Jenis / kategori tindakan (Khusus Pembedahan)",
      answer: "",
    },
    {
      question: "12. Perkiraan biaya ",
      answer: "",
    },
  ];

  const [admission, setAdmission] = useState<
    "maternity" | "pembedahan" | "nonpembedahan"
  >("nonpembedahan");
  const selectAdmission = (
    adm: "maternity" | "pembedahan" | "nonpembedahan"
  ) => {
    setAdmission(adm);
  };

  const [jenisTindakan, setJenisTindakan] = useState(true);
  const selectTindakan = () => {
    setJenisTindakan(!jenisTindakan);
  };

  const [jenisAnastesi, setJenisAnastesi] = useState<
    "umum" | "spinal" | "local"
  >("umum");
  const selectAnastesi = (anastesi: "umum" | "spinal" | "local") => {
    setJenisAnastesi(anastesi);
  };

  const [kategoriPembedahan, setKategoriPembedahan] = useState<
    "kompleks" | "major" | "intermediate" | "minor"
  >("kompleks");
  const selectKategori = (
    kategori: "kompleks" | "major" | "intermediate" | "minor"
  ) => {
    setKategoriPembedahan(kategori);
  };

  const [jenisKeluhan, setJenisKeluhan] = useState<
    "komplikasiKehamilan" | "persalinan" | "komplikasiPersalinan" | "aborsi"
  >("komplikasiKehamilan");
  const selectKeluhan = (
    keluhan:
      | "komplikasiKehamilan"
      | "persalinan"
      | "komplikasiPersalinan"
      | "aborsi"
  ) => {
    setJenisKeluhan(keluhan);
  };

  const [jenisPersalinan, setJenisPersalinan] = useState<
    "spontan" | "ve" | "forceps" | "sc" | "eraacs"
  >("spontan");
  const selectJenisPersalinan = (
    persalinan: "spontan" | "ve" | "forceps" | "sc" | "eraacs"
  ) => {
    setJenisPersalinan(persalinan);
  };

  const [statusTindakanSC, setStatusTindakanSC] = useState(true);
  const checkedStatusTindakan = () => {
    setStatusTindakanSC(!statusTindakanSC);
  };

  const [anastesiMaternity, setAnastesiMaternity] = useState<
    "ILA" | "umum" | "spinal"
  >("ILA");
  const selectAnastesiMaternity = (anastesi: "ILA" | "umum" | "spinal") => {
    setAnastesiMaternity(anastesi);
  };

  const [menempatiKamar, setMenempatiKamar] = useState<
    "hakKamar" | "aps" | "hakKamarPenuh" | "lainnya"
  >("hakKamar");
  const checkedMenempatiKamar = (
    kamar: "hakKamar" | "aps" | "hakKamarPenuh" | "lainnya"
  ) => {
    setMenempatiKamar(kamar);
  };

  const [isKartuIspc, setIskartuIspc] = useState(true);
  const checkedIsKartuIspc = () => {
    setIskartuIspc(!isKartuIspc);
  };

  const [isKartuIdentitas, setIsKartuIdentitas] = useState<
    "e-ktp" | "sim" | "passport" | "kitas" | "kia" | "lainnya"
  >("e-ktp");
  const checkedIsKartuIdentitas = (
    identitas: "e-ktp" | "sim" | "passport" | "kitas" | "kia" | "lainnya"
  ) => {
    setIsKartuIdentitas(identitas);
  };

  const [isAsuransi, setIsAsuransi] = useState(true);
  const checkhedIsAsuransi = () => {
    setIsAsuransi(!isAsuransi);
  };

  const [incurred, setIncurred] = useState("");
  const [approve, setApprove] = useState("");
  const [toPay, settoPay] = useState("");
  const [exPaid, setExPaid] = useState("");
  const [refund, setRefund] = useState("");
  const [exNotPaid, setExNotPaid] = useState("");
  const [paidtoProv, setPaidtoProve] = useState("");

  const incurredValues = (e: ChangeEvent<HTMLInputElement>): void => {
    const inc = e.target.value;
    // regex untuk hanya angka aja
    if (/^[0-9]+$/.test(inc)) {
      setIncurred(inc);
    }
  };
  const handleBlurIncurred = (e: FocusEvent<HTMLInputElement>): void => {
    const inc = e.target.value;
    if (approve === "0" || approve === "") {
      setApprove(inc);
    } else {
      handleToPay(incurred, approve);
    }
  };

  const handleBlurApprove = (e: FocusEvent<HTMLInputElement>): void => {
    const appr = e.target.value;
    handleToPay(incurred, appr);
    // handlePaidtoProv()
    // if(exPaid >= toPay) {
    //   const result = parseInt(exPaid) - parseInt(toPay);
    //   // setRefund(result.toString())
    // } else {
    //   setRefund('0')
    // }
  };
  const approveValues = (e: ChangeEvent<HTMLInputElement>): void => {
    const appr = e.target.value;
    // regex untuk hanya angka aja
    if (/^[0-9]+$/.test(appr)) {
      setApprove(appr);
    }
  };
  const handleToPay = (incurredValues: string, approveValues: string) => {
    const incurredNumber = parseInt(incurredValues);
    const approveNumber = parseInt(approveValues);
    if (!isNaN(incurredNumber) && !isNaN(approveNumber)) {
      const result = incurredNumber - approveNumber;
      handleRefund(exPaid, result.toString());
      settoPay(result.toString());
      if (exPaid === "0" || exPaid === "") {
        setExPaid(result.toString());
      }
    } else {
      settoPay("0");
    }
  };

  const handleBlurExpaid = (e: FocusEvent<HTMLInputElement>): void => {
    const valExPaid = e.target.value;
    handleRefund(valExPaid, toPay);
    handlePaidtoProv();
  };

  const handleExPaid = (e: ChangeEvent<HTMLInputElement>): void => {
    const valExPaid = e.target.value;
    // regex untuk hanya angka aja
    if (/^[0-9]+$/.test(valExPaid)) {
      setExPaid(valExPaid);
    }
  };

  const handleExnotPaid = () => {
    const exPaidVal = parseInt(exPaid);
    const toPayVal = parseInt(toPay);

    if (exPaidVal <= toPayVal) {
      const result = toPayVal - exPaidVal;
      setExNotPaid(result.toString());
      setRefund("0");
    } else {
      // handleRefund(exPaidVal.toString(),toPayVal.toString())
      setExNotPaid("0");
    }
  };

  const handleRefund = (handleExPaid: string, handleToPay: string) => {
    const exPaidNumber = parseInt(exPaid);
    const toPayNumber = parseInt(toPay);

    if (exPaidNumber >= toPayNumber) {
      const resultRefund = exPaidNumber - toPayNumber;
      setRefund(resultRefund.toString());
      setExNotPaid("0");
    } else {
      handleExnotPaid();
    }
  };

  const handlePaidtoProv = () => {
    const exNotPaidVal = parseInt(exNotPaid);
    const refundVal = parseInt(refund);
    const approveVal = parseInt(approve);

    if (exNotPaidVal > 0 && refundVal === 0) {
      const resultExnotPaid = approveVal + exNotPaidVal;
      setPaidtoProve(resultExnotPaid.toString());
      setRefund("0");
      console.log("exnotpaid:", resultExnotPaid);
    } else if (refundVal > 0 && exNotPaidVal === 0) {
      const resultRefund = approveVal - refundVal;
      setExNotPaid("0");
      console.log("refund");
      setPaidtoProve(resultRefund.toString());
    } else {
      console.log("approve");
      setPaidtoProve(approveVal.toString());
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title fs-4 text-center">
              <span className="card-label">Benefit</span>
            </h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered border-primary align-middle gs-0 gy-1 ">
                <thead>
                  <tr className="fw-bold fs-6 text-muted text-center table-primary border-primary">
                    <th className="">Code | Description </th>
                    <th>Qty</th>
                    <th>MaxLimit</th>
                    <th>Available</th>
                    <th>Incurred</th>
                    <th>Approve</th>
                    <th>ToPay</th>
                    <th>ExPaid</th>
                    <th>ExNotPaid</th>
                    <th>Refund</th>
                    <th>AsoApp</th>
                    <th>PaidtoProv</th>
                    <th>SMM</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-hover-dark text-hover-primary">
                    <td>01 | Biaya Administrasi</td>
                    <td></td>
                    <td>999,999,999</td>
                    <td>999,999,999</td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="0"
                        onChange={incurredValues}
                        onBlur={handleBlurIncurred}
                        value={incurred}
                        pattern="[0-9]+"
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="0"
                        onChange={approveValues}
                        onBlur={handleBlurApprove}
                        pattern="[0-9]+"
                        value={approve}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="0"
                        value={toPay}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="0"
                        value={exPaid}
                        onChange={handleExPaid}
                        onBlur={handleBlurExpaid}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={exNotPaid}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={refund}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        // // onChange={onchangeAsoApp}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        readOnly
                        value={paidtoProv}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        // onChange={onchangeSMM}
                      />
                    </td>
                    <td>
                      <select name="" id="" className="form-control">
                        <option value="">-- Please Select Remarks</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="text-end">
                      Total
                    </td>
                    <td>{incurred}</td>
                    <td>{approve}</td>
                    <td>{toPay === "" ? "0" : toPay}</td>
                    <td>{exPaid}</td>
                    <td>{exNotPaid}</td>
                    <td>{refund}</td>
                    <td>0</td>
                    <td>{paidtoProv}</td>
                    <td>0</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <h3>
        ===================================================================
      </h3>

      <div className="container">
        <h4>
          <b>"SURAT PERNYATAAN KELAS KAMAR"</b>
        </h4>

        <div className="mb-3">
          <label className="form-label">Nomor KTP/NIK</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Menempati kamar yang di tempati saat ini, karena : *Pilih salah satu
          </label>

          <div className="form-check">
            <input
              className="form-check-input"
              id="kecelakaan"
              type="radio"
              onChange={() => checkedMenempatiKamar("hakKamar")}
              checked={menempatiKamar === "hakKamar"}
            />
            <label className="form-check-label" htmlFor="kecelakaan">
              Kamar sesuai dengan hak kamar
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onChange={() => checkedMenempatiKamar("aps")}
              checked={menempatiKamar === "aps"}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              Atas Permintaan Sendiri (APS)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onChange={() => checkedMenempatiKamar("hakKamarPenuh")}
              checked={menempatiKamar === "hakKamarPenuh"}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              Kamar yang sesuai dengan hak kamar penuh / Tidak tersedia
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onChange={() => checkedMenempatiKamar("lainnya")}
              checked={menempatiKamar === "lainnya"}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              Lainnya
            </label>
            {menempatiKamar === "lainnya" ? (
              <input type="text" className="form-control" />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="">
          <label className="form-label">Informasi Pendukung</label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Peserta membawa kartu Asuransi PT. International Services Pacific
            Cross{" "}
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onClick={checkedIsKartuIspc}
              checked={isKartuIspc}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              YA
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onClick={checkedIsKartuIspc}
              checked={!isKartuIspc}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              Tidak
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Peserta membawa kartu identitas</label>
          <div className="form-check">
            <input
              className="form-check-input"
              id="e-ktp"
              type="radio"
              onChange={() => checkedIsKartuIdentitas("e-ktp")}
              checked={isKartuIdentitas === "e-ktp"}
            />
            <label className="form-check-label" htmlFor="e-ktp">
              E-KTP
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="sim"
              type="radio"
              onChange={() => checkedIsKartuIdentitas("sim")}
              checked={isKartuIdentitas === "sim"}
            />
            <label className="form-check-label" htmlFor="sim">
              SIM
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              id="passport"
              type="radio"
              onChange={() => checkedIsKartuIdentitas("passport")}
              checked={isKartuIdentitas === "passport"}
            />
            <label className="form-check-label" htmlFor="passport">
              Passport
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="kitas"
              type="radio"
              onChange={() => checkedIsKartuIdentitas("kitas")}
              checked={isKartuIdentitas === "kitas"}
            />
            <label className="form-check-label" htmlFor="kitas">
              KITAS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="kia"
              type="radio"
              onChange={() => checkedIsKartuIdentitas("kia")}
              checked={isKartuIdentitas === "kia"}
            />
            <label className="form-check-label" htmlFor="kia">
              KIA
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="lainnya"
              type="radio"
              onChange={() => checkedIsKartuIdentitas("lainnya")}
              checked={isKartuIdentitas === "lainnya"}
            />
            <label className="form-check-label" htmlFor="lainnya">
              Lainnya
            </label>
          </div>
          {isKartuIdentitas === "lainnya" ? (
            <input type="text" className="form-control" />
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">
            Peserta memiliki Asuransi Swasta lainnya, selain PT. International
            Services Pacific Cross{" "}
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onChange={checkhedIsAsuransi}
              checked={isAsuransi}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              YA
            </label>
          </div>
          {isAsuransi === true ? (
            <input type="text" className="form-control" />
          ) : (
            ""
          )}
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onChange={checkhedIsAsuransi}
              checked={!isAsuransi}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              Tidak
            </label>
          </div>
        </div>
      </div>

      <h3>
        ===================================================================
      </h3>
      <div className="container">
        <h4>
          <b>"SURAT KRONOLOGIS KEJADIAN"</b>
        </h4>

        <div className="mb-3">
          <label className="form-label">Jenis Trauma</label>

          <div className="form-check">
            <input
              className="form-check-input"
              id="kecelakaan"
              type="radio"
              onClick={checkedKecelakaan}
              checked={kecelakaan}
            />
            <label className="form-check-label" htmlFor="kecelakaan">
              Kecelakaan
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="bukan-kecelakaan"
              type="radio"
              onClick={checkedKecelakaan}
              checked={!kecelakaan}
            />
            <label className="form-check-label" htmlFor="bukan-kecelakaan">
              Bukan Kecelakaan
            </label>
          </div>
        </div>

        {kecelakaan ? (
          <>
            <div className="mb-3">
              <label className="form-label">Jenis Kecelakaan</label>

              <div className="form-check">
                <input
                  className="form-check-input"
                  id="kecelakaan-lalu-lintas"
                  type="radio"
                  onClick={checkedKecelakaanLaluLintas}
                  checked={kecelakaanLaluLintas}
                />
                <label
                  className="form-check-label"
                  htmlFor="kecelakaan-lalu-lintas"
                >
                  Kecelakaan Lalu Lintas
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="bukan-kecelakaan-lalu-lintas"
                  type="radio"
                  onClick={checkedKecelakaanLaluLintas}
                  checked={!kecelakaanLaluLintas}
                />
                <label
                  className="form-check-label"
                  htmlFor="bukan-kecelakaan-lalu-lintas"
                >
                  Bukan Kecelakaan Lalu Lintas
                </label>
              </div>
            </div>

            {kecelakaanLaluLintas ? (
              <>
                <div className="mb-3">
                  <label className="form-label">Jenis kendaraan</label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="kecelakaan-lalu-lintas"
                      type="radio"
                      checked={pasien === "roda2"}
                      onChange={() => checkedPasien("roda2")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="kecelakaan-lalu-lintas"
                    >
                      Kendaraan Roda 2
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="bukan-kecelakaan-lalu-lintas"
                      type="radio"
                      checked={pasien === "roda4"}
                      onChange={() => checkedPasien("roda4")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="bukan-kecelakaan-lalu-lintas"
                    >
                      Kendaraan Roda 4
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="lainnya"
                      type="radio"
                      checked={pasien === "lainnya"}
                      onChange={() => checkedPasien("lainnya")}
                    />
                    <label className="form-check-label" htmlFor="lainnya">
                      Lainnya
                    </label>
                    {pasien === "lainnya" ? (
                      <>
                        <div className="mb-3">
                          <input type="text" className="form-control" />
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Pasien Sebagai</label>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="pengendara"
                      type="radio"
                      checked={pengendara === "pengendara"}
                      onChange={() => checkedPengendara("pengendara")}
                    />
                    <label className="form-check-label" htmlFor="pengendara">
                      Pengendara
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="penumpang"
                      type="radio"
                      checked={pengendara === "penumpang"}
                      onChange={() => checkedPengendara("penumpang")}
                    />
                    <label className="form-check-label" htmlFor="penumpang">
                      Penumpang
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="pejalan-kaki"
                      type="radio"
                      checked={pengendara === "pejalan-kaki"}
                      onChange={() => checkedPengendara("pejalan-kaki")}
                    />
                    <label className="form-check-label" htmlFor="pejalan-kaki">
                      Pejalan Kaki
                    </label>
                  </div>
                </div>

                {pengendara === "pengendara" ? (
                  <>
                    <div className="mb-3">
                      <label className="form-label">
                        Jika sebagai pengendara, apakah pasien membawa SIM?
                      </label>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="ya-pengendara"
                          type="radio"
                          onClick={checkedSim}
                          checked={sim}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ya-pengendara"
                        >
                          YA
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="tidak-pengendara"
                          type="radio"
                          onClick={checkedSim}
                          checked={!sim}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="tidak-pengendara"
                        >
                          TIDAK
                        </label>
                      </div>
                    </div>
                    {sim ? (
                      <>
                        <div className="mb-3">
                          <label className="form-label">Jenis SIM</label>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="sim-a"
                              type="radio"
                              onChange={() => selecttedSim("A")}
                              checked={selectSim === "A"}
                            />
                            <label className="form-check-label" htmlFor="sim-a">
                              SIM A
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="sim-b"
                              type="radio"
                              onChange={() => selecttedSim("B")}
                              checked={selectSim === "B"}
                            />
                            <label className="form-check-label" htmlFor="sim-b">
                              SIM B
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="sim-c"
                              type="radio"
                              onChange={() => selecttedSim("C")}
                              checked={selectSim === "C"}
                            />
                            <label className="form-check-label" htmlFor="sim-c">
                              SIM C
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              id="sim-d"
                              type="radio"
                              onChange={() => selecttedSim("D")}
                              checked={selectSim === "D"}
                            />
                            <label className="form-check-label" htmlFor="sim-d">
                              SIM D
                            </label>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="Salinan SIM" className="form-label">
                            Salinan SIM
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Salinan SIM"
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="Tanggal Berlaku SIM"
                            className="form-label"
                          >
                            Tanggal Berlaku SIM
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="Tanggal Berlaku SIM"
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    <div className="mb-3">
                      <label className="form-label">
                        Jika pasien membawa kendaraan roa 2 (dua), apakah
                        menggunakan helm?
                      </label>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="ya-pakai"
                          type="radio"
                          onClick={checkedHelm}
                          checked={helm}
                        />
                        <label className="form-check-label" htmlFor="ya-pakai">
                          YA
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          id="tidak-pakai"
                          type="radio"
                          onClick={checkedHelm}
                          checked={!helm}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="tidak-pakai"
                        >
                          TIDAK
                        </label>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              <>
                <div className="mb-3">
                  <label
                    htmlFor="Kapan Terjadinya Kecelakaan"
                    className="form-label"
                  >
                    Kapan Terjadinya Kecelakaan
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="Kapan Terjadinya Kecelakaan"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="Tempat Terjadinya Kecelakaan"
                    className="form-label"
                  >
                    Tempat Terjadinya Kecelakaan
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Tempat Terjadinya Kecelakaan"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Apakah kecelakaan ini terjadi dalam jam kerja
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="ya-jam-kerja"
                      type="radio"
                      checked={jamKerja}
                      onClick={checkedJamKerja}
                    />
                    <label className="form-check-label" htmlFor="ya-jam-kerja">
                      YA
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="tidak-jam-kerja"
                      type="radio"
                      checked={!jamKerja}
                      onClick={checkedJamKerja}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="tidak-jam-kerja"
                    >
                      TIDAK
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Apakah kecelakaan ini mendapatkan perlindungan dari BPJS-TK?
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="ya-jam-kerja"
                      type="radio"
                      checked={bpjs}
                      onClick={checkedBpjs}
                    />
                    <label className="form-check-label" htmlFor="ya-jam-kerja">
                      YA
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="tidak-jam-kerja"
                      type="radio"
                      checked={!bpjs}
                      onClick={checkedBpjs}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="tidak-jam-kerja"
                    >
                      TIDAK
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Berikan gambaran singkat mengenai kejadian kecelakaan
                  </label>
                  <textarea name="" id="" className="form-control"></textarea>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="Tempat Terjadinya Kecelakaan"
                    className="form-label"
                  >
                    Bagian tubuh mana yang mengalami cedera
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Tempat Terjadinya Kecelakaan"
                  />
                </div>
              </>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <h3>
        ===================================================================
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama
              </label>
              <input type="text" className="form-control" id="nama" />
            </div>

            <div className="mb-3">
              <label htmlFor="No Card" className="form-label">
                No Card
              </label>
              <input type="text" className="form-control" id="No Card" />
            </div>

            <div className="mb-3">
              <label htmlFor="Date Of Birth" className="form-label">
                Date Of Birth
              </label>
              <input type="date" className="form-control" id="Date Of Birth" />
            </div>

            <div className="mb-3">
              <label htmlFor="Plan Remaining Limit" className="form-label">
                Plan Remaining Limit
              </label>
              <input
                type="text"
                className="form-control"
                id="Plan Remaining Limit"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Kamar Tersedia</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="tersedia"
                  onClick={checkedKamar}
                  checked={kamar}
                />
                <label className="form-check-label" htmlFor="tersedia">
                  Tersedia
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  onClick={checkedKamar}
                  checked={!kamar}
                  id="penuh"
                />
                <label className="form-check-label" htmlFor="penuh">
                  Penuh
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Masuk Perawatan Melalui :</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="ugd"
                  onClick={checkedUgd}
                  checked={ugd}
                />
                <label className="form-check-label" htmlFor="ugd">
                  UGD
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  onClick={checkedUgd}
                  checked={!ugd}
                  id="non-ugd"
                />
                <label className="form-check-label" htmlFor="non-ugd">
                  Non UGD
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="kelas-kamar" className="form-label">
                Kelas Kamar
              </label>
              <input type="text" className="form-control" id="kelas-kamar" />
            </div>

            <div className="mb-3">
              <label htmlFor="No Rekam Medis" className="form-label">
                No Rekam Medis
              </label>
              <input type="text" className="form-control" id="No Rekam Medis" />
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="No HP Penanggung Jawab" className="form-label">
                No HP Penanggung Jawab
              </label>
              <input
                type="text"
                className="form-control"
                id="No HP Penanggung Jawab"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Dokter Penanggung Jawab" className="form-label">
                Dokter Penanggung Jawab
              </label>
              <input
                type="text"
                className="form-control"
                id="Dokter Penanggung Jawab"
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="Nama Petugas" className="form-label">
                    Nama Petugas
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Nama Petugas"
                  />
                </div>
                /
                <div className="col">
                  <label htmlFor="Ext" className="form-label">
                    Ext
                  </label>
                  <input type="text" className="form-control" id="Ext" />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="Diagnosa" className="form-label">
                Diagnosa
              </label>
              <input type="text" className="form-control" id="Diagnosa" />
            </div>

            <div className="mb-3">
              <label htmlFor="No HP Penanggung Jawab" className="form-label">
                Deskripsi Kondisi Pasien/Kecelakaan
              </label>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label htmlFor="floatingTextarea">Deskripsi</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>
        ===================================================================
      </h3>
      <div className="container">
        <div className="form-check">
          <input
            className="form-check-input"
            id="nonpembedahan"
            type="radio"
            onChange={() => selectAdmission("nonpembedahan")}
            checked={admission === "nonpembedahan"}
          />
          <label className="form-check-label" htmlFor="nonpembedahan">
            NON PEMBEDAHAN
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            id="pembedahan"
            type="radio"
            onChange={() => selectAdmission("pembedahan")}
            checked={admission === "pembedahan"}
          />
          <label className="form-check-label" htmlFor="pembedahan">
            PEMBEDAHAN
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            id="maternity"
            type="radio"
            onChange={() => selectAdmission("maternity")}
            checked={admission === "maternity"}
          />
          <label className="form-check-label" htmlFor="maternity">
            MATERNITY
          </label>
        </div>

        <h4>
          ADMISSION REPORT{" "}
          {admission === "nonpembedahan"
            ? "NON PEMBEDAHAN"
            : admission === "pembedahan"
            ? "PEMBEDAHAN"
            : "MATERNITY"}{" "}
        </h4>
        <div className="mb-3">
          <label className="form-label">Dokter Yang Merawat</label>
          <input className="form-control" type="text" />
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Diagnosa Utama</label>
              <input className="form-control" type="text" />
            </div>
            {admission === "maternity" ? (
              <div className="row">
                <div className="col">
                  <label className="form-label">G</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label className="form-label">P</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col">
                  <label className="form-label">A</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Diagnosa Penyerta</label>
              <input className="form-control" type="text" />
            </div>
            {admission === "maternity" ? (
              <div className="row">
                <div className="col">
                  <label className="form-label">Hamil</label>
                  <input
                    className="form-control"
                    placeholder="Minggu"
                    type="text"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Etiologi Diagnosa</label>
          <input className="form-control" type="text" />
        </div>
        {admission !== "maternity" ? (
          <>
            <div className="mb-3">
              <label>Kronologi Kejadian</label>
              <textarea className="form-control" name="" id=""></textarea>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="mb-3">
          <label className="form-label">Keluhan yang dirasakan</label>
          <input className="form-control" type="text" />
        </div>
        <div className="mb-3">
          <label className="form-label">Sejak kapan keluhan dirasakan</label>
          <input className="form-control" type="text" />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Apakah keluhann yang sama pernah dirasakan sebelumnya
          </label>
          <input className="form-control" type="text" />
        </div>
        {admission === "maternity" ? (
          <>
            <div className="mb-3">
              <label className="form-label">
                Apakah Keluhan saat ini berhubungan dengan :
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="komplikasikehamilan"
                  type="radio"
                  onChange={() => selectKeluhan("komplikasiKehamilan")}
                  checked={jenisKeluhan === "komplikasiKehamilan"}
                />
                <label
                  className="form-check-label"
                  htmlFor="komplikasikehamilan"
                >
                  Komplikasi Kehamilan
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="persalinan"
                  type="radio"
                  onChange={() => selectKeluhan("persalinan")}
                  checked={jenisKeluhan === "persalinan"}
                />
                <label className="form-check-label" htmlFor="persalinan">
                  Persalinan
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="komplikasipersalinan"
                  type="radio"
                  onChange={() => selectKeluhan("komplikasiPersalinan")}
                  checked={jenisKeluhan === "komplikasiPersalinan"}
                />
                <label
                  className="form-check-label"
                  htmlFor="komplikasipersalinan"
                >
                  Komplikasi Persalinan
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="aborsi"
                  type="radio"
                  onChange={() => selectKeluhan("aborsi")}
                  checked={jenisKeluhan === "aborsi"}
                />
                <label className="form-check-label" htmlFor="aborsi">
                  Aborsi
                </label>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="mb-3">
          <label className="form-label">Hasil Anamnnesa</label>
          <input className="form-control" type="text" />
        </div>

        {admission === "maternity" ? (
          <div className="mb-3">
            <label className="form-label">Indikasi Rawat Inap</label>
            <input className="form-control" type="text" />
          </div>
        ) : (
          ""
        )}

        <h6>Pemeriksaan Fisik</h6>

        <div className="mb-3">
          <div className="row">
            <div className="col-3">
              <label htmlFor="" className="form-label">
                Tekanan Darah
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-3">
              <label htmlFor="" className="form-label">
                Respirasi
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-3">
              <label htmlFor="" className="form-label">
                Nadi
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-3">
              <label htmlFor="" className="form-label">
                Suhu
              </label>
              <input className="form-control" type="text" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-3">
              <label htmlFor="" className="form-label">
                VAS
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-3">
              <label htmlFor="" className="form-label">
                Kesadaran
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-3">
              <label htmlFor="" className="form-label">
                Mobilisasi
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-3">
              <label htmlFor="" className="form-label">
                Keadaan Umum
              </label>
              <input className="form-control" type="text" />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col-6">
              <label htmlFor="" className="form-label">
                GCS
              </label>
              <input className="form-control" type="text" />
            </div>
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Saturasi
              </label>
              <input className="form-control" type="text" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label>Hasil Test penunjang yang telah dilakukan</label>
          <textarea className="form-control" name="" id=""></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Terapi yang sudah dilakukan</label>
          <input className="form-control" type="text" />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Rencana Terapi yang akan dilakukan
          </label>
          <input className="form-control" type="text" />
        </div>

        {admission === "maternity" ? (
          <div className="mb-3">
            <label className="form-label">Jenis Persalinan</label>
            <div className="form-check">
              <input
                className="form-check-input"
                id="spontan"
                type="radio"
                onChange={() => selectJenisPersalinan("spontan")}
                checked={jenisPersalinan === "spontan"}
              />
              <label className="form-check-label" htmlFor="spontan">
                Spontan
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="ve"
                type="radio"
                onChange={() => selectJenisPersalinan("ve")}
                checked={jenisPersalinan === "ve"}
              />
              <label className="form-check-label" htmlFor="ve">
                Spontan dengan VE
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="forceps"
                type="radio"
                onChange={() => selectJenisPersalinan("forceps")}
                checked={jenisPersalinan === "forceps"}
              />
              <label className="form-check-label" htmlFor="forceps">
                Spontan dengan forceps
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="sectio"
                type="radio"
                onChange={() => selectJenisPersalinan("sc")}
                checked={jenisPersalinan === "sc"}
              />
              <label className="form-check-label" htmlFor="sectio">
                Sectio Caesari (SC)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="eraacs"
                type="radio"
                onChange={() => selectJenisPersalinan("eraacs")}
                checked={jenisPersalinan === "eraacs"}
              />
              <label className="form-check-label" htmlFor="eraacs">
                Sectio Caesari (SC) dengan eraacs
              </label>
            </div>
          </div>
        ) : (
          ""
        )}

        {admission === "maternity" &&
        (jenisPersalinan === "sc" || jenisPersalinan === "eraacs") ? (
          <>
            <div className="mb-3">
              <label className="form-label">
                Indikasi Jika Persalinan dengan SC
              </label>
              <textarea name="" id="" className="form-control"></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Status Tindakan SC</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="elektif-sc"
                  type="radio"
                  onChange={checkedStatusTindakan}
                  checked={statusTindakanSC}
                />
                <label className="form-check-label" htmlFor="elektif-sc">
                  Elektif
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="cito-sc"
                  type="radio"
                  onChange={checkedStatusTindakan}
                  checked={!statusTindakanSC}
                />
                <label className="form-check-label" htmlFor="cito-sc">
                  Cito
                </label>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {admission === "maternity" ? (
          <>
            <div className="mb-3">
              <label className="form-label">Tanggal Persalinan</label>
              <input className="form-control" type="date" />
            </div>
            <div className="mb-3">
              <label className="form-label">Anastesi yang digunakan</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="ILA"
                  type="radio"
                  onChange={() => selectAnastesiMaternity("ILA")}
                  checked={anastesiMaternity === "ILA"}
                />
                <label className="form-check-label" htmlFor="ILA">
                  ILA
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="Umum/General Anastesi"
                  type="radio"
                  onChange={() => selectAnastesiMaternity("umum")}
                  checked={anastesiMaternity === "umum"}
                />
                <label
                  className="form-check-label"
                  htmlFor="Umum/General Anastesi"
                >
                  Umum/General Anastesi
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="Spinal-MATERNITY"
                  type="radio"
                  onChange={() => selectAnastesiMaternity("spinal")}
                  checked={anastesiMaternity === "spinal"}
                />
                <label className="form-check-label" htmlFor="Spinal-MATERNITY">
                  Spinal
                </label>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {admission === "pembedahan" ? (
          <>
            <div className="mb-3">
              <label className="form-label">
                Rencana Tindakan yang akan dilakukan
              </label>
              <input className="form-control" type="text" />
            </div>
            <h6>Informasi Detil Rencana Tindakan</h6>
            <div className="mb-3">
              <label className="form-label">Nama Tindakan</label>
              <input className="form-control" type="text" />
            </div>
            <div className="row">
              <div className="col-4">
                Jenis Tindakan
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="cito"
                    type="radio"
                    onChange={selectTindakan}
                    checked={jenisTindakan}
                  />
                  <label className="form-check-label" htmlFor="cito">
                    Cito
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="terencana"
                    type="radio"
                    onChange={selectTindakan}
                    checked={!jenisTindakan}
                  />
                  <label className="form-check-label" htmlFor="terencana">
                    Terencana/Elektif
                  </label>
                </div>
              </div>
              <div className="col-4">
                Jenis Anastesi
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="umum"
                    type="radio"
                    onChange={() => selectAnastesi("umum")}
                    checked={jenisAnastesi === "umum"}
                  />
                  <label className="form-check-label" htmlFor="umum">
                    Umum/General Anastesi
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="spinal"
                    type="radio"
                    onChange={() => selectAnastesi("spinal")}
                    checked={jenisAnastesi === "spinal"}
                  />
                  <label className="form-check-label" htmlFor="spinal">
                    Spinal
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="local"
                    type="radio"
                    onChange={() => selectAnastesi("local")}
                    checked={jenisAnastesi === "local"}
                  />
                  <label className="form-check-label" htmlFor="local">
                    Local
                  </label>
                </div>
              </div>
              <div className="col-4">
                Kategori Pembedahan
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="kompleks"
                    type="radio"
                    onChange={() => selectKategori("kompleks")}
                    checked={kategoriPembedahan === "kompleks"}
                  />
                  <label className="form-check-label" htmlFor="kompleks">
                    Kompleks
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="major"
                    type="radio"
                    onChange={() => selectKategori("major")}
                    checked={kategoriPembedahan === "major"}
                  />
                  <label className="form-check-label" htmlFor="major">
                    Major
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="intermediate"
                    type="radio"
                    onChange={() => selectKategori("intermediate")}
                    checked={kategoriPembedahan === "intermediate"}
                  />
                  <label className="form-check-label" htmlFor="intermediate">
                    Intermediate
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="minor"
                    type="radio"
                    onChange={() => selectKategori("minor")}
                    checked={kategoriPembedahan === "minor"}
                  />
                  <label className="form-check-label" htmlFor="minor">
                    Minor/ODS
                  </label>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="mb-3">
          <label className="form-label">Perkiraan Lama Rawat Inap</label>
          <input className="form-control" type="text" />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Apakah untuk pemeriksaan dan pengobatan dapat secara aman dilakukan
            secara rawat jalan
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              id="ya-aman"
              type="radio"
              checked={rawatJalan}
              onClick={checkedRawatJalan}
            />
            <label className="form-check-label" htmlFor="ya-aman">
              YA
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="tidak-aman"
              type="radio"
              checked={!rawatJalan}
              onClick={checkedRawatJalan}
            />
            <label className="form-check-label" htmlFor="tidak-aman">
              TIDAK
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
