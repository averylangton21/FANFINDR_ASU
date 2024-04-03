import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MessageIcon from '@mui/icons-material/Message';
import RateReviewIcon from '@mui/icons-material/RateReview';
import BarChartIcon from '@mui/icons-material/BarChart';

export const DashboardNavbarData = [
    {
        title: "Dashboard",
        path: '/dashboard',
        icon: <DashboardOutlinedIcon />,
    },
    {
        title: "Schedule Post",
        path: '/schedulepost',
        icon: <CalendarMonthOutlinedIcon />,
    },
    {
        title: "Sporting Events",
        path: '/sportingevents',
        icon: <EmojiEventsOutlinedIcon />,
    },
    {
        title: "Messages",
        path: '/messages',
        icon: <MessageIcon />,
    },
    {
        title: "Reviews",
        path: '/reviews',
        icon: <RateReviewIcon />,
    },
    {
        title: "Analytics",
        path: '/analytics',
        icon: <BarChartIcon />,
    },
]