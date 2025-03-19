 <div class="container">
        <div class="regex-item">
            <h2>Cep Telefonu Numarası</h2>
            <h3>Kabul edilen formatlar</h3>
            <p><i>05231231212<br>0513 123 12 12<br>533 123 12 12<br>5431231212<br>+905031231212<br>00905531231212<br>+90.5331231212<br>0090.5531231212</i></p>
            <h3>Regex</h3>
              <pre>/^(?:\+90.?5|0090.?5|905|0?5)(?:[01345][0-9])\s?(?:[0-9]{3})\s?(?:[0-9]{2})\s?(?:[0-9]{2})$/</pre>
            </div>
            <div class="regex-item">
                <h2>Sabit Telefonu Numarası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>02231231212<br>0223 123 12 12</i></p>
                <h3>Regex</h3>
                <pre>/^(0)([2348]{1})([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/</pre>
            </div>
            <div class="regex-item">
                <h2>TC Kimlik Numarası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>12345678902</i> <i>12345678900</i></p>
                <h3>Regex</h3>
                <pre>^[1-9]{1}[0-9]{9}[02468]{1}$</pre>
            </div>
            <div class="regex-item">
                <h2>Vergi Numarası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>1234567890</i></p>
                <h3>Regex</h3>
                <pre>/^[0-9]{10}$/</pre>
            </div>
            <div class="regex-item">
                <h2>Kredi Kartı Numarası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>1111222233334444<br>1111 2222 3333 4444</i></p>
                <h3>Regex</h3>
                <pre>/^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/</pre>
            </div>
            <div class="regex-item">
                <h2>Araç Plakası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>34A2344<br>34A23415<br>06BK123<br>06JK1234<br>81ABC75</i></p>
                <h3>Regex</h3>
                <pre>/^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/</pre>
            </div>
            <div class="regex-item">
                <h2>Doğum Tarihi</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>13.08.1987<br>13081987<br>13/08/1987<br>13-08-1987<br>13 08 1987</i></p>
                <h3>Regex</h3>
                <pre>/^([1-9]|[12][0-9]|3[01])(|\/|\.|\-|\s)?(0[1-9]|1[12])\2(19[0-9]{2}|200[0-9]|201[0-8])$/</pre>
            </div>
            <div class="regex-item">
                <h2>Fatura Numarası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>ABC2025123456789</i></p>
                <h3>Regex</h3>
                <pre>^[A-Z0-9]{3}\d{13}$</pre>
            </div>
    </div>
