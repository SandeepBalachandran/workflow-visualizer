import {
  FaTimesCircle,
  FaCaretRight,
  FaCaretLeft,
  FaPrint,
  FaSave,
  FaThLarge,
  FaPlus,
  FaFolder,
  FaUserAltSlash,
  FaUserClock,
  FaSmile,
} from 'react-icons/fa';
import { BiExport, BiImport } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import {  AiFillDelete, AiOutlineGithub } from 'react-icons/ai';
const icons = new Map([
  ['close', <FaTimesCircle />],
  ['rightarrow', <FaCaretRight />],
  ['leftarrow', <FaCaretLeft />],
  ['print', <FaPrint />],
  ['save', <FaSave />],
  ['folder', <FaFolder />],
  ['templates', <FaThLarge />],
  ['plus', <FaPlus />],
  ['export', <BiExport />],
  ['import', <BiImport />],
  ['settings', <FiSettings />],
  ['noregistration', <FaUserAltSlash />],
  ['fast', <FaUserClock />],
  ['happy', <FaSmile />],
  ['delete', <AiFillDelete />],
  ['github', <AiOutlineGithub />],
]);

export function getIcon(iconName: string) {
  return icons.get(iconName?.toLocaleLowerCase());
}
