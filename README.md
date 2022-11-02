<h1 align="center">
  MyLibrary
</h1>

<p align="center">
  MyLibrary merupakan Aplikasi Web yang memiliki fungsi untuk melakukan pembukuan terhadap Novel/Buku
</p>

<p align="center">Kelompok 9</p><br>

### Anggota Kelompok
|No   |   Nama     |   NIM     |
|----|------------|-----------|
|1. | Muhammad Farras Ilhami     | 20/456843/TK/50667 |
|2. | Muhammad Fatin Abimanyu    | 20/456844/TK/50668 |
|3. | Muhammad Iqbal Reza        | 20/460549/TK/51138 |
|4. | Muhamad Thoriq Ahnaf       | 20/460553/TK/51142 |
|5. | Agnes Suarna               | 20/463589/TK/51581 | 


### How to use
- [Download](https://nodejs.org/en/download/) and install **Node.js** version `16.15` or higher.
- Clone this project on your computer.
- Don't forget to fill the .env files with 
  ```bash
  npm install
  npm run dev
  ```
### Directories
    .
                        
    ├── config               
    ├── controllers           
    ├── middleware            
    ├── model                
    ├── routers                               
    ├── Server.js                 
    ├── package.json
    └── README.md
  
### Explanation
1. config
  
   Berisi tentang configuration aplikasi.
  
1. routers

   Berisi router yang terkoneksi dengan controller.

1. controllers

   Berisi controller dan terkoneksi dengan service. Semua logic dari aplikasi harus berada pada controller.

1. model

   Berisi model dan schema

1. middlewares

   Berisi express middleware.
   
1. package.json

   Berisi informasi, dependency, dan npm scripts dari aplikasi.

1. Server.js

   Berisi inisialisasi server untuk aplikasi.
