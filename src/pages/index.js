import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Manrope } from 'next/font/google';
import { useState } from 'react';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function Home() {
  const [Data, setData] = useState([]);
  const [OpenInputNimDialog, setOpenInputNimDialog] = useState(false);
  const [OpenDialogFail, setOpenDialogFail] = useState(false);
  const [OpenDialogSetSchedule, setOpenDialogSetSchedule] = useState(false);
  const [OpenDialogCongrats, setOpenDialogCongrats] = useState(false);
  const status = 'Set Schedule';
  const data = [
    // Frontend DEV
    {
      'nim': '607062400048',
      'name': 'Ihsan Faiz',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '707082430007',
      'name': 'Fatkhur Royyan',
      'prodi': 'S1 Terapan Teknologi Rekayasa Multimedia',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012340185',
      'name': 'Maliki Kadafa Tsaqif',
      'prodi': 'S1 Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103032400016',
      'name': 'Muhammad Naufal Sahidan',
      'prodi': 'S1 Teknologi Informasi',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '607062500013',
      'name': 'Ahmad Zaki Sukmawansyah',
      'prodi': 'D3 RPLA',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012340364',
      'name': 'Muhammad Amir Ashshiddiq',
      'prodi': 'International Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103032400042',
      'name': 'Joanna Michelle Tambunan',
      'prodi': 'S1 Teknologi Informasi',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012400134',
      'name': 'Zulfa Almajid Basyaasyah',
      'prodi': 'S1 Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012430027',
      'name': 'Hafiz Fajar Ramadhan',
      'prodi': 'S1 Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '707012400030',
      'name': 'Rezkia Aizar',
      'prodi': 'S1 Terapan Sistem Informasi Kota Cerdas',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012400060',
      'name': 'Raihansya Abid Zhafran Ayyasy',
      'prodi': 'S1 Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '102012400346',
      'name': 'Imam budi prasojo',
      'prodi': 'S1 teknik industri',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012330066',
      'name': 'Reyhan Agra Syihab',
      'prodi': 'S1 Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '102022400224',
      'name': 'Ahmad Hafidz Maulana',
      'prodi': 'Sistem Informasi',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012400040',
      'name': 'Johanes Kevin Agustahadi',
      'prodi': 'S1 Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103022400114',
      'name': 'Joanne Agnesia Nempung',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103022400084',
      'name': 'Sofia Mehira Simanihuruk',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103022300043',
      'name': 'Mohammad Ilham Firdaus',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '607022430003',
      'name': 'Fatin Muflihuts Tsani',
      'prodi': 'D3 Teknologi Komputer',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103032430002',
      'name': 'Muhammad Wahyu Firmandana',
      'prodi': 'S1 Teknologi Informasi',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '607062530006',
      'name': 'Lala Fadhilah Khairunisa',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103012300316',
      'name': 'Nabila Putri Azhari',
      'prodi': 'S1 Informatika',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '607062500004',
      'name': 'Ali Ghimar Budiana',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103022530025',
      'name': 'Raihan Musthafa Kamal',
      'prodi': 'Rekayasa Perangkat Lunak',
      'divisi': 'Frontend Developer',
    },
    {
      'nim': '103022430015',
      'name': 'Aruna Jannu Rezasyah',
      'prodi': 'Rekayasa Perangkat lunak',
      'divisi': 'Frontend Developer',
    },
    // UIUX
    {
      'nim': '103012300306',
      'name': 'Rizky Darmawan',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012400044',
      'name': 'Muhammad Fauzi Ramadhan',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103022400095',
      'name': 'Hani Lutfi Az Zahra',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'UIUX',
    },
    {
      'nim': '607062430010',
      'name': 'Putri Aulia Lutfiyah',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'UIUX',
    },
    {
      'nim': '103022400014',
      'name': 'Nauvalky Kusfito Guci',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012400294',
      'name': 'Naufal Edgina Apta Aisy',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012300467',
      'name': 'Muhammad Fikri Anwar',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012440004',
      'name': 'Rakha Anargya Wibowo',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '607012530002',
      'name': 'Tiara Dewi Rarasati',
      'prodi': 'D3 Sistem Informasi',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012300315',
      'name': 'Raja Hanif Shirvani',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '707012400044',
      'name': 'Muhammad Nabil Al Fatih',
      'prodi': 'D4 Sistem Informasi Kota Cerdas',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012330531',
      'name': 'Nabila Putri Aulia',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012300321',
      'name': 'Muhammad Zibran Santosa',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '707082400133',
      'name': 'Zaki Syahrul Huda',
      'prodi': 'D4 Teknologi Rekayasa Multimedia',
      'divisi': 'UIUX',
    },
    {
      'nim': '103022430014',
      'name': 'Muhammad Abyan Effendi',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012400229',
      'name': "Muhammad Alvin Faa'iz",
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '607062400084',
      'name': 'Haura Fathinah Afiyah Mumtaz',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012400098',
      'name': 'Adrian Anis Pratama',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012300120',
      'name': 'Sitti Fadhillah Nur Ahsan',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012300329',
      'name': 'Salsabilla Najwa Khasanah',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '707082400004',
      'name': 'Andi Ahmad Surya',
      'prodi': 'D4 Teknologi Rekayasa Multimedia',
      'divisi': 'UIUX',
    },
    {
      'nim': '707082430009',
      'name': 'Nadhira Rahma Salsabila',
      'prodi': 'D4 Teknologi Rekayasa Multimedia',
      'divisi': 'UIUX',
    },
    {
      'nim': '103032430017',
      'name': 'fino dwi fajar',
      'prodi': 'S1 Teknologi Informasi',
      'divisi': 'UIUX',
    },
    {
      'nim': '607042400083',
      'name': 'Aisyah Putri Salsabila',
      'prodi': 'D3 Digital Marketing',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012400173',
      'name': 'Rizky Febriyanto',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '607012400107',
      'name': 'Afif Nurdwi Wicaksono',
      'prodi': 'D3 Sistem Informasi',
      'divisi': 'UIUX',
    },
    {
      'nim': '103032400095',
      'name': 'Sakha Afif Hardhana',
      'prodi': 'S1 Teknologi Informasi',
      'divisi': 'UIUX',
    },
    {
      'nim': '103012400316',
      'name': 'Dafa Izul Haq',
      'prodi': 'S1 Informatika',
      'divisi': 'UIUX',
    },
    {
      'nim': '103052400058',
      'name': 'Ayyasy Adiatma',
      'prodi': 'S1 Data Sains',
      'divisi': 'UIUX',
    },
    // Mobile DEV
    {
      'nim': '103022000000',
      'name': 'Aufa Azzaky Arief',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '607063000000',
      'name': 'Muhammad Rian Nabil Maulana',
      'prodi': 'D3 RPLA',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Muhammad Faiz Fadhlurrohman Bastomi',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Faiz Elfahad Kurniawan',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '10312400009',
      'name': 'Hakim Akram Azizi',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Muhammad Huttaqi',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Muhammad Attallah Arkan Ihsani',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '607013000000',
      'name': 'Muhammad Ariansyah Fajar Saputra',
      'prodi': 'D3 SISTEM INFORMASI',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Muhammad Ihsan Abdurrasyid',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '1030120000000',
      'name': 'Azh Zhahir Ramadhan Putra',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103022000000',
      'name': 'Muhammad Ihsan Romdhon',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '607062000000',
      'name': 'Gabriel Armando Manik',
      'prodi': 'D3 RPLA',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Tiwi Arum Setyaningsih',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Athallah Zacky Maulana',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Raditya Kemal Thooriq',
      'prodi': 'Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103022000000',
      'name': 'Riza Muhammad Putra',
      'prodi': 'S 1 Rekayasa Perangkat Lunak',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Kemas M. Aryadary Rasyad',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103012000000',
      'name': 'Adam Nugraha',
      'prodi': 'S1 Informatika',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103022000000',
      'name': 'Chris Cornelis Lukito',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '607063000000',
      'name': 'Fikrii Abdillah Khoiristi',
      'prodi': 'Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '607063000000',
      'name': 'Yusup Ardiansyah Dwiharjo',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Mobile Developer',
    },
    {
      'nim': '103022000000',
      'name': 'Rizkya Ramdan',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Mobile Developer',
    },
    // Backend DEV
    {
      'nim': '607062400092',
      'name': 'Naufal Sulthan Fakhry',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Backend',
    },
    {
      'nim': '102022430060',
      'name': 'Alif Muslim Abdurrahman',
      'prodi': 'S1 Sistem Informasi',
      'divisi': 'Backend',
    },
    {
      'nim': '101032400026',
      'name': 'Dwi Yudha Kartika Putransyah',
      'prodi': 'S1 Teknik Komputer',
      'divisi': 'Backend',
    },
    {
      'nim': '607062500023',
      'name': 'Moch Bagja Fadillah',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Backend',
    },
    {
      'nim': '607062530004',
      'name': 'Yughi Shifa Linafusil Mugi Hidayah',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Backend',
    },
    {
      'nim': '103022400134',
      'name': 'Muhammad Ridho Firdaus',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Backend',
    },
    {
      'nim': '103012300283',
      'name': 'Hilmi Musyafa',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '607062400031',
      'name': 'Alfonsus Dwianka Saputra',
      'prodi': 'D3 Rekayasa perangkat lunak aplikasi',
      'divisi': 'Backend',
    },
    {
      'nim': '103022400039',
      'name': 'Achmad Fauzan Husain',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Backend',
    },
    {
      'nim': '103022300010',
      'name': 'Yudha Harwanto Putra',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400368',
      'name': 'Muhammad Naufal Hartono',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103012300012',
      'name': 'Shadra Mehdi Irfani',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103022400117',
      'name': 'ILHAM TIO RAMADHAN',
      'prodi': 'S1 REKAYASA PERANGKAT LUNAK',
      'divisi': 'Backend',
    },
    {
      'nim': '607062530023',
      'name': 'Muhammad Ammar Zayyad Rizki',
      'prodi': 'D3 RPLA',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400119',
      'name': 'Ihsan Dwika Putra',
      'prodi': 'Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '607062500015',
      'name': 'Ammar raffa zainuddin',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400159',
      'name': 'Adison Simanullang',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400272',
      'name': 'Wildan Bugi Rivansyah',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400330',
      'name': 'RAIHAN WENDRA BASWARA',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400148',
      'name': 'Pangeran Clevario Decaesario',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400239',
      'name': 'Farhan Muhammad Huda',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400050',
      'name': 'Ahmad Faris',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    {
      'nim': '103022400087',
      'name': 'Anugrah Palesang Pasinggi',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Backend',
    },
    {
      'nim': '607012430016',
      'name': 'Inaya Faridah',
      'prodi': 'D3 Sistem Informasi',
      'divisi': 'Backend',
    },
    {
      'nim': '103012400004',
      'name': 'Muchammad Munawir Habibur Rochman',
      'prodi': 'S1 Informatika',
      'divisi': 'Backend',
    },
    // Start-up
    {
      'nim': '607062400049',
      'name': 'Astrid Fayyaza Danishara',
      'prodi': 'D3 RPLA',
      'divisi': 'StartUp',
    },
    {
      'nim': '103022400016',
      'name': 'I PUTU GEDE DEVA GUNDHALA',
      'prodi': 'REKAYASA PERANGKAT LUNAK',
      'divisi': 'StartUp',
    },
    {
      'nim': '607012400086',
      'name': 'Adzra Nurul Aditama',
      'prodi': 'D3 Sistem Informasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '103022400086',
      'name': 'Khalifa Fattan Ahmad',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'StartUp',
    },
    {
      'nim': '707082400142',
      'name': 'Nesya Syafira Anandita',
      'prodi': 'Teknologi Rekayasa Multimedia',
      'divisi': 'StartUp',
    },
    {
      'nim': '607062400107',
      'name': 'Muhammad iqbal gibrany',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '607062530021',
      'name': 'Mustofa Bahsin',
      'prodi': 'Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '103052430011',
      'name': 'Adinda Hayun Khoirunnisa',
      'prodi': 'S1 Sains Data',
      'divisi': 'StartUp',
    },
    {
      'nim': '607062400027',
      'name': 'Muthia Luthfi Nurwindi',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '105022400391',
      'name': 'Damai Alissa Fitriadina Arlistya',
      'prodi': 'S1 Ilmu Komunikasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '103052430017',
      'name': 'Muhammad Dzaki',
      'prodi': 'S1 Sains Data',
      'divisi': 'StartUp',
    },
    {
      'nim': '607062530005',
      'name': 'Nadaa Az Zahra',
      'prodi': 'Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '607012400066',
      'name': 'Ariel Kristian Gultom',
      'prodi': 'D3 Sistem Informasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '105012330202',
      'name': 'Kundang Brilyan Shirotul Mas',
      'prodi': 'Administrasi Bisnis',
      'divisi': 'StartUp',
    },
    {
      'nim': '607012500086',
      'name': 'Nico Ikhsan Fauzi',
      'prodi': 'D3 sistem informasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '607062530014',
      'name': 'Muhammad Fahrezi Nasution',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '607012400018',
      'name': 'Fitri amelia sitorus',
      'prodi': 'D3 Sistem informasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '103032400153',
      'name': 'Muhammad Hafiz Abdillah',
      'prodi': 'S1 Teknologi Informasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '103012300383',
      'name': 'Novel Shiffa Octaviani',
      'prodi': 'S1 Informatika',
      'divisi': 'StartUp',
    },
    {
      'nim': '103022400055',
      'name': 'Muhammad Radhi Haidar Rafi',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'StartUp',
    },
    {
      'nim': '607062400020',
      'name': 'Mohammad Rasya Maessa Nugraha',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'StartUp',
    },
    {
      'nim': '103012300379',
      'name': 'Ghaisani Zhafarina',
      'prodi': 'S1 Informatika',
      'divisi': 'StartUp',
    },
    {
      'nim': '103022430014',
      'name': 'Muhammad Abyan Effendi',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'StartUp',
    },
    {
      'nim': '103012400308',
      'name': 'Farrel Tampubolon',
      'prodi': 'S1 Informatika',
      'divisi': 'StartUp',
    },
    {
      'nim': '607062400100',
      'name': 'Farras Muhammad Razan',
      'prodi': 'D3 Rekayasa Perangkat Lunak Aplikasi',
      'divisi': 'StartUp',
    },
    // Game DEV
    {
      'nim': '103012330422',
      'name': 'Binar Muhammad Faza',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012400080',
      'name': 'Nazal Putra Pindhad',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012300216',
      'name': 'Arsyad Maulana Ahsan',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '2407112398',
      'name': 'Fathin Ahmad Zidan A',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103022400122',
      'name': 'Albert Sebastian Tobing',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012400088',
      'name': 'Naufal Hanif',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012340525',
      'name': 'Suara Jingga Yoe',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012300379',
      'name': 'Ghaisani Zhafarina',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '707082400065',
      'name': 'Arya Maulana Nursanto',
      'prodi': 'D4 Teknologi Rekayasa Multimedia',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012400155',
      'name': 'Akmal Luigi Pradana',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '707022500036',
      'name': 'Muhammad Caesar Rifqi',
      'prodi': 'D4 Teknologi Rekayasa Multimedia',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103022400056',
      'name': 'Muhammad Daffa Arifin',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012400201',
      'name': 'DIMAS TRI MAHESA',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '707082400085',
      'name': 'Syira Putra Alegra',
      'prodi': 'S1 Terapan Teknologi Rekayasa Multimedia',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103022400031',
      'name': 'Raissha Najwa Maharani',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Game Developer',
    },
    {
      'nim': '607062400049',
      'name': 'Astrid Fayyaza Danishara',
      'prodi': 'D3 RPLA',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012400173',
      'name': 'RIZKY FEBRIYANTO',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '707082400048',
      'name': 'GIftalla Mauly Faidza',
      'prodi': 'S1 Teknologi Rekayasa Multimedia',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012400397',
      'name': 'Atha Fathi Murtadha',
      'prodi': 'D3 RPLA',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103022400107',
      'name': 'M. Rayhan Ramadhan Afdhani',
      'prodi': 'S1 Rekayasa Perangkat Lunak',
      'divisi': 'Game Developer',
    },
    {
      'nim': '103012300467',
      'name': 'Muhammad Fikri Anwar',
      'prodi': 'S1 Informatika',
      'divisi': 'Game Developer',
    },
    {
      'nim': '101022500138',
      'name': 'Almer Fakhir Arwonio',
      'prodi': 'S1 Teknik Elektro',
      'divisi': 'Game Developer',
    },
    {
      'nim': '707082330149',
      'name': 'Putu Bagus Ananta Krisna Paritranaya',
      'prodi': 'D4 Teknologi Rekayasa Multimedia',
      'divisi': 'Game Developer',
    },
    {
      'nim': '607062500050',
      'name': 'M. Rasyid Asyran',
      'prodi': 'Rekayasa Perangkat Lunak',
      'divisi': 'Game Developer',
    },
  ];

  return (
    <div className={`${manrope.className}`}>
      <RegistrationSteps />
      <InputNimDialog />
      <OopsDialog />
      <SetScheduleDialog />
      <CongratsDialog />
    </div>
  );

  function InputNimDialog() {
    const [localNIM, setLocalNIM] = useState('');

    const handleCheckNIM = (e) => {
      e.preventDefault();
      const found = data.filter((item) => item.nim === localNIM);
      if (found.length > 0) {
        setData(found);
        console.log('Data ditemukan:', found);
        if (status === 'Set Schedule') {
          setOpenDialogSetSchedule(true);
        } else {
          setOpenDialogCongrats(true);
        }
        setOpenInputNimDialog(false);
        setLocalNIM('');
      } else {
        setData([]);
        setOpenInputNimDialog(false);
        setOpenDialogFail(true);
        setLocalNIM('');
      }
    };

    return (
      <Dialog open={OpenInputNimDialog} onOpenChange={setOpenInputNimDialog}>
        <DialogContent className='max-w-sm rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[609px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold text-black text-center sm:text-[32px]'>
              Announcement!
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handleCheckNIM}
            className='flex flex-col items-center gap-8 sm:gap-[50px]'
          >
            <div className='w-[100px] aspect-square bg-sound bg-cover bg-no-repeat sm:w-[140px]' />
            <input
              placeholder='Input NIM'
              className='h-[45px] w-full rounded-[14px] border-none bg-[#F6F5F4] px-4 text-black outline-none sm:w-[449px]'
              type='text'
              value={localNIM}
              onChange={(e) => {
                setLocalNIM(e.target.value);
              }}
              required
            />
            <DialogFooter className='mt-6 flex w-full sm:justify-center'>
              <Button
                type='submit'
                variant='outline'
                className='w-full max-w-[356px] rounded-xl border-[1px] border-primary bg-white text-primary duration-75 hover:bg-primary hover:text-white'
              >
                Check
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  function OopsDialog() {
    return (
      <Dialog open={OpenDialogFail} onOpenChange={setOpenDialogFail}>
        <DialogContent className='max-w-sm rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[609px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold text-black text-center sm:text-[32px]'>
              Oopss...
            </DialogTitle>
          </DialogHeader>

          <div className='flex flex-col items-center gap-8 sm:gap-10'>
            <div className='w-[100px] aspect-square bg-ops bg-cover bg-no-repeat sm:w-[140px]' />
            <DialogDescription className='text-base text-center text-[#0E1925]'>
              We{"'"}re sorry to say this, but after careful consideration, we
              have decided that you have not passed this selection stage. We
              truly appreciate your participation and value your enthusiasm and
              motivation. We look forward to seeing you in the next opportunity.
            </DialogDescription>
          </div>

          <DialogFooter className='mt-6 flex w-full sm:justify-center'>
            <Button
              variant='outline'
              className='w-full max-w-[356px] rounded-xl border-[1px] border-primary bg-white text-primary duration-75 hover:bg-primary hover:text-white'
              onClick={() => setOpenDialogFail(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  function SetScheduleDialog() {
    return (
      <Dialog
        open={OpenDialogSetSchedule}
        onOpenChange={setOpenDialogSetSchedule}
      >
        <DialogContent className='max-w-sm rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[609px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold text-black text-center sm:text-[32px]'>
              Congratulations For You
            </DialogTitle>
          </DialogHeader>

          <div className='flex flex-col items-center gap-8 sm:gap-10'>
            <div className='w-[100px] aspect-square bg-yey bg-cover bg-no-repeat sm:w-[140px]' />
            <DialogDescription className='text-base text-center text-[#0E1925]'>
              <span className='font-semibold text-primary'>
                {Data[0]?.name}
              </span>{' '}
              with NIM{' '}
              <span className='font-semibold text-primary'>{Data[0]?.nim}</span>{' '}
              has passed this stage! Your journey isn’t over yet, it’s time to
              move on to the next step! Join the group by click{' '}
              <a
                target='_blank'
                className='font-semibold text-primary underline'
                href='https://chat.whatsapp.com/LfrPsAUGahOA1a8RTE6lfq?mode=hqrt1'
              >
                join group
              </a>{' '}
              for more information.
            </DialogDescription>
          </div>

          <DialogFooter className='mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
            <Button
              variant='outline'
              className='w-full max-w-[356px] rounded-xl border-[1px] border-primary bg-white text-primary duration-75 hover:bg-primary hover:text-white'
              onClick={() => setOpenDialogSetSchedule(false)}
            >
              Close
            </Button>
            <a href='wa.me/+6281210714320' target='_blank'>
              <Button
                variant='outline'
                className='w-full max-w-[356px] rounded-xl border-[1px] border-white bg-primary text-white duration-75 hover:border-primary hover:bg-white hover:text-primary'
              >
                Set a Schedule
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  function CongratsDialog() {
    return (
      <Dialog open={OpenDialogCongrats} onOpenChange={setOpenDialogCongrats}>
        <DialogContent className='max-w-sm rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[609px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold text-black text-center sm:text-[32px]'>
              Congratulations For You
            </DialogTitle>
          </DialogHeader>

          <div className='flex flex-col items-center gap-8 sm:gap-10'>
            <div className='w-[100px] aspect-square bg-yey bg-cover bg-no-repeat sm:w-[140px]' />
            <DialogDescription className='text-base text-center text-[#0E1925]'>
              Congratulations to you
              <span className='font-semibold text-primary'>
                {Data[0]?.name}
              </span>{' '}
              with NIM{' '}
              <span className='font-semibold text-primary'>{Data[0]?.nim}</span>{' '}
              after a long selection process we are pleased to announce that you
              have successfully passed and been accepted into the Study Group
              {Data[0]?.divisi} division.
            </DialogDescription>
          </div>

          <DialogFooter className='mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
            <Button
              variant='outline'
              className='w-full max-w-[356px] rounded-xl border-[1px] border-primary bg-white text-primary duration-75 hover:bg-primary hover:text-white'
              onClick={() => setOpenDialogCongrats(false)}
            >
              Close
            </Button>
            <a href='wa.me/+6281210714320' target='_blank'>
              <Button
                variant='outline'
                className='w-full max-w-[356px] rounded-xl border-[1px] border-white bg-primary text-white duration-75 hover:border-primary hover:bg-white hover:text-primary'
              >
                I{"'"}m C-Learner
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  function StepItemDesktop({ title, description, status, circleColor }) {
    return (
      <div className='flex w-1/3 flex-col items-center px-4'>
        <div className={`h-8 w-8 rounded-full ${circleColor}`} />

        <h3 className='text-[22px] text-center font-bold text-gray-800 mt-[-82px] mb-[82px]'>
          {title}
        </h3>

        <p className='mt-1 text-center text-base max-w-[172px] text-gray-600'>
          {description}
        </p>

        <div className='mt-4'>
          {status === 'Clossed' ? (
            <span className='rounded-lg bg-gray-100 px-6 py-2 text-sm font-medium text-gray-400'>
              Closed
            </span>
          ) : status === 'Upcoming' ? (
            <span className='rounded-lg bg-gray-100 px-6 py-2 text-sm font-medium text-gray-400'>
              Upcoming
            </span>
          ) : (
            <button
              onClick={() => {
                setOpenInputNimDialog(true);
              }}
              className='rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-orange-600'
            >
              Check the result
            </button>
          )}
        </div>
      </div>
    );
  }

  function StepItemMobile({
    title,
    description,
    status,
    circleColor,
    isLast,
    lineColor,
  }) {
    return (
      <div className='flex flex-row'>
        <div className='relative flex flex-col items-center pr-4'>
          {!isLast && (
            <div className={`absolute top-4 h-full w-2 ${lineColor}`} />
          )}

          <div
            className={`relative z-10 h-8 w-8 flex-shrink-0 rounded-full ${circleColor}`}
          />
        </div>

        <div className='flex flex-col pb-10'>
          <h3 className='font-semibold text-gray-800'>{title}</h3>
          <p className='mt-1 text-sm text-gray-600'>{description}</p>
          <div className='mt-4'>
            {status === 'Clossed' ? (
              <span className='rounded-lg bg-gray-100 px-6 py-2 text-sm font-medium text-gray-400'>
                Closed
              </span>
            ) : status === 'Upcoming' ? (
              <span className='rounded-lg bg-gray-100 px-6 py-2 text-sm font-medium text-gray-400'>
                Upcoming
              </span>
            ) : (
              <button
                onClick={() => {
                  setOpenInputNimDialog(true);
                }}
                className='rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-orange-600'
              >
                Check the result
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  function RegistrationSteps({ classNames }) {
    const steps = [
      {
        title: 'Registration',
        description: "Your registration's applied successfully",
        status: 'Clossed',
        circleColor: 'bg-primary',
      },
      {
        title: 'Administrations stage',
        description: 'Announcement of administration stage',
        status: 'Check',
        circleColor: 'bg-primary',
      },
      {
        title: 'Interview stage',
        description: 'Announcement of interview stage',
        status: 'Upcoming',
        circleColor: 'bg-orange-100',
      },
    ];

    return (
      <div
        className={`flex min-h-screen justify-center items-center flex-col ${classNames}`}
      >
        <SectionTitle
          upper='Announcement'
          lower='Roadmap Study Group Recruitment'
        />
        <Wrapper className='my-12 w-full'>
          {/* desktop */}
          <div className='relative hidden w-full md:block'>
            <div className='absolute top-3 left-0 right-0 z-0 h-2'>
              <div className='relative h-full' style={{ margin: '0 16.666%' }}>
                <div className='h-full w-full rounded-full bg-orange-100' />
                <div className='absolute top-0 left-0 h-full w-1/2 rounded-full bg-primary' />
              </div>
            </div>

            <div className='relative z-10 flex w-full flex-row'>
              {steps.map((step) => (
                <StepItemDesktop key={step.title} {...step} />
              ))}
            </div>
          </div>

          {/* mobile */}
          <div className='w-full md:hidden'>
            <div className='flex flex-col'>
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;
                const isCurrentActive = step.circleColor === 'bg-primary';
                const isNextActive =
                  !isLast && steps[index + 1].circleColor === 'bg-primary';
                const lineColor =
                  isCurrentActive && isNextActive
                    ? 'bg-primary'
                    : 'bg-orange-100';

                return (
                  <StepItemMobile
                    key={step.title}
                    {...step}
                    isLast={isLast}
                    lineColor={lineColor}
                  />
                );
              })}
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

function Wrapper({ children, className, id }) {
  return (
    <>
      <div
        id={id || ''}
        className={`px-4 md:px-0 w-full md:w-[85%] lg:w-full max-w-[1170px] ${className} min-h-fit`}
      >
        {children}
      </div>
    </>
  );
}

function SectionTitle({ upper, lower, classNames }) {
  return (
    <div className={`flex justify-center ${classNames}`}>
      <Wrapper className='flex flex-col gap-1 my-12'>
        <h2 className='text-primary text-base lg:text-lg font-medium text-center'>
          {upper}
        </h2>
        <p className='text-3xl lg:text-[48px] text-[#0E1925] font-bold text-center'>
          {lower}
        </p>
      </Wrapper>
    </div>
  );
}

function Button({
  startIcon,
  endIcon,
  onClick,
  text,
  className,
  children,
  type = 'button',
  ...props
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-3 px-4 rounded flex justify-center items-center gap-2 bg-primary ${className}`}
      {...props}
    >
      {startIcon && startIcon}
      {text}
      {children}
      {endIcon && endIcon}
    </button>
  );
}
