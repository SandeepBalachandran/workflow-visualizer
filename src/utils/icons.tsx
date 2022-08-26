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
  FaProjectDiagram,
} from 'react-icons/fa';
import { BiExport, BiImport } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { AiFillDelete, AiOutlineGithub } from 'react-icons/ai';
import {
  BsExclamationCircleFill,
  BsInfoCircleFill,
  BsFillExclamationTriangleFill,
  BsCheckCircleFill,
} from 'react-icons/bs';

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
  ['success', <BsCheckCircleFill />],
  ['error', <BsExclamationCircleFill />],
  ['info', <BsInfoCircleFill />],
  ['warning', <BsFillExclamationTriangleFill />],
  ['diagram', <FaProjectDiagram />],
]);

export function getIcon(iconName: string) {
  return icons.get(iconName?.toLocaleLowerCase());
}
