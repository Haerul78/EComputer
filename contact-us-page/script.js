document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form mengirimkan data dengan cara default

    // Mengambil data dari form
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Menampilkan alert dengan data form
    alert(
      "Nama Depan: " +
        firstName +
        "\n" +
        "Nama Belakang: " +
        lastName +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Telepon: " +
        phone +
        "\n" +
        "Pesan: " +
        message
    );

  document.addEventListener('mousemove', function(event) {
      const navbar = document.querySelector('.navbar');
      if (event.clientX < 50) {
          navbar.style.left = '0';
      } else {
          navbar.style.left = '-250px';
      }
  });
    // Di sini Anda bisa mengirim data form ke server menggunakan fetch atau XMLHttpRequest
    // Contoh (uncomment untuk digunakan):
    /*
    fetch('YOUR_SERVER_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, phone, message })
    })
    .then(response => response.json())
    .then(data => {
      // Tangani jika sukses
      console.log('Sukses:', data);
    })
    .catch((error) => {
      // Tangani jika ada error
      console.error('Error:', error);
    });
    */
  });
