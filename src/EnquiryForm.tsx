import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function EnquiryForm() {
  return (
    <div>
      <div className="container-fluid">
        
      <h5>Diagnosa tersebut akibat dari : </h5>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Kecelakaan
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Konsumsi Minuman Beralkohol
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Konsumsi Obat/Zat Terlarang/Narkotika/Racun/Biohazzard
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Percobaan Bunuh Diri
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Kesuburan / ketidaksuburan
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Gangguan Hormonal
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Gangguan Menstruasi
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Kejiwaan/ Psikosomatis
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Kosmetik & Estetik
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Penyakit Genital /Penyakit Menular Seksual
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Kelainan Bawaan (Congenital)
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Faktor keturunan (Herediter)
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Gangguan Tumbuh Kembang
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        HIV / AIDS
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Epilepsy
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Kehamilan
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Komplikasi kehamilan / persalinan
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Gangguan Refraksi
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Gangguan Kesehatan Gigi & Mulut
        <br />
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        Pemeriksaan Kesehatan Rutin /MCU/Skrining Kesehatan.
        <br />
        <br />
        <h5>Apakah Keluhan Disertai dengan :</h5>
        <div className="">
          a. Gatal / Itchy
          <input type="radio" name="" className="" id="" /> YA
          <input type="radio" name="" className="" id="" /> Tidak
        </div>
        <div className="">
          b. Peradangan/ Inflammation
          <input type="radio" name="" className="" id="" /> YA
          <input type="radio" name="" className="" id="" /> Tidak
        </div>
        <div className="">
          c. Luka/ Wound
          <input type="radio" name="" className="" id="" /> YA
          <input type="radio" name="" className="" id="" /> Tidak
        </div>
        <div className="">
          d. Nyeri/ Pain
          <input type="radio" name="" className="" id="" /> YA
          <input type="radio" name="" className="" id="" /> Tidak
        </div>
        <div className="">
          e. Bertambah Besar/ Enlarged
          <input type="radio" name="" className="" id="" /> YA
          <input type="radio" name="" className="" id="" /> Tidak
        </div>
        <div className="">
          f. Demam/ Fever
          <input type="radio" name="" className="" id="" /> YA
          <input type="radio" name="" className="" id="" /> Tidak
        </div>
        <div className="">
          g. Infeksi/ Infection
          <input type="radio" name="" className="" id="" /> YA
          <input type="radio" name="" className="" id="" /> Tidak
        </div>

        <br /><br />
        <h5>Status Lokasi:</h5>
        <div className="">
          a. Region :
          <input type="text" name="" className="form-control" id="" /> 
        </div>
        <div className="">
          b. Ukuran :
          <input type="text" name="" className="form-control" id="" /> 
        </div>
        <div className="">
          c. Luas :
          <input type="text" name="" className="form-control" id="" /> 
        </div>
        <div className="">
          d. Kedalaman :
          <input type="text" name="" className="form-control" id="" /> 
        </div>
        <div className="">
          e. Jumlah :
          <input type="text" name="" className="form-control" id="" /> 
        </div>
        <div className="">
          e. Gambaran Klinis :
          <textarea name="" className="form-control" id="" cols={30} rows={3}></textarea>
        </div>

<br />
        <div className="">
            <label htmlFor="">Nama DPJP</label>
            <input type="text" name="" className="form-control" id="" />
        </div>
      </div>
      ======================================================================================================
    </div>
    
  );
}
