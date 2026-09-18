# Caca's Birthday Garden 🌷

Website ulang tahun satu halaman, mobile-first, siap untuk GitHub Pages.

## File utama
- `index.html`
- `style.css`
- `script.js`
- `assets/` berisi foto-foto yang sudah dioptimasi ke WebP

## Musik
Karena lagu komersial tidak disertakan di paket ini, tombol musik akan aktif kalau kamu menaruh file audio yang memang kamu punya izin untuk gunakan dengan nama:

`assets/jatuh-suka.mp3`

Kalau file belum ada, website tetap berjalan normal.

## Cara coba di Mac
Buka folder ini di VS Code, lalu pakai extension Live Server.
Atau cukup double-click `index.html` untuk preview dasar.

## Deploy gratis ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `caca-birthday-garden`.
2. Upload semua isi folder ini ke root repository.
3. Buka **Settings → Pages**.
4. Di **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu Save.
6. Tunggu sebentar sampai GitHub memberi URL Pages.

## Edit teks
Semua copy utama ada di `index.html`, jadi gampang dicari dan diganti.


## Kalau upload lewat website GitHub
HTML website ini mencari gambar/audio di folder `assets/`.
Kalau file gambar di-upload ke root repository, gambar akan rusak.

Cara aman:
1. Pastikan ada folder `assets` di repository.
2. Masuk ke folder `assets` di GitHub.
3. Klik **Add file → Upload files**.
4. Upload `hero.webp`, `gallery-1.webp` s.d. `gallery-5.webp`, `ending.webp`, dan `jatuh-suka.mp3` di dalam folder tersebut.
5. Di root repository hanya perlu `index.html`, `style.css`, `script.js`, dan `README.md`.
