<h1 align="center">
  MyLibrary E2E Testing
</h1>
<p align="center">Kelompok 6 Tugas Akhir Mata Kuliah Pengujian Perangkat Lunak</p><br>
<p align="center">
  Repository ini berisikan MyLibrary, aplikasi Web yang pembukuan Novel/Buku yang telah ditambahkan program untuk mendemonstrasikan End to End Testing menggunakan Cypress.
</p>

## Anggota Kelompok
|No   |   Nama     |   NIM     |
|----|------------|-----------|
|1. | Luthfi Izzuddin Hanif     | 20/463605/TK/51597 |
|2. | Muhamad Thoriq Ahnaf      | 20/460553/TK/51142 |
|3. | Christian Ale Perdana     | 20/463596/TK/51588

## Source code:
https://github.com/chrstnale/PPL-6

## Description 
MyLibrary merupakan Aplikasi Web yang memiliki fungsi untuk membantu librarian dalam mengelola  Novel/Buku yang ada di perpustakaan, dimana nantinya user dapat melihat buku yang dapat dipinjam dan pustakawan dapat melakukan pendataan terhadap buku mulai dari create untuk membuat data buku, melakukan pendataan buku yang dipinjam, hingga pada bagian delete menghapus data buku tadi.
Proses CRUD hanya dapat dilakukan oleh librarian sebagai admin dari aplikasi MyLirary. 
- Jika ingin login sebagai admin, silahkan input username dan password dibawah ini : 
  ```bash
  username : admin
   ```
   
   ```bash
   password : admin
   ```


## Langkah-langkah untuk melakukan pengujian:
1. Masuk ke dalam folder source code.
2. Membuka source code menggunakan code editor.
3. Membuka terminal pada code editor.
4. Menuliskan perintah untuk masuk ke dalam folder front-end dari aplikasi.
```bash
  cd client
```
5. Setelah masuk ke dalam folder front-end, menuliskan perintah pada terminal yang akan mengunduh library yang diperlukan.
```bash
  npm install
```
6. Setelah npm install selesai dijalankan, menuliskan perintah untuk menjalankan aplikasi.
```bash
  npm start
```
7. Pada file directory, masuk ke dalam folder cypress lalu ke file e2e untuk menuliskan atau melihat test code yang sesuai dengan test case yang sudah dibuat.
8. Untuk menjalankan automate testing, jalankan perintah untuk menjalankan framework testing Cypress.
```bash
  npx cypress open
```
9. Perintah npx cypress open akan membuka browser yang merupakan GUI dari Cypress untuk melakukan testing.
10. Setelah browser sudah terbuka, test code yang sudah dituliskan pada file e2e akan ditampilkan di bagian sidebar. Test code yang ditampilkan berupa judul test dan hasil dari test ketika dijalankan.
11. Untuk membuka menu automate test, pilih menu E2E Testing dan pilih browser di mana testing ingin dijalankan
12. Pada menu Specs, pilih file yang telah dituliskan di source code (readCreate.cy.js atau loginNegative.cy.js)
12. Testing akan dijalankan secara otomatis oleh Cypress sesuai dengan test code yang sudah dituliskan.
13. Hasil dari testing akan ditampilkan pada sidebar sebelah kiri, di mana setiap detail langkah dapat ditelusuri satu per satu kondisinya.