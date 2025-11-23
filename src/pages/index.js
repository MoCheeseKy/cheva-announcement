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
import { FaWhatsapp } from 'react-icons/fa';

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
  const status = 'C-Learner';
  const data = [
    // Frontend DEV
    {
      'nim': '607062400048',
      'name': 'Ihsan Faiz',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '707082430007',
      'name': 'Fatkhur Royyan',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103012340185',
      'name': 'Maliki Kadafa Tsaqif',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103032400016',
      'name': 'Muhammad Naufal Sahidan',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103012340364',
      'name': 'Muhammad Amir Ashshiddiq',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103012400134',
      'name': 'Zulfa Almajid Basyaasyah',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '102012400346',
      'name': 'Imam budi prasojo',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103012400040',
      'name': 'Johanes Kevin Agustahadi',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103022400114',
      'name': 'Joanne Agnesia Nempung',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103022400084',
      'name': 'Sofia Mehira Simanihuruk',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103022300043',
      'name': 'Mohammad Ilham Firdaus',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '607022430003',
      'name': 'Fatin Muflihuts Tsani',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '607062530006',
      'name': 'Lala Fadhilah Khairunisa',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103012300316',
      'name': 'Nabila Putri Azhari',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103022530025',
      'name': 'Raihan Musthafa Kamal',
      'divisi': 'Front-End Developer',
    },
    {
      'nim': '103022430015',
      'name': 'Aruna Jannu Rezasyah',
      'divisi': 'Front-End Developer',
    },
    // Backend DEV
    {
      'nim': '103012400272',
      'name': 'Wildan Bugi Rivansyah',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103012400119',
      'name': 'Ihsan Dwika Putra',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103012400159',
      'name': 'Adison Simanullang',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '102022430060',
      'name': 'Alif Muslim Abdurrahman',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '607012430016',
      'name': 'Inaya Faridah',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103012400330',
      'name': 'Raihan Wendra Baswara',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103012400148',
      'name': 'Pangeran Clevario Decaesario',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '607062400092',
      'name': 'Naufal Sulthan Fakhry',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103012300012',
      'name': 'Shadra Mehdi Irfani',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '607062500023',
      'name': 'Moch Bagja Fadillah',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103022400039',
      'name': 'Achmad Fauzan Husain',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103022400087',
      'name': 'Anugrah Palesang Pasinggi',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103012300283',
      'name': 'Hilmi Musyafa',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '607062530023',
      'name': 'Muhammad Ammar Zayyad Rizki',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103012400368',
      'name': 'Muhammad Naufal Hartono',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103022400134',
      'name': 'Muhammad Ridho Firdaus',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '607062530004',
      'name': 'Yughi Shifa Linafusil Mugi Hidayah',
      'divisi': 'Back-End Developer',
    },
    {
      'nim': '103022300010',
      'name': 'Yudha Harwanto Putra',
      'divisi': 'Back-End Developer',
    },
    // UIUX
    {
      'nim': '103012300467',
      'name': 'Muhammad Fikri Anwar',
      'divisi': 'UI/UX',
    },
    {
      'nim': '607062400084',
      'name': 'Haura Fathinah Afiyah Mumtaz',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012400044',
      'name': 'Muhammad Fauzi Ramadhan',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012300321',
      'name': 'Muhammad Zibran Santosa',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012440004',
      'name': 'Rakha Anargya Wibowo',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012400173',
      'name': 'Rizky Febriyanto',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103022400014',
      'name': 'Naufalky Kusfito Guci',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012400098',
      'name': 'Adrian Anis Pratama',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012400229',
      'name': "Muhammad Alvin Faa'iz",
      'divisi': 'UI/UX',
    },
    {
      'nim': '607012400107',
      'name': 'Afif Nuridwi Wicaksono',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103022430014',
      'name': 'Muhammad Abyan Effendi',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012400294',
      'name': 'Naufal Edgina Apta Aisy',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103032430017',
      'name': 'Fino Dwi Fajar',
      'divisi': 'UI/UX',
    },
    {
      'nim': '707012400044',
      'name': 'Muhammad Nabil Al Fatih',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012330531',
      'name': 'Nabila Putri Aulia',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103022400095',
      'name': 'Hani Lutfi Az Zahra',
      'divisi': 'UI/UX',
    },
    {
      'nim': '103012300315',
      'name': 'Raja Hanif Shirvani',
      'divisi': 'UI/UX',
    },
    {
      'nim': '607012530002',
      'name': 'Tiara Dewi Rarasati',
      'divisi': 'UI/UX',
    },
    // Mobile DEV
    {
      'name': 'Muhammad Ihsan Romdhon',
      'nim': '103022330150',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Athallah Zacky Maulana',
      'nim': '103012330271',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Gabriel Armando Manik',
      'nim': '607062430011',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Aufa Azzaky Arief',
      'nim': '103022400029',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Kemas M Aryadary Rasyad',
      'nim': '103012300176',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Fikri Abdillah K',
      'nim': '607062500032',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Faiz Elfahad Kurniawan',
      'nim': '103012300408',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Yusup Ardiansyah Dwiharjo',
      'nim': '607062500014',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Rizkya Ramdan',
      'nim': '103022430016',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Azh Zhahir Ramadhan P',
      'nim': '103012400223',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Muhammad Huttaqi',
      'nim': '103012400055',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Raditya Kemal Thooriq',
      'nim': '103012430039',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Muhammad Ariansyah Fajar Saputra',
      'nim': '607012500067',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Muhammad Attallah Arkan Ihsani',
      'nim': '103012300468',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Hakim Akram Azizi',
      'nim': '103012400009',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Riza Muhammad Putra',
      'nim': '103022300104',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Muhammad Faiz Fadhlurrohman Bastomi',
      'nim': '103012430037',
      'divisi': 'Mobile Development',
    },
    {
      'name': 'Tiwi Arum Setyaningsih',
      'nim': '103012330171',
      'divisi': 'Mobile Development',
    },

    // Startup
    {
      'nim': '103022400055',
      'name': 'Muhammad Radhi Haidar Rafi',
      'divisi': 'Start Up',
    },
    {
      'nim': '707082400142',
      'name': 'Nesya Syafira Anandita',
      'divisi': 'Start Up',
    },
    {
      'nim': '103032400153',
      'name': 'Muhammad Hafiz Abdillah',
      'divisi': 'Start Up',
    },
    {
      'nim': '103052430017',
      'name': 'Muhammad Dzaki',
      'divisi': 'Start Up',
    },
    {
      'nim': '607062530014',
      'name': 'Muhammad Fahrezi Nasution',
      'divisi': 'Start Up',
    },
    {
      'nim': '105012330202',
      'name': 'Kundang Brilyan Shirotul Mas',
      'divisi': 'Start Up',
    },
    {
      'nim': '607012400086',
      'name': 'Adzra Nurul Aditama',
      'divisi': 'Start Up',
    },
    {
      'nim': '607012400066',
      'name': 'Ariel Kristian Gultom',
      'divisi': 'Start Up',
    },
    {
      'nim': '607062400027',
      'name': 'Muthia Luthfi Nurwindi',
      'divisi': 'Start Up',
    },
    {
      'nim': '607012500086',
      'name': 'Nico Ikhsan Fauzi',
      'divisi': 'Start Up',
    },
    {
      'nim': '607062400100',
      'name': 'Farras Muhammad Razan',
      'divisi': 'Start Up',
    },
    {
      'nim': '607062400020',
      'name': 'Mohammad Rasya Maessa Nugraha',
      'divisi': 'Start Up',
    },
    {
      'nim': '607062400107',
      'name': 'Muhammad Iqbal Gibrany',
      'divisi': 'Start Up',
    },
    {
      'nim': '607062400049',
      'name': 'Astrid Fayyaza Danishara',
      'divisi': 'Start Up',
    },
    {
      'nim': '105022400391',
      'name': 'Damai Alissa Fitriadina Arlistya',
      'divisi': 'Start Up',
    },
    {
      'nim': '103022400086',
      'name': 'Khalifa Fattan Ahmad',
      'divisi': 'Start Up',
    },
    {
      'nim': '607062530005',
      'name': 'Nadaa Az Zahra',
      'divisi': 'Start Up',
    },
    // Game DEV
    {
      'nim': '103022400069',
      'name': ' Muhammad Rizqie Sufiawan',
      'divisi': 'Game Development',
    },
    {
      'nim': '707082400085',
      'name': 'Syira Putra Alegra',
      'divisi': 'Game Development',
    },
    {
      'nim': '103022400056',
      'name': 'Muhammad Daffa Arifin',
      'divisi': 'Game Development',
    },
    {
      'nim': '103022400122',
      'name': 'Albert Sebastian Tobing',
      'divisi': 'Game Development',
    },
    {
      'nim': '103012400397',
      'name': 'Atha Fathi Murtadha',
      'divisi': 'Game Development',
    },
    {
      'nim': '103012400201',
      'name': 'Dimas Tri Mahesa',
      'divisi': 'Game Development',
    },
    {
      'nim': '707082400065',
      'name': 'Arya Maulana Nursanto',
      'divisi': 'Game Development',
    },
    {
      'nim': '707082330149',
      'name': 'Putu Bagus Ananta Krisna Paritranaya',
      'divisi': 'Game Development',
    },
    {
      'nim': '103012330422',
      'name': 'Binar Muhammad Faza',
      'divisi': 'Game Development',
    },
    {
      'nim': '707082400048',
      'name': 'Giftalla Mauly Faidza',
      'divisi': 'Game Development',
    },
    {
      'nim': '103012400088',
      'name': 'Naufal Hanif',
      'divisi': 'Game Development',
    },
    {
      'nim': '103012400080',
      'name': 'Nazal Putra Pindha Dharmawara',
      'divisi': 'Game Development',
    },
    {
      'nim': '103012340525',
      'name': 'Suara Jingga Yoe',
      'divisi': 'Game Development',
    },
    {
      'nim': '103012300379',
      'name': 'Ghaisani Zhafarina ',
      'divisi': 'Game Development',
    },
    {
      'nim': '103022400107',
      'name': 'M. Rayhan Ramadhan Afdhani',
      'divisi': 'Game Development',
    },
    {
      'nim': '103022400031',
      'name': 'Raissha Najwa Maharani',
      'divisi': 'Game Development',
    },
    {
      'nim': '101022500138',
      'name': 'Almer Fakhir Arwonio ',
      'divisi': 'Game Development',
    },
    {
      'nim': '607062500050',
      'name': 'M. Rasyid Asyran',
      'divisi': 'Game Development',
    },
  ];

  return (
    <div className={`${manrope.className}`}>
      <RegistrationSteps />
      <InputNimDialog />
      <OopsDialog />
      <SetScheduleDialog />
      <CongratsDialog />
      <a href='https://wa.me/6287847714840' target='_blank'>
        <div className='text-green-600 fixed bottom-10 right-10 text-4xl cursor-pointer z-50'>
          <FaWhatsapp />
        </div>
      </a>
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
        <DialogContent className='rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[268px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
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
        <DialogContent className='rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[268px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
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
        <DialogContent className='rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[268px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
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
              has passed this stage and has been accepted into the{' '}
              <span className='font-semibold text-primary'>
                {Data[0]?.divisi}
              </span>
              ! Your journey isn’t over yet, it’s time to move on to the next
              step! Join the group by click{' '}
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
            <a
              href='https://docs.google.com/spreadsheets/d/1_fyYMW1FBtjpQNqQDk6GGLtMVnSqEnjCChfbi3l1tNw/edit?gid=1385190244#gid=1385190244'
              target='_blank'
            >
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
        <DialogContent className='rounded-[20px] bg-white pt-9 pb-12 px-6 text-center shadow-lg sm:max-w-[268px] sm:min-w-[609px] sm:px-[66px] sm:pb-[52px]'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold text-black text-center sm:text-[32px]'>
              Congratulations For You
            </DialogTitle>
          </DialogHeader>

          <div className='flex flex-col items-center gap-8 sm:gap-10'>
            <div className='w-[100px] aspect-square bg-yey bg-cover bg-no-repeat sm:w-[140px]' />
            <DialogDescription className='text-base text-center text-[#0E1925]'>
              Congratulations to you{' '}
              <span className='font-semibold text-primary'>
                {Data[0]?.name}
              </span>{' '}
              with NIM{' '}
              <span className='font-semibold text-primary'>{Data[0]?.nim}</span>{' '}
              after a long selection process we are pleased to announce that you
              have successfully passed and been accepted into the Study Group{' '}
              <span className='font-semibold text-primary'>
                {Data[0]?.divisi}
              </span>{' '}
              division.
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
            <a
              href='https://chat.whatsapp.com/BeV5aHkowwM7wtvgbVjNTT?mode=hqrt1'
              target='_blank'
            >
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
        <div className={`h-8 w-8 rounded-full bg-primary`} />

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
            className={`relative z-10 h-8 w-8 flex-shrink-0 rounded-full bg-primary`}
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
        status: 'Clossed',
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
                <div className='h-full w-full rounded-full bg-primary' />
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
                const lineColor = 'bg-primary';
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
