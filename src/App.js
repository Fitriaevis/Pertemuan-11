import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
    <div className="Foto">
      <img src="images.jpg"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate">Alat Elektronik</p>
      <h1 className="Title">TELEVISI</h1>
      <p className="Price">IDR 19.191.919</p>
      <p className="Info">
      Televisi sebagai media massa,  memiliki tiga fungsi utama yaitu sebagai media informasi, media pendidikan dan media hiburan.  Kini telah hadir 
      di tokoh online shopee dan tiktokshop.  Silahkan berkunjung bila pengen yang ada diskon ikuti live tiktok kami!!
      </p>
      <div>
        <h2>Ukuran</h2> 
      <button className="A">24 inch</button>
      <button className="B">32 inch</button>
      <button className="C">42 inch</button>
      <button className="D">50 inch</button>
      </div>
      <button className="buy">Beli Sekarang</button>
      <button className="Add">Masukkan Ke Keranjang</button>
    </div>
   </div>
   
  );
}

export default App;