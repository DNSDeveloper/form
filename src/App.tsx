import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
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

  return (
    <div className="App">
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
                        value={100000}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={50000}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={50000}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={0}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={50000}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={0}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={0}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={100000}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        value={0}
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
                    <td>100000</td>
                    <td>50000</td>
                    <td>50000</td>
                    <td>0</td>
                    <td>50000</td>
                    <td>0</td>
                    <td>0</td>
                    <td>100000</td>
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
        <h4>"ADMISSION REPORT NON PEMBEDAHAN"</h4>
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
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Diagnosa Penyerta</label>
              <input className="form-control" type="text" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Etiologi Diagnosa</label>
          <input className="form-control" type="text" />
        </div>
        <div className="mb-3">
          <label>Kronologi Kejadian</label>
          <textarea className="form-control" name="" id=""></textarea>
        </div>
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
        </div>
        <input className="form-control" type="text" />
        <div className="mb-3">
          <label className="form-label">Hasil Anamnnesa</label>
          <input className="form-control" type="text" />
        </div>

        <h6>pemeriksaan fisik</h6>

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
    </div>
  );
}

export default App;
