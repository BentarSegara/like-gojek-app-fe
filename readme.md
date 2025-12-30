# Ujek - Aplikasi Transportasi & Layanan Online

Ujek adalah aplikasi mobile berbasis React Native yang menyediakan berbagai layanan transportasi dan pengiriman. Dokumentasi ini berfokus pada **User Interface (UI)** aplikasi.

---

## 🎨 Tema Warna

| Warna | Kode Hex | Penggunaan |
|-------|----------|------------|
| Hijau Primer | `#5ecc5bff` | Header, tombol utama, ikon aktif |
| Hijau Sekunder | `#49a346ff` | Tab bar aktif |
| Putih | `#ffffff` | Background, teks pada header |
| Abu-Abu | `#918d8dff` | Ikon tidak aktif |
| Merah | `#cc1010ff` | Tombol logout, pesan error |

---

## 📱 Struktur Halaman

### 1. Splash Screen
Halaman pembuka aplikasi dengan tampilan minimalis.

**Komponen UI:**
- Background hijau penuh (`#5ecc5bff`)
- Ikon motor (FontAwesome `faMotorcycle`)
- Logo teks "Ujek" dengan font bold ukuran 35

**Navigasi:** Otomatis ke Home setelah 1 detik

---

### 2. Home Screen
Halaman utama yang menampilkan layanan dan promo.

**Komponen UI:**

#### Header
- Teks sapaan "Selamat Datang, [Nama User]"
- Ikon notifikasi (lonceng)
- Kartu saldo UPay dengan tombol "Top Up"

#### Layanan Kami
Grid 6 tombol layanan dengan ikon dan warna berbeda:

| Layanan | Ikon | Warna Background |
|---------|------|------------------|
| URide | `faLocationDot` | `#3BCC57` |
| UCar | `faCarSide` | `#4480FF` |
| UFood | `faUtensils` | `#F0505A` |
| USend | `faCube` | `#F5B925` |
| UMart | `faBagShopping` | `#8F4AFF` |
| UPulsa | `faMobile` | `#EB4A72` |

#### Promo Spesial
- Judul section dengan link "Lihat Semua"
- Kartu promo dengan gradient warna:
  - **Discount**: Orange gradient (`#F9773B` → `#F99B4A`)
  - **Cashback**: Ungu gradient (`#597CFB` → `#BD63FA`)
  - **Special**: Hijau gradient (`#38D879` → `#6DEF4D`)

---

### 3. Order Screen
Halaman riwayat pesanan pengguna.

**Komponen UI:**

#### Header
- Background hijau dengan rounded bottom corners
- Judul "Riwayat Pesanan"
- Total jumlah pesanan
- Tombol kalender untuk filter tanggal

#### Filter Kategori
Horizontal scroll dengan chip kategori:
- Semua, URide, UCar, UFood, USend, UMart, UPulsa
- Chip aktif berwarna hijau, non-aktif abu-abu

#### Kartu Pesanan (OrderList)
Setiap kartu menampilkan:
- **Basic Info**: Ikon layanan, nama layanan, ID pesanan, status
- **Status Badge**:
  - Selesai: Hijau (`#d0f7d0ff`)
  - Proses: Kuning (`#f8f07eff`)
  - Dibatalkan: Merah (`#fda1a1ff`)
- **Detail Pengiriman**: Lokasi asal dan tujuan
- **Info Lainnya**: Tanggal, waktu, jarak, rating driver, total pembayaran
- **Tombol Aksi**: "Pesan Lagi" (outline) dan "Lihat Detail" (filled)

---

### 4. Profile Screen (Belum Login)
Halaman profil untuk pengguna yang belum masuk.

**Komponen UI:**
- Ikon avatar placeholder (lingkaran abu-abu)
- Teks "Belum Login"
- Deskripsi untuk login
- Tombol "Login" (hijau filled)
- Tombol "Daftar Akun" (hijau outline)
- Daftar menu: Pengaturan, Bantuan, Syarat dan Ketentuan, Kebijakan Privasi

