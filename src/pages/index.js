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
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '707082430007',
      'name': 'Fatkhur Royyan',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103012340185',
      'name': 'Maliki Kadafa Tsaqif',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103032400016',
      'name': 'Muhammad Naufal Sahidan',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103012340364',
      'name': 'Muhammad Amir Ashshiddiq',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103012400134',
      'name': 'Zulfa Almajid Basyaasyah',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '102012400346',
      'name': 'Imam budi prasojo',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103012400040',
      'name': 'Johanes Kevin Agustahadi',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103022400114',
      'name': 'Joanne Agnesia Nempung',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103022400084',
      'name': 'Sofia Mehira Simanihuruk',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103022300043',
      'name': 'Mohammad Ilham Firdaus',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '607022430003',
      'name': 'Fatin Muflihuts Tsani',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '607062530006',
      'name': 'Lala Fadhilah Khairunisa',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103012300316',
      'name': 'Nabila Putri Azhari',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103022530025',
      'name': 'Raihan Musthafa Kamal',
      'divisi': 'FrontEnd developer',
    },
    {
      'nim': '103022430015',
      'name': 'Aruna Jannu Rezasyah',
      'divisi': 'FrontEnd developer',
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
        status: 'Check',
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
