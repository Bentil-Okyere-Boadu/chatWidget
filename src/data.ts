import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LayersIcon from '@mui/icons-material/Layers';
import SyncIcon from '@mui/icons-material/Sync';

const data = {
    features:[
        {
            icon: AccountCircleIcon,
            text:'Intelligent and interactive AI assistant'
        },
        {
            icon: QueryStatsIcon,
            text:'Automated lead generation'
        },
        {
            icon: LayersIcon,
            text:'Contextual personalization'
        },
        {
            icon: SyncIcon,
            text:'Instant responses and available 24/7'
        }
    ],
    messages: [
          {
            id: 1,
            sender: { id: '101', name: 'AIZee'},
            content: 'Bine ai venit! Hai să îți prezint cum te pot ajuta serviciile noastre de dezvoltare software și automatizare bazată pe AI.'
          },
          {
            id: 2,
            sender: { id: '101', name: 'AIZee'},
            content: 'Aşa cǎ spune-mi mai multe despre afacerea ta. Hello there, How are you doing?'
          },
          {
            id: 3,
            sender: { id: '100', name: 'Nana'},
            content: 'Hello there, How are you doing?'
          },
          {
            id: 4,
            sender: { id: '101', name: 'AIZee'},
            content: 'Hello there, How are you doing?'
          },
    ],
    user: {
        id: '100',
        name: 'Nana'
    }
}

export default data;