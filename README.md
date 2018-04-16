 <div class="container">
        <div class="regex-item">
            <h2>Cep Telefonu Numarası</h2>
            <h3>Kabul edilen formatlar</h3>
            <p><i>05231231212<br>0523 123 12 12</i></p>
            <h3>Regex</h3>
              <pre>/^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/</pre>
            </div>
            <div class="regex-item">
                <h2>Sabit Telefonu Numarası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>01231231212<br>0123 123 12 12</i></p>
                <h3>Regex</h3>
                <pre>/^(0)([0-9]{3})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/</pre>
            </div>
            <div class="regex-item">
                <h2>TC Kimlik Numarası</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>12345678901</i></p>
                <h3>Regex</h3>
                <pre>/^[0-9]{11}$/</pre>
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
                <p><i>34AD234<br>06J1238<br>45ASD234</i></p>
                <h3>Regex</h3>
                <pre>/^([0-9]{2})([A-Z]{1,3})([0-9]{2,4})$/</pre>
            </div>
            <div class="regex-item">
                <h2>Doğum Tarihi</h2>
                <h3>Kabul edilen formatlar</h3>
                <p><i>13.08.1987<br>13081987<br>13/08/1987<br>13-08-1987<br>13 08 1987</i></p>
                <h3>Regex</h3>
                <pre>/^([1-9]|[12][0-9]|3[01])(\/?\.?\-?\s?)(0[1-9]|1[12])(\/?\.?\-?\s?)(19[0-9][0-9]|20[0][0-9]|20[1][0-8])$/</pre>
            </div>
    </div>
