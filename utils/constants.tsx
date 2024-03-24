import { BsCode, BsMusicNoteList } from 'react-icons/bs';
import { GiFlatPawPrint, GiChickenOven, GiMaterialsScience, GiPencilBrush } from 'react-icons/gi';
import { BiMoviePlay, BiMedal} from 'react-icons/bi';
import { RiGamepadLine} from 'react-icons/ri';


export const topics = [
  {
    name: 'music',
    icon: <BsMusicNoteList />,
  },
  {
    name: 'technology',
    icon: <BsCode />,
  },
  {
    name: 'art',
    icon: <GiPencilBrush />,
  },
  {
    name: 'movies',
    icon: <BiMoviePlay />,
  },
  {
    name: 'game',
    icon: <RiGamepadLine />,
  },
  {
    name: 'food',
    icon: <GiChickenOven />,
  },
  {
    name: 'science',
    icon: <GiMaterialsScience />,
  },
  {
    name: 'animals',
    icon: <GiFlatPawPrint/>,
  },
  {
    name: 'sports',
    icon: <BiMedal />,
  },
 
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'Kongsi for Good','Advertise','Developers','Transparency','Kongsi Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]