import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Admission from '../screens/Admission/admission';
import LMS_TreeView from './LMS_TreeView';
import Studentlist from '../screens/Student/studentlist';
import Studentedit from '../screens/Student/studentedit';
import Teacherlist from '../screens/Teachers/teacherlist';
import Teacherallocation from '../screens/Teachers/teacherallocation';
import Subjectedit from '../screens/Subjects/subjectedit';
import Subjectlist from '../screens/Subjects/subjectlist';
import Classform from '../screens/Class/classform';
import Classlist from '../screens/Class/classlist';
import Feestructure from '../screens/Fees/feestructure';
import Feesubmission from '../screens/Fees/feesubmission';
import Examresult from '../screens/Exam/examresult';
import { AccountCircle, Book, Group, Logout, MenuBook, Person, Quiz, SupervisedUserCircle } from '@mui/icons-material';
import PaymentIcon from '@mui/icons-material/Payment';
import Notfound from '../screens/Dashboard/notfound';
import User from '../screens/Home/homeuser';
import '../App.css'
import MarkAttendance from '../screens/Syllabus/syllabusform';
import Attendancelist from '../screens/Syllabus/syllabuslist';
import FeeVoucher from '../screens/Fees/feevoucher';
import Examschedule from '../screens/Exam/examschedule';
import { signOutUser } from '../config/firebaseMethods';
import LMS_NewPassword from './LMS_NewPassword';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '0px', // Changed this line
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function LMS_Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    signOutUser()
    .then(()=>{
      navigate('/')
    }).catch(()=>{
      alert('Logout Failed')
    })
  }

 
  const [treeStructure] = React.useState([
    {
      moduleName: "Admission",
      icon: <AccountCircle />,
      child: [
        {
          name: 'Admission',
          route: 'admission',
        },
      ],
    },
    {
      moduleName: "Student",
      icon: <Person />,
      child: [
        {
          name: 'Student List',
          route: 'studentlist',
        },
        {
          name: 'Student Transfer',
          route: 'transferstudent',
        },
      ],
    },
    {
      moduleName: "Teacher",
      icon: <SupervisedUserCircle />,
      child: [
        {
          name: 'Teacher List',
          route: 'teacherlist',
        },
        {
          name: 'Teacher Allocation',
          route: 'teacherallocation',
        },
      ],
    },
    {
      moduleName: "Subjects",
      icon: <MenuBook />,
      child: [
        {
          name: 'Subject Add/Edit',
          route: 'subjectedit',
        },
        {
          name: 'Subject List',
          route: 'subjectlist',
        },
      ],
    },
    {
      moduleName: "Attendance",
      icon: <Book />,
      child: [
        {
          name: 'Mark Attandance',
          route: 'markattendance',
        },
        {
          name: 'Attendance Lists',
          route: 'attendancelist',
        },
      ],
    },
    {
      moduleName: "Class",
      icon: <Group />,
      child: [
        {
          name: 'Class Form',
          route: 'classform',
        },
        {
          name: 'Class Lists',
          route: 'classlist',
        },
      ],
    },
    {
      moduleName: "Fee",
      icon: <PaymentIcon />,
      child: [
        {
          name: 'Fee Structure Form',
          route: 'feestructure',
        },
        {
          name: 'Fee Submission',
          route: 'feesubmission',
        },
        {
          name: 'Fee Voucher',
          route: 'feevoucher',
        },
      ],
    },
    {
      moduleName: "Examination",
      icon: <Quiz />,
      child: [
        {
          name: 'Exam Schedule ',
          route: 'examschedule',
        },
        {
          name: 'Exam Result',
          route: 'examresult',
        },
      ],
    },
    
  ]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={() => navigate("/home/user")} className='fw-bold' variant="h4" noWrap component="div">
            Learning Management System
          </Typography>
          {/* <Logout onClick={() => signOutUser().then(()=>{navigate('/')}) } fontSize='large' /> */}
          <Logout onClick={logout} fontSize='large' />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img className='school-logo mt-5 mb-5' src={`https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg?w=740`} alt="" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <LMS_TreeView treeStructure={treeStructure} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path='*' element={<Notfound />} />
          <Route path='user' element={<User />} />
          <Route path='admission' element={<Admission />} />
          <Route path='studentlist' element={<Studentlist />} />
          <Route path='transferstudent' element={<Studentedit />} />
          <Route path='teacherlist' element={<Teacherlist />} />
          <Route path='teacherallocation' element={<Teacherallocation />} />
          <Route path='subjectedit' element={<Subjectedit />} />
          <Route path='subjectlist' element={<Subjectlist />} />
          <Route path='markattendance' element={<MarkAttendance />} />
          <Route path='attendancelist' element={<Attendancelist />} />
          <Route path='classform' element={<Classform />} />
          <Route path='classlist' element={<Classlist />} />
          <Route path='feestructure' element={<Feestructure />} />
          <Route path='feesubmission' element={<Feesubmission />} />
          <Route path='feevoucher' element={<FeeVoucher />} />
          <Route path='examschedule' element={<Examschedule />} />
          <Route path='examresult' element={<Examresult />} />
          <Route path='newPassword' element={<LMS_NewPassword />} />
        </Routes>
      </Box>
    </Box>
  );
}
