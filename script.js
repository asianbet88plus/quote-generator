const quotes = [
    { quote: "Kebangkitan adalah kemenangan sejati.", author: "Budi Utomo" },
    { quote: "Hidup adalah sebuah seni.", author: "Ruth S. W" },
    { quote: "Kesuksesan adalah perpaduan antara usaha dan keberuntungan.", author: "Joko Susilo" },
    // Tambahkan lebih banyak kutipan sesuai keinginan
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('new-quote');

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex].quote;
    authorElement.innerText = quotes[randomIndex].author;

    // Mengganti warna latar belakang
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
}

button.addEventListener('click', newQuote);
window.onload = newQuote; // Memuat kutipan saat halaman dibuka