---

### 5. Logged In Profile Screen
Halaman profil untuk pengguna yang sudah login.

**Komponen UI:**

#### Header
- Background hijau
- Judul "Profil Saya"
- Subtitle "Kelola informasi akun Anda"

#### Kartu Profil
- Avatar lingkaran hijau dengan ikon user
- Nama pengguna, email, nomor telepon

#### Statistik
Kartu dengan 3 kolom:
- Pesanan: Jumlah pesanan
- Ulasan: Jumlah ulasan
- Poin: Total poin

#### Menu & Logout
- Daftar menu sama seperti versi belum login
- Tombol "Keluar" berwarna merah

---

### 6. Login Screen
Halaman masuk akun.

**Komponen UI:**
- Judul "Login" (centered, bold, ukuran 24)
- Input Email dengan border abu-abu
- Input Password dengan secure entry
- Tombol "Masuk" (hijau filled)
- Pesan error (merah, jika ada)
- Link "Daftar Sekarang" untuk pengguna baru

---

### 7. Register Screen
Halaman pendaftaran akun baru.

**Komponen UI:**
- Judul "Register Akun" (centered, bold, ukuran 24)
- Input Nama Lengkap
- Input Email
- Input Password (secure entry)
- Tombol "Daftar" (hijau filled)
- Pesan error validasi (merah, jika ada)

---

## 🧩 Komponen Reusable

### 1. ServiceButton
Tombol layanan dengan ikon dan label.

| Prop | Tipe | Deskripsi |
|------|------|-----------|
| `title` | string | Label tombol |
| `icon` | FontAwesome Icon | Ikon layanan |
| `backgroundColor` | string | Warna background ikon |

### 2. PromoCard
Kartu promo dengan gradient background.

| Prop | Tipe | Deskripsi |
|------|------|-----------|
| `title` | string | Judul promo |
| `description` | string | Deskripsi promo |
| `category` | string | Kategori: discount/cashback/special |

### 3. OrderList
Komponen daftar pesanan dengan sub-komponen:
- `BasicInfo` - Header kartu dengan info dasar
- `DeliveryInfo` - Detail lokasi pengiriman
- `OtherInfo` - Waktu, driver, dan pembayaran

---

## 🧭 Navigasi

### Bottom Tab Navigator
Navigasi utama dengan 3 tab:

| Tab | Ikon | Screen |
|-----|------|--------|
| Home | `faHouse` | HomeScreen |
| Order | `faCartShopping` | OrderScreen |
| Profile | `faUser` | ProfileScreen / LoggedInProfile |

### Stack Navigator
Alur navigasi aplikasi:

```
SplashScreen
    ↓
BottomTabBar (Home, Order, Profile)
    ↓
LoginScreen ←→ RegisterScreen
```

---

## 📦 Dependencies UI

| Package | Versi | Kegunaan |
|---------|-------|----------|
| `@fortawesome/react-native-fontawesome` | 0.3.2 | Ikon FontAwesome |
| `@react-navigation/bottom-tabs` | 7.7.2 | Tab navigasi bawah |
| `@react-navigation/native-stack` | 7.6.1 | Stack navigasi |
| `react-native-linear-gradient` | 2.8.3 | Gradient pada PromoCard |
| `lucide-react-native` | 0.552.0 | Ikon tambahan (LogOut) |

---

## 🎯 Design Highlights

- **Rounded Corners**: Sudut membulat pada header, kartu, dan tombol (radius 10-25)
- **Elevation/Shadow**: Bayangan pada kartu untuk efek depth (elevation 5)
- **Color Coding**: Status pesanan dengan warna yang intuitif
- **Consistent Spacing**: Margin dan padding yang konsisten (10, 15, 20)
- **Responsive Icons**: Ukuran ikon yang proporsional (20-40)
