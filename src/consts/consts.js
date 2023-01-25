// import { ReactComponent as Individualni } from '../assets/icons/individualni.svg';
// import { ReactComponent as Cardio } from '../assets/icons/cardio.svg';
// import { ReactComponent as EverydayFitness } from '../assets/icons/everyday-fitness.svg';
// import { ReactComponent as Foundation } from '../assets/icons/foundation.svg';
// import { ReactComponent as Power } from '../assets/icons/power.svg';
// import { ReactComponent as Wod } from '../assets/icons/WOD.svg';
import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { GiStairs, GiWeightLiftingUp } from 'react-icons/gi';
import { ImPower } from 'react-icons/im';
import { IoAccessibilitySharp } from 'react-icons/io5';

export const programs = [
  {
    Icon: (props) => <IoAccessibilitySharp {...props} />,
    name: 'INDIVIDUALNI',
    desc: 'Nije bitno samo naći personalnog trenera, nego naći pravog.',
  },
  {
    Icon: (props) => <ImPower {...props} />,
    name: 'POWER!',
    desc: 'Jer je stalni napredak jedini put',
  },
  {
    Icon: (props) => <GiStairs {...props} />,
    name: 'FOUNDATIONS',
    desc: 'Jer su solidne osnove ključ uspeha',
  },
  {
    Icon: (props) => <GiWeightLiftingUp {...props} />,
    name: 'WOD',
    desc: 'Jer su osnove tu samo da bi se savladale',
  },
  {
    Icon: (props) => <FaRunning {...props} />,
    name: 'CARDIO',
    desc: 'Jer je savršeno telo u oku posmatrača',
  },
  {
    Icon: (props) => <FaDumbbell {...props} />,
    name: 'EVERYDAY FITNESS',
    desc: 'Za bolji svaki dan',
  },
];
